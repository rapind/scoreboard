/* Services */

angular.module("scoreboardApp.services", ["ngResource"])
  .factory("NHLData", function($resource) {
    console.log("get NHL scoreboard json data");
    return $resource("scoreboard-data/nhl.json");
  })
  .factory("MLBData", function($resource) {
    console.log("get MLB scoreboard json data");
    return $resource("scoreboard-data/mlb.json");
  });
