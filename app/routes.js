module.exports = function(app) {

	var todo = require('./models/todo');

	app.param('todoId', todo.todo);
 
	
	app.get('/api/todo', todo.all);
	app.post('/api/todo', todo.create);
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};