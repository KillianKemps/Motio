angular.module('administrationModule', []).controller('AdministrationController', function($scope) {

	$scope.tagline = 'Here\'s where you will be able to change parameters !';

	$scope.username = 'John Doe';

	$scope.email = 'myemail@home.test';

	$scope.modulelist = [
    {'name': 'Module 1',
     'version': '1.2.3',
     'author': 'Eddy Doe',
     'website': 'http://testwebsite.fr',
     'snippet': 'One description'},
    {'name': 'Module 2',
     'version': '1.2.3',
     'author': 'Eddy Doe',
     'website': 'http://testwebsite.fr',
     'snippet': 'The second description'},
    {'name': 'Module 3',
     'version': '1.2.3',
     'author': 'Eddy Doe',
     'website': 'http://testwebsite.fr',
     'snippet': 'Another description'}
  	];

  	$scope.kernelversion = '0.1.0';

});