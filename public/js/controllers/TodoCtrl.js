angular.module('todoModule', []).controller('TodoController', ['$scope','Todo', function($scope, Todo) {

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

	$scope.updateTodo = function(_id, element, update, angularId){
		$scope.item = Todo.get({ todoId: _id }, function() {
			// $scope.item is fetched from server and is an instance of Todo
			if(element == 'done'){
				$scope.item.done = update;

				$scope.item.$update(function(response) {
				});
				// if the task is completed then delete
				if(update == true)
				{
					$scope.removeTodo($scope.item, angularId);
				}
			}
			else if(element == 'priority'){
				$scope.item.priority = update;
				console.log(update);
				$scope.item.$update(function(response) {
				});


			}
			else{

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