module.exports = function(app) {

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

	/*****************/
	/** Sign Up API **/
	/*****************/

	var user = require('./models/user.js');
	var passport = require('passport');

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
	}));
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};