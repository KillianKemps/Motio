var mongoose = require('mongoose');

/***
 * Todo Schema 
 */

var todoSchema = mongoose.Schema({
	text: String,
	done: Boolean
});


var Todo = mongoose.model('Todo', todoSchema);

exports.all = function(req, res){
		Todo.find().exec(function(err, todos) {
		if (err) {
			res.render('error', {status: 500});
		} else {
			res.jsonp(todos);
		}
	});
};

/**
 * Find todo by id and store it in the request
 */
exports.todo = function(req, res, next, id) {
  Todo.findById(id, function(err, todo) {
    if (err) return next(err);
    if (!todo) return next(new Error('Failed to load todo ' + id));
    req.todo = todo;
    next();
  });
};

/**
 * Create a todo
 */
exports.create = function(req, res) {
  var todo = new Todo(req.body);
 
  todo.save(function(err) {
    if (err) return res.json(500, err);
    res.json(todo);
  });
};