angular.module('SignupModule', []).controller('SignupController', function($scope, $http, $rootScope, $location) {

	$scope.tagline = 'Register here and get motivated !';	

	// This object will be filled by the form
	$scope.user = {};

	// Register the login() function
	$scope.signup = function(){
		$http.post('/signup', {
		  	email: $scope.user.email,
		  	password: $scope.user.password,
		})
		.success(function(user){
		  	// No error: authentication OK
		  	$rootScope.message = 'Signup successful!';
		  	$location.url('/');
		  	console.log(user);
		})
		.error(function(){
		  	// Error: authentication failed
		  	$rootScope.message = 'Signup failed.';
		  	$location.url('/signup');
		});
	};

});