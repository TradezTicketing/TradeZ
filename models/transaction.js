module.exports = function (sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    id: {
      // Properties
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      // Flags
      primaryKey: true,
      allowNull: false,
      },
    
    offer: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER   
=======

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },
    offer: {
      // Properties
      // Boolean for labeling as a looking for or an offer aka something they have.
      // True means it is an offer, false means it is a "looking for" aka something they want.
      type: DataTypes.BOOLEAN,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },
    experience: {
      // Properties
      type: DataTypes.STRING,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },
>>>>>>> 38cdd5c39afd2bfea8a02303220bce1dfd61d10a
  });

  Transaction.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Transaction.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transaction;
};