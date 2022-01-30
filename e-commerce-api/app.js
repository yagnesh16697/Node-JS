require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./db/connect");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/v1", (req, res) => {
  return res.status(200).send("Hello");
});

const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on..... ${port}🚀`));
  } catch (error) {
    console.log(error);
  }
};

start();
