angular.module('mainModule', []).controller('MainController', ['$scope','Todo', function($scope, Todo) {

	$scope.tagline = 'Your Future is created by what you do today not tomorrow';	

	//query() returns all the entries
	$scope.items = Todo.query(function() {
  	}); 

	$scope.addTodo = function(){
		var item = new Todo({
			text: $scope.formTodoText,
			done: false
		});
		 
		Todo.save(item, function (response) {
			// store this item who now got a mongo id
			$scope.items.push(response);
		});
		
		$scope.formTodoText = '';
	}

	$scope.updateTodo = function(_id, done, angularId){
		$scope.item = Todo.get({ todoId: _id }, function() {
			// $scope.item is fetched from server and is an instance of Todo
			$scope.item.done = done;
			$scope.item.$update(function(response) {
			});
			// if the task is completed then delete
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