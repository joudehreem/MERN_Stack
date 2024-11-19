const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("Established a connection to the database"))

    .catch((err) => console.log("Something went wrong when connecting to the database", err));
}

module.exports = connectDB;
