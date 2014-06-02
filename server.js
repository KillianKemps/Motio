// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');

// configuration ===========================================
	
// config files
var dbconfig = require('./config/db');


var port = process.env.PORT || 8080; // set our port
mongoose.connect(dbconfig.url, function(err, dbconfig) {
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
	fluffy.save(function (err, fluffy) {
	  if (err) return console.error(err);
	  fluffy.speak();
	});

	//Searching all kittens
	Kitten.find(function (err, kittens) {
	  if (err) return console.error(err);
	  console.log(kittens)
	});

});

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app