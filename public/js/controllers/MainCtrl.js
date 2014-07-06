angular.module('mainModule', []).controller('MainController', function($scope) {

	$scope.tagline = 'Your Future is created by what you do today not tomorrow';	

	$scope.items = [
		{text:  'task 1', done:'false'},
		{text:  'task 2', done:'true'},
		{text:  'task 3', done:'true'}
	];

	$scope.addTask = function(){
		var item = {text: $scope.formTodoText, done: false};
		$scope.items.push(item);
		$scope.formTodoText = '';
	}
});