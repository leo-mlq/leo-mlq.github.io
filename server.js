"use strict";

var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var dotenv =require('dotenv');
dotenv.config();

// make all the files in 'public' available thru virtual path
//src = '/public/scripts.js'
app.use("/public", express.static(process.cwd() + "/public"));

//src = '/scripts.js'
//app.use(express.static(process.cwd() + "/public"));

//app.use("/assets", express.static(process.cwd() + "/images"));

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//root level middleware

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
