/* Services */

scoreboardApp.factory("Data", function($resource) {
  console.log("get scoreboard json data");
  return $resource("/scoreboard.json", {}, { 
    get: { cache: true, method: 'GET' }
  });
});
