const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Chat, Course, Company, Person }) {
      this.hasMany(Chat, { foreignKey: 'user_id' });
      this.hasMany(Person, { foreignKey: 'user_id' });

      this.belongsTo(Company, { foreignKey: 'company_id' });
      this.belongsToMany(Course, {
        through: 'CoursesUsers',
        foreignKey: 'user_id',
      });
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
