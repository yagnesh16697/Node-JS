require("./db/connect");
const express = require("express");
const app = express();
const morgan = require("morgan");
const tasks = require("./routes/tasks");

app.use(express.json());
app.use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.send("Task Manager API");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} 🚀`);
});
