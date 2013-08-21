
// Declare the app
var scoreboardApp = angular.module("scoreboardApp", [ "scoreboardApp.filters", 
                                                      "scoreboardApp.services"]);

// Setup the routes
scoreboardApp.config(function ($routeProvider) {
  $routeProvider
    .when("/nhl", { templateUrl: "partials/nhl.html", controller: "NHLCtrl" })
    .when("/mlb", { templateUrl: "partials/mlb.html", controller: "MLBCtrl" })
    .otherwise({ redirectTo: "/nhl" });
});