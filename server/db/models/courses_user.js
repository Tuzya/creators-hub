const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CoursesUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
