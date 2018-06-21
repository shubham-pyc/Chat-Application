(function(){

	var app = angular.module('myapp');
	app.config(function($routeProvider){
		$routeProvider.
			when('/index',{
				templateUrl:'../templates/login.html',
				controller:'loginController'
			}).
			when('/home',{
				templateUrl:'../templates/home.html',
				controller:'homeController'
			}).
			when('/chat',{
				templateUrl:'../templates/chatbox.html',
				controller:'chatController'}).
			otherwise({
				redirectTo:'/index'
			})
	})
}());
