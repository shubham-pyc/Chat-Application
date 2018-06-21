(function(){
  var app = angular.module("myapp");


  var chat = function($http){

    var onMessageRecievedFunction = null;
    var username = "default";
    var chatBox = null;
    var receiver = null;
    var setChatBox = function(model){
      chatBox = model;
    }
    var setUsername = function(user){
      username = user;
    }
    var setReceiver = function(gReceiver){
      receiver = gReceiver;
    }
    var onMessageRecievedFunction = null;

    var setMessageFunction = function(func){
      onMessageRecievedFunction = func;
    }


    var socket = new SockJS(ip+":"+port+'/websocket');
    var stompClient = Stomp.over(socket);
    stompClient.debug = null;



     var onConnected = function(){

       stompClient.subscribe('/user/'+username+'/reply',onMessageRecieved);
       stompClient.send('/app/chat.addUser',{},JSON.stringify({sender:username,type:'JOIN'}));

    //
     }

    var onError = function(error){
      console.log('error found cannot connect to the server');
    }
    var sendMessage = function(message){

      var messageContent = message;
      if(messageContent && stompClient){
        var chatMessage = {
          sender:username,
          type:'CHAT',
          message:messageContent,
          receiver:receiver
        };
        stompClient.send('/app/chat.chatGroup',{},JSON.stringify(chatMessage));
      }
    }

    var onMessageRecieved = function(payload){

    
      var message = JSON.parse(payload.body);

      if(message.type === 'CHAT' && chatBox){
        onMessageRecievedFunction(message);
      }
    }

    stompClient.connect({}, onConnected, onError);
    return {
      onConnected:onConnected,
      sendMessage:sendMessage,
      setUsername:setUsername,
      setChatBox:setChatBox,
      setMessageFunction:setMessageFunction,
      setReceiver:setReceiver
    }
  }
app.service('chat',chat);


}());
