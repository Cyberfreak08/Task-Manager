const Task = require("../models/task");
const { Op, where } = require("sequelize");

module.exports.createTask = async (req, res) => {
  try {
    const { title, description } = req?.body;
    const newTask = await Task.create({
      taskTitle: title,
      description,
    });
    return res.status(200).json({
      success: true,
      message: "Request successful",
      data: newTask,
    });
  } catch (error) {
    console.error(error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAndCountAll({ where: { completed: false } });
    return res.status(200).json({
      success: true,
      message: "Request successful",
      data: tasks,
    });
  } catch (error) {
    console.error(error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
module.exports.updateTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const taskId = req.params.id;

    const [rowsUpdated] = await Task.update(
      { title, description },
      { where: { id: taskId } }
    );

    if (rowsUpdated === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Fetch the updated task separately
    const updatedTask = await Task.findByPk(taskId);

    return res.status(200).json({
      success: true,
      message: "Request successful",
      data: updatedTask,
    });
  } catch (error) {
    console.error(error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const [deletedTask] = await Task.update(
    { completed: true },
    { where: { id: taskId } }
  );
  if (deletedTask === 0) {
    return res.status(404).json({ error: "Task not found" });
  }
  return res.status(200).json({
    success: true,
    message: "Request successful",
    data: deletedTask,
  });
};
