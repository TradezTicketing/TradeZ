var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Load Sign Up
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load Account Page in handlebars, we need to pass in the email object here!
  app.get("/myaccount", function(req, res) {
    res.render("myaccount", {});
  });

  // Search - there is not column with 'experience,' though (i.e., tickets)
  app.get("/search", function(req, res) {
    db.Transaction.findAll({
      attributes: ["experience"],
      group: ["experience"]
    }).then(function(experiences) {
      // db.Transaction.findAll({
      //   where: { experience: req.query.experience }
      // }).then(function(matches) {
        res.render("search", { experiences: experiences});
    });
  });

  // Compose message
  app.get("/messages", function(req, res) {
    res.render("messages");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
