const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company }) {
      this.belongsTo(Company, { foreignKey: 'company_id' });
    }
  }
  Post.init(
    {
      title: DataTypes.TEXT,
      body: DataTypes.TEXT,
      img: DataTypes.TEXT,
      company_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
