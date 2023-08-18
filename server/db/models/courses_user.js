const { Model } = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
  class CoursesUser extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  CoursesUser.init(
    {
      user_id: DataTypes.INTEGER,
      courses_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'CoursesUser',
    }
  );
  return CoursesUser;
};
