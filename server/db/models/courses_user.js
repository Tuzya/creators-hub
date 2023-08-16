const { Model } = require('sequelize');

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
