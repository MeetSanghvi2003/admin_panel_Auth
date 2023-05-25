const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/shoppo";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
