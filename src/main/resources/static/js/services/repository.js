(function(){
  var repository = function(){
    var username = null;


    var setUsername = function(user){
      username = user;

    }
    var getUsername = function(){
      return username ;
    }

    return{
      setUsername:setUsername,
      getUsername:getUsername
    }
  }
  angular.module('myapp').service('repository',repository)
}())
