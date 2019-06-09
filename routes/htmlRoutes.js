var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "../html/index.html"));
  });

  // Load Sign Up/Account Page
  app.get("/accounts", function(req, res) {
    res.sendFile(path.join(_dirname, "../html/signup.html"));
  });

  // Load Sign Up/Account Page
  app.get("/search", function(req, res) {
    res.sendFile(path.join(_dirname, "../html/search.html"));
  }); 
  
  // Load Sign Up/Account Page
  app.get("/messages", function(req, res) {
    res.sendFile(path.join(_dirname, "../html/messages.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
