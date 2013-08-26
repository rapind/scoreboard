/* Services */

scoreboardApp.factory("Scores", function($http) {
  return {
    getAll: function(sport, onSuccess) {
      $http.get("/scoreboard/" + sport + ".json", { cache: true }).success(onSuccess);
    }
  };
});
