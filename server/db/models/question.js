const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Test, Answer }) {
      this.belongsTo(Test, { foreignKey: 'test_id' });
      this.hasMany(Answer, { foreignKey: 'question_id' });
      // define association here
    }
  }
  Question.init(
    {
      question: DataTypes.TEXT,
      test_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
