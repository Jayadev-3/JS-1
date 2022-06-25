var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  /*const values = ["BMW", "AUDI", "GMC", "VOLVO"];*/

  /*res.render("index",{values});*/

  /*const person = {
    name: "JPU",
    comments: { comment: "This is a sample comment", date: "25-06-2020" },
  };*/

  /*res.render("index", { person });*/

  const person = {
    name: "JPU",
    admin: true,
  };

  res.render("index", { person });
});

module.exports = router;
