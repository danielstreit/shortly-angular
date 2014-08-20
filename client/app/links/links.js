angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks.then(function(res){
      console.log('response:', res.data);
      $scope.data.links = res.data;
    });
  };
  $scope.getLinks();
});
