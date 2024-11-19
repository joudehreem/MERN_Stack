const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.get("/hello", (req, res) => {
  res.send("hello")
})

mongoose.connect("mongodb+srv://joudehreem:remo1995@cluster0.add8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected successfully")
  })
  .catch((error) => {
    console.log("error", error)
  })




app.get("/hi", (req, res) => {
  res.send("hi reem")
})

app.listen(3000, () => {
  console.log("the port is 3000")
})

