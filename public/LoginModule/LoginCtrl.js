angular.module('LoginModule', []).controller('LoginController', ['$scope','$http', '$rootScope', '$location', 'Login', function($scope, $http, $rootScope, $location, Login) {

	$scope.tagline = 'Login and make your day !';	
	
	// This object will be filled by the form
	$scope.user = {};

	// Register the login() function
	$scope.login = function(){
		$http.post('/login', {
		  	email: $scope.user.email,
		  	password: $scope.user.password,
		})
		.success(function(user){
		  	// No error: authentication OK
		  	$rootScope.message = 'Authentication successful!';
		  	Login.setData(user);
		  	$location.url('/');
		})
		.error(function(){
		  	// Error: authentication failed
		  	$rootScope.message = 'Authentication failed.';
		  	$location.url('/login');
		});
	};

}]);