module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    id: {
      // Properties
      type: DataTypes.INTEGER,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },

    username: {
      // Properties
      type: DataTypes.STRING,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },

    firstname: {
      // Properties
      type: DataTypes.STRING,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },

    lastname: {
      // Properties
      type: DataTypes.STRING,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },

    zipcode: {
      // Properties
      type: DataTypes.INTEGER,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },

    prefereddistance: {
      // Properties
      type: DataTypes.INTEGER,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },

    password: {
      // Properties
      type: DataTypes.STRING,

      // Flags
      allowNull: false,
      // Validations
      validate: {

      }
    },
  });

  Account.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Account.hasMany(models.Transaction, {
      onDelete: "cascade"
    });
  };

  return Account;
};
