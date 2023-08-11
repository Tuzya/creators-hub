const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Test, User, Company }) {
      this.hasOne(Test, { foreignKey: 'courses_id' });
      this.belongsTo(Company, { foreignKey: 'company_id' });
      // this.belongsToMany(User, {
      //   through: 'CoursesUsers',
      //   foreignKey: 'courses_id',
      // });
      // define association here
    }
  }
  Course.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      downloadLink: DataTypes.TEXT,
      company_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Course',
    }
  );
  return Course;
};
