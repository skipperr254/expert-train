/* Imports */
const mongoose = require("mongoose")
const dotenv = require("dotenv")

/* Dotenv config */
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

/* Connect to the database */
const dbConnect = async () => {
    try {
        mongoose.connect(MONGODB_URI)
        console.log("DB connected successfully")
    } catch (error) {
        console.error(`Error ->${error.message}`)
        process.exit(1)
    }
}

module.exports = dbConnect