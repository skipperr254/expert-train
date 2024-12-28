const bcrypt = require("bcrypt")
const User = require("../models/User.js")

/* Login controller */
const userLoginController = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({message: "Email does not exist"})
        }

        const correctPassword = await bcrypt.compare(password, user.password)

        if (!correctPassword) {
            return res.status(401).json({ message: "Invalid username or password"})
        }

        return res.status(200).json({ message: "Login successful" })
    } catch(error) {
        console.error(error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

/* Sign up controller */
const userRegistrationController = (req, res) => {
    /* receive data from the request */
    const { usename, email, password } = req.body

    /* check if email and username are already in use */

    /* hash your password */

    /* create the user */
}

module.exports = {
    userLoginController,
    userRegistrationController
}