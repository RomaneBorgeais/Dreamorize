document.addEventListener('deviceready', function(){

	//Ici du code au lancement de l'appli

}, false);

var app = angular.module('app', []);

app.config(function($routeProvider){
	$routeProvider
		.when('/intro', {templateUrl: 'partials/intro.html'})

		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/sidebar', {templateUrl: 'partials/sidebar.html'})

		.when('/memoriser', {templateUrl: 'partials/memoriser.html'})
		.when('/vocal', {templateUrl: 'partials/vocal.html'})
		.when('/vocal_2', {templateUrl: 'partials/vocal_2.html'})
		.when('/vocal_3', {templateUrl: 'partials/vocal_3.html'})
		.when('/vocal_4', {templateUrl: 'partials/vocal_4.html'})
		.when('/vocal_5', {templateUrl: 'partials/vocal_5.html'})

		.when('/questions_date', {templateUrl: 'partials/questions_date.html'})
		.when('/questions_type', {templateUrl: 'partials/questions_type.html'})
		.when('/questions_couleur', {templateUrl: 'partials/questions_couleur.html'})
		.when('/questions_emotion', {templateUrl: 'partials/questions_emotion.html'})
		.when('/questions_lieu', {templateUrl: 'partials/questions_lieu.html'})
		.when('/questions_personnage', {templateUrl: 'partials/questions_personnage.html'})
		.when('/questions_personnage_humain', {templateUrl: 'partials/questions_personnage_humain.html'})
		.when('/questions_personnage_animal', {templateUrl: 'partials/questions_personnage_animal.html'})
		.when('/questions_personnage_autre', {templateUrl: 'partials/questions_personnage_autre.html'})
		.when('/questions_action', {templateUrl: 'partials/questions_action.html'})
		.when('/questions_keywords', {templateUrl: 'partials/questions_keywords.html'})
		.when('/questions_titre', {templateUrl: 'partials/questions_titre.html'})

		.when('/explorer', {templateUrl: 'partials/explorer.html'})

		.when('/visualiser', {templateUrl: 'partials/visualiser.html'})

		.when('/partager', {templateUrl: 'partials/partager.html'})

		.otherwise({redirectTo: '/home'})
})