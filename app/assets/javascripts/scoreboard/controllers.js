/* Controllers */

scoreboardApp.controller("NHLCtrl", function($scope, $filter, Scores) {
  Scores.getAll("nhl", function(data) {
    $scope.games = data.games;
  });
});

scoreboardApp.controller("MLBCtrl", function($scope, $filter, Scores) {
  Scores.getAll("mlb", function(data) { 
    $scope.games = data.games;
  });
});
