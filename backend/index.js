const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const User = require("./models/User.js")

const app = express();

app.use(cors())
app.use(express.json())

const port = 3000;

// Mongoose connection
const MONGODB_URI = process.env.MONGODB_URI
const connectToMongoose = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("Mongoose connected succesfully")
  } catch(error) {
    console.error("Mongoose connection error: ", error)
    process.exit(1)
  }
}

const logRequestInfo = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`)
  next()
}

app.use(logRequestInfo)

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body
  const user = User.find({ email })
  console.log(user)
})

app.post("/api/sign-up", async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = await User.create({username, email, password})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message})
  }
})

app.listen(port, () => {
  connectToMongoose()
  console.log(`Listening on port ${port}`);
});


