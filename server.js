const express = require("express");
const app = express();
const port = 3000;

function boot() {
  console.log(`The website has been launched on port ${port}.`);
};

app.use(express.static("public")); // This is for JavaScript files and CSS files.

app.get("/", function(req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/router", function(req, res) => {
  res.send("Invalid Method");
});

app.get("/router/ip", function(req, res) => {
  res.send("Public IP: 192.168.1.1");
});

app.use("*", function(req, res) => {
  res.status(404).send("Not Found");
});

const listener = app.listen(port, function() {
  boot();
});
