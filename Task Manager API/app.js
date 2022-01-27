const express = require("express");
const app = express();
const morgan = require("morgan");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.send("Task Manager API");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log(`Server is listening on ${PORT} 🚀`));
  } catch (error) {
    console.log(error);
  }
};
start();
