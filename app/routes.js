module.exports = function(app) {

	var tasks = require('./models/tasks');

	app.param('taskId', tasks.task);
 
	
	app.get('/api/todo', tasks.all);
	app.post('/api/todo', tasks.create);
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};