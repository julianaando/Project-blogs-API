// models/User.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
);
  // (async () => {
  //   await sequelize.sync({ force: true });
  //   // Code here
  // })();


  return User;
};

module.exports = UserModel;