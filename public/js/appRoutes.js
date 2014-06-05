angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/parameters', {
			templateUrl: 'views/parameters.html',
			controller: 'ParametersController'
		})

		.when('/connect', {
			templateUrl: 'views/connect.html',
			controller: 'ConnectController'	
		})

		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegisterController'	
		});

	$locationProvider.html5Mode(true);

}]);