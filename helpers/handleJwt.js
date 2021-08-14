const jwt = require('jsonwebtoken')

const generateSign = (user) => {
    try {
        const token = jwt.sign(
            {
                _id: user._id,
                name: user.name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "4h"
            }
        )
        return token
    } catch (e) {
        console.log('__Algo fallo___', e)
        return null
    }
}

const verifySign = (token) => {
    try {
        const tokenVerify = jwt.verify(token, process.env.JWT_SECRET)
        return tokenVerify
    } catch (e) {
        console.log('__Algo fallo___', e)
        return null
    }
}

module.exports = { generateSign, verifySign }