const express = require("express")
const { userLoginController, userRegistrationController } = require("../controllers/user.controllers")

const userRouter = express.router()

router.get("/login", userLoginController)
router.get("/sign-up", userRegistrationController)

module.exports = userRouter