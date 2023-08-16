const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Course, Post }) {
      this.hasMany(User, { foreignKey: 'company_id' });
      this.hasMany(Course, { foreignKey: 'company_id' });
      this.hasMany(Post, { foreignKey: 'company_id' });

      // define association here
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Company',
    }
  );
  return Company;
};
