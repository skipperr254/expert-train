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
const userRegistrationController = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const existingUserbyEmail = await User.findOne({ email })

        if (existingUserbyEmail) {
            return res.status(409).json({ message: "This email already has an account"})
        }

        const existingUserbyUsername = await User.findOne({ username })

        if (existingUserbyUsername) {
            return res.status(409).json({ message: "This username is already taken"})
        }  

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await User.create({ username, email, password: hashedPassword})

        return res.status(201).json({ message: "Account created successfully"})

    } catch(error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error"})
    }
}

module.exports = {
    userLoginController,
    userRegistrationController
}