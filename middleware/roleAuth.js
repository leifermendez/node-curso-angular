const { verifySign } = require('../helpers/handleJwt')
const userModel = require('../models/users')

const getDetail = async (id) => {
    return await userModel.findById(id)
}

//TODO: ['user','admin']
const checkRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() //TODO: ['Bearer','TOKEN']
        const verifyToken = verifySign(token);
        if (!verifyToken) {
            res.status(409)
            res.send({ error: 'Token invalid' })
        } else {
            const { role } = await getDetail(verifyToken._id)//TODO: Busca el usario y el rol
            if ([].concat(roles).includes(role)) {
                next()
            } else {
                res.status(409)
                res.send({ error: 'No tienes permisos' })
            }
        }
    } catch (e) {
        console.log('___Error auth___')
        res.status(409)
        res.send({ error: 'Algo sucedio en el middleware authRol' })
    }
}


module.exports = checkRole