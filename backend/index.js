const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userRouter = require("./routes/user.routes.js")


const User = require("./models/User.js")

const app = express();

/* Connect to the database */
const dbConnect = require("./db/dbConnect.js")
dbConnect()

/* App middleware */
app.use(cors())
app.use(express.json())

/* Routing the authentication requests */
app.use("/api/auth", userRouter)

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.find({ email })
    res.json({email, password})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

app.post("/api/sign-up", async (req, res) => {
  const { username, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 12)

  try {
    const user = await User.create({username, email, password: hashedPassword})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error })
  }
})

/* Listen for requests */
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


