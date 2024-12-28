const express = require("express")
const { userLoginController, userRegistrationController } = require("../controllers/user.controllers")

const userRouter = express.Router()

userRouter.post("/login", userLoginController)
userRouter.post("/sign-up", userRegistrationController)

module.exports = userRouter