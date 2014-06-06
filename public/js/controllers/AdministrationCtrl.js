var administrationController = angular.module('AdministrationCtrl', []);

administrationController.controller('AdministrationController', function($scope) {

	$scope.tagline = 'Here\'s where you will be able to change parameters !';

	$scope.pseudo = 'John Doe';

	$scope.email = 'myemail@home.test';

	$scope.modulelist = [
    {'name': 'Module 1',
     'snippet': 'One description'},
    {'name': 'Module 2',
     'snippet': 'The second description'},
    {'name': 'Module 3',
     'snippet': 'Another description'}
  	];

  	$scope.kernelversion = '0.1.0';

});