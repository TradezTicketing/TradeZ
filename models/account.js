module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    id: {
      // Properties
      type: DataTypes.INTEGER,
      // Flags
      primaryKey: true,
      allowNull: false,
      // Validations
      validate: {

      }
    },
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    prefereddistance: DataTypes.INTEGER,
    password: DataTypes.STRING
  });
  return Account;
};
