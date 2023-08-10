const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Test }) {
      this.belongsTo(Test, { foreignKey: 'test_id' });
      // define association here
    }
  }
  Question.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      test_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};