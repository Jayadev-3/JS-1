//npm install express
const express = require("express");
const path = require("path");
const app = express();

app.use(function (req, res, next) {
  console.log("Hello");
  next();
});

app.get("/", function (req, res) {
  res.send("HELLO");
});

app.get("/signup", (req, res) =>
  res.sendFile(path.join(__dirname, "signup.html"))
);

app.post("/signup", function (req, res) {
  res.send("Account Created");
});

app.get("/about", (req, res) => res.send("about"));

app.listen(3000, function () {
  console.log("Server Started");
  //console.log(__dirname);
  console.log(__filename);
});
