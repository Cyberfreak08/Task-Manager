require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const taskRouter = require("./routes/taskRoutes");
const app = express();
const { PORT } = process.env;
const corsOptions ={
  origin: `https://localhost:${PORT}`
}
//middlewares
app.use(cors(corsOptions));
app.use(express.json());
//routes...\
app.use(taskRouter);

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();