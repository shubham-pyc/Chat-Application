  (function(){
  var chatListBuilder = function(){

    var builder = function(){
      return new chatBuilder();
    }
    function chatBuilder(){
      this.chatTitle = null;
      this.chatList = [];
      return this;
    }

    return{
      builder:builder
    }
  }
  angular.module('myapp').service('chatListBuilder',chatListBuilder);

}())
