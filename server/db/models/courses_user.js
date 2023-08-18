const { Model } = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
  class CoursesUser extends Model {
    static associate() {}
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
