module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    id: {
      // Properties
      type: DataTypes.INTEGER,
      // Flags
      primaryKey: true,
      allowNull: false,
      },
    
    offer: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER   
  });

  Transaction.associate = function(models) {
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
