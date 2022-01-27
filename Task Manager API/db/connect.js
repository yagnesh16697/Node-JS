const mongoose = require("mongoose");

const connectionString =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskManagerDb";

mongoose.connect(connectionString).then(() => {
  console.log("CONNECTED TO THE DB 📀");
});

const connectDB = () => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
