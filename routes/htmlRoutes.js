var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Load Sign Up
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/signup.html"));
  });

   // Load Account Page in handlebars, we need to pass in the email object here!
   app.get("/myaccount", function(req, res) {
    res.render("myaccount", {});
  });

  // Search
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/search.html"));
  }); 
  
  // Load Sign Up/Account Page
  app.get("/message", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/message.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
