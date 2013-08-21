/* Filters */

angular.module("scoreboardApp.filters", []).
  filter("byDate", ["games", function(games) {
    return function(text) {
      // return games for the passed date
      return [];
    }
  }]);
