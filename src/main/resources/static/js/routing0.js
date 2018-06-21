(function(){

	var app = angular.module('myapp');
	app.config(function($routeProvider){
		$routeProvider.
			when('/index',{
				templateUrl:'templates/login.html',
				controller:'loginController'
			}).
			when('/home',{
				templateUrl:'templates/home.html',
				controller:'homeController'
			}).
			when('/chat',{
				templateUrl:'templates/chatbox.html',
				controller:'chatController',
				resolve: {
        "check": function($location,repository) {
          if(repository.getUsername() == null)
          {
            $location.path('/index');
          }
        }
      }}).
			otherwise({
				redirectTo:'/index'
			})
	})
}());
