module.exports = function (sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    id: {
      // Properties
      type: DataTypes.INTEGER,
      // Flags
      primaryKey: true,
      allowNull: false,
      },
    offer: {
      // Properties
      // Boolean for labeling as a looking for or an offer aka something they have.
      // True means it is an offer, false means it is a "looking for" aka something they want.
      type: DataTypes.BOOLEAN,
      // Flags
      allowNull: false,
    },
    experience: {
      // Properties
      type: DataTypes.STRING,
      // Flags
      allowNull: false,
    }}, {
      classMethods: {
        associate: function(models) {
          Transaction.belongsTo(models.Account, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });

  return Transaction;
};