const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Person.init(
    {
      city: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      phone: DataTypes.STRING,
      about: DataTypes.STRING,
      companies: DataTypes.STRING,
      sex: DataTypes.STRING,
      photo: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Person',
    }
  );
  return Person;
};
