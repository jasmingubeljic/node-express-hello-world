var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
  res.send("this is a test");
  next();
});

app.get("/testing", (req, res, next) => {
  res.status(200).send("Hello this is some testing");
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
