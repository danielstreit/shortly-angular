angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.loading = false;
  $scope.addLink = function() {
    $scope.loading = true;
    Links.postLink($scope.link).then(function() {
      $scope.loading = false;
    }).catch(function(error) {
      console.log('Error', error);
    });
  };
});
