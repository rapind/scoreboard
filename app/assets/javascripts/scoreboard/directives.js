/* Directives */

scoreboardApp.directive("scoreboardGameState", function() {
  return function(scope, element, attrs) {
    // If the game is over, we no longer show the start time.
    if (scope.game.state == "FINAL") {
      element.text(scope.game.state);
    } else {
      element.text(scope.game.startsAt);
    }
  }
});

scoreboardApp.directive("scoreboardGameWinning", function() {
  return function(scope, element, attrs) {
    // If the game is over, we no longer show the start time.
    if (scope.team.winning) {
      element.addClass("scoreboard-game-line-winning");
    }
  }
});