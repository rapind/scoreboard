/* Controllers */

scoreboardApp.controller("NHLCtrl", function($scope, $filter, Scores) {
  // Data.get(function(data) {
  //   console.log("show nhl data");
  //   // $scope.games = $filter('date')(data.games);
  //   $scope.games = data.nhl.games;
  // });
  Scores.getAll(function(data) {
    $scope.games = data.nhl.games;
  });

});

scoreboardApp.controller("MLBCtrl", function($scope, $filter, Scores) {
  Scores.getAll(function(data) { 
    $scope.games = data.mlb.games;
  });
});
