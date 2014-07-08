angular.module('mainModule', []).controller('MainController', ['$scope','Todo', function($scope, Todo) {

	$scope.tagline = 'Your Future is created by what you do today not tomorrow';	

	/*$scope.items = [
		{text:  'Todo 1', done:'false'},
		{text:  'Todo 2', done:'true'},
		{text:  'Todo 3', done:'true'}
	];*/

	$scope.items = Todo.query(function() {
    	//console.log(entries);
  	}); //query() returns all the entries

	$scope.addTodo = function(){
		var item = new Todo({
			text: $scope.formTodoText,
			done: false
		});
		 
		Todo.save(item, function (response) {
			// store this item who now got an mongo id
			$scope.items.push(response);
		});
		
		$scope.formTodoText = '';
		console.log(item);
	}

	$scope.updateTodo = function(_id, done, angularId){
		$scope.item = Todo.get({ todoId: _id }, function() {
			// $scope.item is fetched from server and is an instance of Todo
			$scope.item.done = done;
			$scope.item.$update(function(response) {
			});
			if(done == true)
			{
				$scope.removeTodo($scope.item, angularId);
			}
		});
		
	}

	$scope.removeTodo = function(item, id){
		// remove item from database
		item.$remove(function() {
		});
		// remove item from view
		$scope.items.splice(id, 1)
	}
 	

}]);