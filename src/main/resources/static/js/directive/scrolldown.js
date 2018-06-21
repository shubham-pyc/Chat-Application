(function() {
  var app = angular.module('myapp');
  app.directive("scrollBottom", function() {
    return {
      link: function(scope, element, attr) {
        console.log('directive is called');
        var $id = $("#" + attr.scrollBottom);
        $(element).on("click", function() {
          $id.scrollTop($id[0].scrollHeight);
        });
      }
    }
  });
}())
