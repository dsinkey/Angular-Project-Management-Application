
angular.module('myApp.controllers', []).controller('ViewIssueCtrl', function($scope, $route, $element, $timeout) {
  $scope.$watch(function() { return $route.current && $route.current.params.issue; }, function(newVal, oldVal) {
    $scope.showTab = !!newVal;
    $scope.issueId = newVal;

    $timeout(function() {
      if ($scope.showTab) {
        $element.find('a').click();
      } else {
        $element.siblings().first().find('a').click();
      }
    }, 0, false);
  });
});
