/* Directives */

scoreboardApp.directive("gameState", function() {
  return function(scope, element, attrs) {
    // If the game is over, we no longer show the start time.
    if (scope.game.state == "FINAL") {
      element.text(scope.game.state);
    } else {
      element.text(scope.game.startsAt);
    }
  }
});
