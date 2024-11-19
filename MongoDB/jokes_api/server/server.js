const express = require("express");
const app = express()

require("dotenv").config()

const port = process.env.PORT;
require("./config/mongoose.config");


app.use(express.json(), express.urlencoded({ extended: true }));

const jokesApi = require('./routes/joke.routes')
jokesApi(app)
app.listen(port, () => console.log(`Port  on ${port}`))
