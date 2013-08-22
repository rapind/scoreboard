/* Services */

scoreboardApp.factory("Scores", function($http) {
  // return $http.get("/scores.json");
  return {
    getAll: function(onSuccess) {
      $http.get("/scores.json", { cache: true }).success(onSuccess);
    }
  };

});
