
(function() {

  var shortenedLink = function() {
    return {
      restrict: 'E',
      scope: {
        link: '='
      },
      templateUrl: 'app/directives/shortenedLink.html'
    };
  };

  angular.module('shortly')
    .directive('shortenedLink', shortenedLink)


})();

//<shortened-link ng-repeat="link in data.links" link="link">

