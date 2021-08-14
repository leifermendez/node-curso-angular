const { verifySign } = require('../helpers/handleJwt')
const userModel = require('../models/users')

const checkToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() //TODO: ['Bearer','TOKEN']
        const verifyToken = verifySign(token);
        if (!verifyToken) {
            res.status(409)
            res.send({ error: 'Token invalid' })
        } else {
            const userDetail = await userModel.findById(verifyToken._id)
            req.user = userDetail;
            next()
        }
    } catch (e) {
        console.log('___Error auth___')
        res.status(409)
        res.send({ error: 'Algo sucedio en el middleware auth' })
    }
}


module.exports = checkToken