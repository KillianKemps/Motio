var mongoose = require('mongoose');

/***
 * Task Schema 
 */

var taskSchema = mongoose.Schema({
	text: String,
	done: Boolean
});


var Task = mongoose.model('Task', taskSchema);

exports.all = function(req, res){
		Task.find().exec(function(err, tasks) {
		if (err) {
			res.render('error', {status: 500});
		} else {
			res.jsonp(tasks);
		}
	});
};

/**
 * Find task by id and store it in the request
 */
exports.task = function(req, res, next, id) {
  Task.findById(id, function(err, task) {
    if (err) return next(err);
    if (!task) return next(new Error('Failed to load task ' + id));
    req.task = task;
    next();
  });
};

/**
 * Create a todo
 */
exports.create = function(req, res) {
  var task = new Task(req.body);
 
  task.save(function(err) {
    if (err) return res.json(500, err);
    res.json(task);
  });
};