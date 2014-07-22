angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'TodoController'
		})

		.when('/administration', {
			templateUrl: 'views/administration.html',
			controller: 'AdministrationController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignupController'	
		});

	$locationProvider.html5Mode(true);

}]);