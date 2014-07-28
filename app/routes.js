module.exports = function(app) {

	//app.engine('html', require('ejs').renderFile);

	/**************/
	/** Todo API **/
	/**************/
	var todo = require('./models/todo');

	app.param('todoId', todo.todo);
 
	app.get('/api/todo', todo.all);
	app.get('/api/todo/:todoId', todo.show)
	app.post('/api/todo', todo.create);
	app.put('/api/todo/:todoId', todo.update);
	app.del('/api/todo/:todoId', todo.remove);

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// 
	var user = require('./models/user.js');
	var passport = require('passport');

	app.post('/signup', passport.authenticate('local-signup'), function(req, res) { 
		res.send(req.user); 
	});

	// route to test if the user is logged in or not 
	app.get('/loggedin', function(req, res) { 
		res.send(req.isAuthenticated() ? req.user : '0'); 
	}); 

	// route to log in 
	app.post('/login', passport.authenticate('local-login'), function(req, res) { 
		res.send(req.user); 
	});

	// route to log out 
	app.post('/logout', function(req, res){ 
		req.logOut(); res.send(200); 
	}); 

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};