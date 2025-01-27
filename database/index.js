const mongoose = require('mongoose')

const connectToDB = async () => {
    try {

        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9yny4.mongodb.net/users-db`)
        console.log(`MongoDB connected successfully`)

    } catch (error) {
        console.log(`Connection to MongoDB failed -> ${error.message}`)
        process.exit(1)
    }
}


module.exports = connectToDB