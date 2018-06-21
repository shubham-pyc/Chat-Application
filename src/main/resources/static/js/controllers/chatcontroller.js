(function() {

  var app = angular.module('myapp');
  var chatController = function($scope, server, chat, chatListBuilder,repository) {
    $('#container').addClass('container-fuild').removeClass('container');
    $scope.chatList = [];
    $scope.messages = [];
    $scope.username = repository.getUsername();
    console.log($scope.username);
    if(!$scope.username)
      $scope.username = prompt("please enter your username")
    chat.setUsername($scope.username);
    chat.setChatBox($scope.messages);
    var onMessageRecieved = function(message) {
      $scope.messages.push(message);
      $scope.$apply();
    }
    //if error comes just uncomment the next line;
    //chat.setMessageFunction(onMessageRecieved);

    //----------------------------------test---------------------------------
    var addMessage = function(payload) {

      if (payload.sender === $scope.username) {
        console.log('sender is ourself')
        let obj = ifChatExists(payload.receiver);
        if (obj) {
          //chat of the user already exists just add the payload message to the chat
          console.log('chat found! pushing');

          obj.chatList.push(payload);

        } else {
          console.log('chat doesnt exits creating and pushing')
          //chat doesnt exists create a new object and push first
          let object = chatListBuilder.builder();
          object.chatTitle = payload.receiver;
          object.chatList.push(payload);
          $scope.chatList.push(object);


        }
      } else {
        //chat came other person
        console.log('message came from other person: ' + payload.sender);

        let obj = ifChatExists(payload.sender);
        console.log(obj);
        if (obj) {
          console.log('chat found! pushing')
          obj.chatList.push(payload);

        } else {
          console.log('creating chat object and pushing')
          let object = chatListBuilder.builder();
          object.chatTitle = payload.sender;
          object.chatList.push(payload);
          $scope.chatList.push(object)
        }


      }
      console.error($scope.chatList);
      $scope.$apply();
    }
    var ifChatExists = function(username) {
      for (let i = 0; i < $scope.chatList.length; i++) {
        let obj = $scope.chatList[i];
        if (obj.chatTitle === username) {
          return obj;
        }
      }
      return false;
    }
    $scope.setCurrentChat = function(name) {
    
      let obj = ifChatExists(name);
      if (obj) {
        $scope.messages = obj.chatList;
        $scope.receiver = name;
        chat.setReceiver($scope.receiver);
        //$scope.$apply();
      }
    }
    chat.setMessageFunction(addMessage);
    //-----------------------------------------------test-end-------------------


    // function to send message
    $scope.send = function(event) {
      if (event.key === 'Enter') {
        chat.sendMessage($scope.chatInput);
        $scope.chatInput = '';
      }
    }


      // function to set new receiver
    $scope.setReceiver = function(receiver) {

      console.log("setting username as: " + receiver)
      $scope.receiver = receiver;
      chat.setReceiver($scope.receiver);
      let obj = ifChatExists($scope.receiver);
      if(!obj){
        let object = chatListBuilder.builder();
        object.chatTitle = $scope.receiver;
        $scope.chatList.push(object);

      }
      $scope.setCurrentChat($scope.receiver);
    }
    $scope.getClass = function(name){
      if(name===$scope.username){
        return "sender";
      }else{
        return "receiver";
      }
    }
    $scope.getSelectedClass = function(name){
      if($scope.receiver===name){
        return "selected";
      }
      else{
        return "unselected";
      }
    }

  }
  app.controller('chatController', chatController);
}())
