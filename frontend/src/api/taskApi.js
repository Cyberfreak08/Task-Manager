import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:6000",
});

export const getAllTasks = async () => {
  try {
    console.log("Instance:", instance);
    const tasks = await instance.get("/getAll");
    console.log("Tasks:", tasks);
    return tasks;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
