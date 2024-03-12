const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

const DB_URI = process.env.DB_URI;

const connect = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
};

module.exports = connect;
