angular.module('mainModule', []).controller('MainController', ['$scope','Task', function($scope, Task) {

	$scope.tagline = 'Your Future is created by what you do today not tomorrow';	

	/*$scope.items = [
		{text:  'task 1', done:'false'},
		{text:  'task 2', done:'true'},
		{text:  'task 3', done:'true'}
	];*/

	$scope.items = Task.query(function() {
    	//console.log(entries);
  	}); //query() returns all the entries

	$scope.addTask = function(){
		var item = new Task({
			text: $scope.formTodoText,
			done: false
		});
		 
		Task.save(item, function (response) {
			console.log(response);
		});
		$scope.items.push(item);
		$scope.formTodoText = '';
	}

}]);