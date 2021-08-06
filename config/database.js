const mongoose = require("mongoose");

const mongoUrl = process.env.MONGODB_UI || "mongodb://localhost:27017/meal-planner";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});
mongoose.connection.on("error", () => {
  console.log("MongoDB has an error");
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected");
});

