// modules =================================================
var express 	= require('express');
var app     	= express();
var mongoose	= require('mongoose');
var passport 	= require('passport');
var session     = require('express-session');
var flash 	 	= require('connect-flash');
var cookieParser = require('cookie-parser');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

/*
var cookie = require("cookie");
var connect = require("connect");
var utils = require("utils");
*/

var http = require('http').Server(app);
var io = require('socket.io')(http)

// configuration ===========================================
	
// config files
var dbconfig = require('./config/db');


var port = process.env.PORT || 8080; // set our port

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/motivatemedb';

mongoose.connect(mongoUri, function(err, dbconfig) {
  if(!err) {
    console.log("We are connected to mongoDB");
  }
}); // connect to our mongoDB database (commented out after you enter in your own credentials)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	//Creating a Schema of Kitty
	var kittySchema = mongoose.Schema({
    	name: String
	});
	
	// NOTE: methods must be added to the schema before compiling it with mongoose.model()
	kittySchema.methods.speak = function () {
	  var greeting = this.name
	    ? "Meow name is " + this.name
	    : "I don't have a name"
	  console.log(greeting);
	};

	//Make the schema with the methods on a model
	var Kitten = mongoose.model('Kitten', kittySchema);
	//Creating a first kitten
	var silence = new Kitten({ name: 'Silence' });
	console.log(silence.name); // 'Silence'
	//Creating a second kitten
	var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak(); // "Meow name is fluffy"
	//Save the documents in MongoDB
	//Disabled not to spam when launching server
	/*fluffy.save(function (err, fluffy) {
	  if (err) return console.error(err);
	  fluffy.speak();
	});*/

	//Searching all kittens
	Kitten.find(function (err, kittens) {
	  if (err) return console.error(err);
	  console.log(kittens)
	});

});

	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(morgan('dev')); 					// log every request to the console
	app.use(bodyParser()); 						// pull information from html in POST
	app.use(methodOverride()); 					// simulate DELETE and PUT
	
	// required for passport
	app.use(session({
		secret: 'thisisasessionsecret',
		saveUninitialized: true,
        resave: true })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session
	app.use(cookieParser()); // read cookies (needed for auth)

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes
require('./config/passport')(passport); // pass passport for configuration

// start app ===============================================

/*io.set('authorization', function (handshakeData, accept) {

  if (handshakeData.headers.cookie) {

    handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);

    handshakeData.sessionID = connect.utils.parseSignedCookie(handshakeData.cookie['express.sid'], 'thisisasessionsecret');

    if (handshakeData.cookie['express.sid'] == handshakeData.sessionID) {
      return accept('Cookie is invalid.', false);
    }

  } else {
    return accept('No cookie transmitted.', false);
  } 

  accept(null, true);[3]
});*/

 io.use(function(socket, next){
    if (socket.request.headers.cookie) return next();
    next(new Error('Authentication error'));
  });

var clients = [];
io.on('connection', function(socket){
    console.info('Client connected (id=' + socket.id + ').');
    clients.push(socket);

    if(socket.request.headers.cookie){
        var cookieArray = socket.request.headers.cookie.split("; ");
        // Join socket to a room named by his user id
        socket.join(cookieArray[2]);
     }
    
    socket.on('new todo', function(response){
        socket.broadcast.to(cookieArray[2]).emit('new todo', response);
    });
    
    socket.on('remove todo', function(todoObject){
        socket.broadcast.to(cookieArray[2]).emit('remove todo', todoObject);
    });
    
    socket.on('disconnect', function() {
        var index = clients.indexOf(socket);
        if (index != -1) {
            clients.splice(index, 1);
            console.info('Client gone (id=' + socket.id + ').');
        }
    });
});


http.listen(port, function(){
  console.log('listening on ' + port);
});

/*app.listen(port);	*/
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app