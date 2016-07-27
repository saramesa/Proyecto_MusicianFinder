//ANGULAR
var app = angular.module('project', ['ngRoute', 'ngStorage', 'angular-toArrayFilter']);


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {	
		templateUrl: 'views/home.html',
		controller: 'HomeViewController'
	})
	.when('/bars', {	
		templateUrl: 'views/bars.html',
		controller: 'FilterController'
	})
	.when('/artists', {	
		templateUrl: 'views/artists.html',
		controller: 'FilterController'
	})
	.when('/signin', {	
		templateUrl: 'views/form.html',
		controller: 'HomeViewController'
	})
	.when('/register', {	
		templateUrl: 'views/register.html',
		controller: 'RegisterController'
	})
	.when('/add-new-item', {
		templateUrl: 'views/add-new-item.html',
		controller: 'RegisterController'
	})
	.when('/profile', {
		templateUrl: 'views/profile.html',
		controller: 'ProfileController'
	})
	.when('/artist/:name', {
		templateUrl: 'views/eachArtistView.html',
		controller: 'eachArtistController'
	})
	.when('/bar/:name', {
		templateUrl: 'views/eachBarView.html',
		controller: 'eachArtistController'
	})
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'HomeViewController'
	})
	.otherwise({
		redirectTo: '/'
	})
}])