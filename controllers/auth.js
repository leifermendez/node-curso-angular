const moment = require('moment')
const userModel = require('../models/users')
const { ctrlError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { generateSign } = require('../helpers/handleJwt')



const loginCtrl = async (req, res) => {
    try {
        const today = moment()
        const { body } = req
        const detailUser = await userModel.findOne({ email: body.email })

        if (!detailUser) {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = await compare(body.password, detailUser.password)

        if (checkPassword) {
            const tokenObject = {
                token: await generateSign(detailUser),
                expire: today.add(4, 'hours').format('DD MM YYYY HH:MM:SS')
            }

            res.send({
                data: detailUser,
                tokenObject
            })
        } else {
            res.status(409)
            res.send({ error: 'Invalid password' })
        }

    } catch (e) {
        ctrlError(e, res)
    }
}

const registerCtrl = async (req, res) => {
    try {

        const { body } = req
        const passwordHash = await encrypt(body.password)
        const detailUser = await userModel.create({
            email: body.email,
            name: body.name,
            password: passwordHash
        })
        res.send({ data: detailUser })

    } catch (e) {
        //TODO
        ctrlError(e, res)
    }
}

const getCtrl = async (req, res) => {
    try {
        const user = req.user;
        res.send({ data: user })
    } catch (e) {
        ctrlError(e, res)
    }
}

module.exports = { loginCtrl, registerCtrl, getCtrl }