const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    }, email: {
        type: String,
        required: true,
        trim: true
    }, name: {
        type: String,
        required: true,
        trim: true
    }, mobile: {
        type: String,
        required: true,
        trim: true
    }, createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('users', UserSchema)
