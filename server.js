// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./models");
var favicon = require('serve-favicon');
// Sets up the Express App
var app = express();
var PORT;

var portNum = parseInt(process.argv[2]);

if(Number.isInteger(portNum)) {
  PORT = process.env.PORT || portNum;
}else if(Number.isInteger(portNum) === false){
  PORT = process.env.PORT || 3000;
}

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Router
require(path.join(__dirname, "./routing/apiRoutes"))(app);
require(path.join(__dirname, "./routing/htmlRoutes"))(app);

// Favicon
app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

// Listener
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Portfolio App is listening on PORT: " + PORT);
    console.log("App active at http://localhost:" + PORT);
});
});