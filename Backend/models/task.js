const { DataTypes } = require('sequelize');
const sequelize = require("../config/db");
const crypto = require('crypto');
const Task = sequelize.define('Task', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
      allowNull: false,
      defaultValue: () => crypto.randomBytes(6).toString("hex"),
  },
  taskTitle: {
    type: DataTypes.STRING,
  },
  description:{
    type: DataTypes.TEXT,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
    timestamps: true,
});

sequelize
  .sync()
  .then(() => {
    console.log("tasks table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Task;
