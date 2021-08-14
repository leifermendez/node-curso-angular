const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        },
        password: {
            type: String
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('users', UserSchema)