var db = require("../models");

module.exports = function(app) {
  // Get all experiences the account holder has to offer
  app.get("/api/transaction/:id", function(req, res) {
    db.Transactions.findAll({
      where: {
        AccountId: req.param.id
      }
    }).then(function(db) {
      res.json(db);
    });
  });

  //Get all existing entries matching experience parameter
  app.get("/api/experiences", function(req, res) {
      db.Transactions.findAll({
    where:{
      id: req.param.experience
    }
      }).then(function(db) {
        res.json(db);
      });
    });

  // Delete an experience by id
  app.delete("/api/deletetransaction/:id", function(req, res) {
    db.Transactions.destroy({ where: { id: req.params.id } }).then(function(
      dbTransaction
    ) {
      res.json(dbTransaction);
    });
  });

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