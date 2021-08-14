const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        tag: {
            type: Array,
            default: []
        },
        members: {
            type: Array,
            default: []
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('task', TaskSchema)