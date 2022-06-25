const express = require("express");
const path = require("path");

const app = express();
const bodyparser = require("body-parser");

const urlencodedparser = bodyparser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "signup.html")));

app.post("/process_post", urlencodedparser, (req, res) => {
  //prepare output in JSON format
  response = {
    mail: req.body.mail,
    pwd: req.body.pwd,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(8000, function () {
  console.log("Server Started");
});
