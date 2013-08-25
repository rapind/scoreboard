
// Declare the app
var scoreboardApp = angular.module("scoreboardApp", []);

// Setup the routes
scoreboardApp.config(function ($routeProvider) {
  $routeProvider
    .when("/nhl", { templateUrl: "scoreboard/nhl.html", controller: "NHLCtrl" })
    .when("/mlb", { templateUrl: "scoreboard/mlb.html", controller: "MLBCtrl" })
    .otherwise({ redirectTo: "/nhl" });
});