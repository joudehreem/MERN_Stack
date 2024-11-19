require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoose.config');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Middleware to parse JSON


const AllMyUserRoutes = require("./routes/user.routes");

AllMyUserRoutes(app);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello')
})