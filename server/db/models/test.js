const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Course, Question }) {
      this.belongsTo(Course, { foreignKey: 'courses_id' });
      this.hasMany(Question, { foreignKey: 'test_id' });
      // define association here
    }
  }
  Test.init(
    {
      theme: DataTypes.TEXT,
      courses_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Test',
    }
  );
  return Test;
};