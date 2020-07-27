var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(cors());

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get('/',function(req,res){
    res.render('index')
})

app.listen(8000, function () {
  console.log("app listen on port 8000");
});
