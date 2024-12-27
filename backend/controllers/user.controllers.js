const mongoose = require("mongoose")

/* Login controller */
const userLoginController = (req, res) => {
    const { email, password } = req.body

    try {
        const user = mongoose.findOnde({ email })
    } catch(error) {
        console.error(error.message)
    }
}

/* Sign up controller */
const userRegisterController = (req, res) => {
    /* receive data from the request */

    /* check if email and username are already in use */

    /* hash your password */

    /* create the user */
}

module.exports = {
    userLoginController,
    userRegisterController
}