(function(){
  var server = function($http){
    var login = function(username,password){
        var obj = {
          "username":username,
          "password":password
        };

        return $http.post(ip+":"+port+"/login",obj);

    }
    var register = function(username,password){
      var obj = {
        "username":username,
        "password":password
      };
      return $http.post(ip+":"+port+"/register",obj);

    }



    //------------------------------------------------ return ------------------------------/
    return{
      login:login,
      register:register
    }
  }
  angular.module('myapp').service('server',server);
}());
