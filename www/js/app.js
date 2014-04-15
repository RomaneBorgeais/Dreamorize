document.addEventListener('deviceready', function(){

	//Ici du code au lancement de l'appli

}, false);

var app = angular.module('app', []);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/menu', {templateUrl: 'partials/menu.html'})
		.when('/memorisation', {templateUrl: 'partials/memorisation.html'})

		.otherwise({redirectTo: '/home'})
})