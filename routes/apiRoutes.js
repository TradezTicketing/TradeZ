var db = require("../models");

module.exports = function(app) {

  // Get all experiences in database
  app.get("/api/transaction", function(req, res) {
    db.Transactions.findAll({}).then(function(db) {
      res.json(db);
    });
  });

  //Get all existing entries matching experience selected from drop down on search page
  app.get("/api/experiences", function(req, res) {
      db.Transactions.findAll({
    where:{
      experience: req.param.checkOptions
    }
      }).then(function(db) {
        res.json(db);
      });
    });

  // Delete an experience by id (don't think we are using this but just in case)
  app.delete("/api/deletetransaction/:id", function(req, res) {
    db.Transactions.destroy({ where: { id: req.params.id } }).then(function(
      dbTransaction
    ) {
      res.json(dbTransaction);
    });
  });

  //add a transaction (also dont think we are using this but just in case)
  app.post("/api/addtransaction", function(req, res) {
    db.Transactions.create(req.body).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });
};

//Create Entry into Database from Account page

//Create Entry into Database from Account page
// app.post("/api/addtransaction"),
//   function(req, res) {
//     db.Transaction.create(req.body).then(function(dbTransaction) {
//       res.json(dbTransaction);
//     });
//   };

    // Search
  // app.get("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });