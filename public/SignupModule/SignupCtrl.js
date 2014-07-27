angular.module('SignupModule', []).controller('SignupController', function($scope, $http) {

	$scope.tagline = 'Register here and get motivated !';	

	$http.get('/signup/signupMessage').success(function(data) {
		if(data.message != "[]"){
			$scope.message = data.message;
		}
    	else {
    		$scope.message = "";
    	}
	});


});