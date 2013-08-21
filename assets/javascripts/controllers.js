/* Controllers */

scoreboardApp.controller("NHLCtrl", function($scope, $filter, NHLData) {
  NHLData.get(function(data) {
    // $scope.games = $filter('date')(data.games);
    $scope.games = data.games;
  });
});

scoreboardApp.controller("MLBCtrl", function($scope, $filter, MLBData) {
  MLBData.get(function(data) {
    $scope.games = data.games;
  });
});
