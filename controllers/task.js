const taskModel = require('../models/task')
const { ctrlError } = require('../helpers/handleError')

const createTask = async (req, res) => {
    try {
        const { body } = req
        const taskDetail = await taskModel.create(
            {
                title: body.title,
                description: body.description,
                tag: body.tag,
                members: body.members
            }
        )

        res.send({
            data: taskDetail
        })

    } catch (e) {
        ctrlError(e, res)
    }
}

const listTask = async (req, res) => {
    try {

        const listTask = await taskModel.find({}, null, { sort: { createdAt: -1 } })

        res.send({
            data: listTask
        })

    } catch (e) {
        ctrlError(e, res)
    }
}

module.exports = { createTask, listTask }