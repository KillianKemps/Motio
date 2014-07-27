angular.module('LoginModule', []).controller('LoginController', ['$scope','$http', function($scope, $http) {

	$scope.tagline = 'Login and make your day !';	

	$http.get('/login/loginMessage').success(function(data) {
		if(data.message != "[]"){
			$scope.message = data.message;
		}
    	else {
    		$scope.message = "";
    	}
	});

	/*$scope.message = message;*/
	

}]);