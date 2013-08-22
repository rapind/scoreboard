/* Controllers */

scoreboardApp.controller("NHLCtrl", function($scope, $filter, Data) {
  Data.get(function(data) {
    // $scope.games = $filter('date')(data.games);
    $scope.games = data.nhl.games;
  });
});

scoreboardApp.controller("MLBCtrl", function($scope, $filter, Data) {
  Data.get(function(data) {
    $scope.games = data.mlb.games;
  });
});
