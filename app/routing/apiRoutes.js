var waitJson = require("../data/waitlist.js");
var tableJson = require("../data/tables.js");

module.exports = function(app) {

  app.get('/api/reserve', function(req, res) {
    res.json(newRes);
  });

  app.get("/allTables", function(req, res) {
  res.json(tableJson);
});

app.get("/allWait", function(req, res) {
res.json(waitJson);
});

  app.post("/api/waitlist", function(req, res) {
    res.json();
  });
}
