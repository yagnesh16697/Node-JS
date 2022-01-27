const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/taskManagerDb";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("CONNECTED TO THE DB 📀");
  })
  .catch((err) => {
    console.log(err);
  });
