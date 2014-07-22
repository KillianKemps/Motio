angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'TodoModule/home.html',
			controller: 'TodoController'
		})

		.when('/administration', {
			templateUrl: 'AdministrationModule/administration.html',
			controller: 'AdministrationController'
		})

		.when('/login', {
			templateUrl: 'LoginModule/login.html',
			controller: 'LoginController'	
		})

		.when('/signup', {
			templateUrl: 'SignupModule/signup.html',
			controller: 'SignupController'	
		});

	$locationProvider.html5Mode(true);

}]);