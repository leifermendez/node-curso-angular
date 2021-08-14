const bcrypt = require('bcryptjs')

const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain, 10) //TODO: $2334343434
    return hash
}

const compare = async (textPlain, hashPassword) => {
    const check = await bcrypt.compare(textPlain, hashPassword)
    return check
}

module.exports = { encrypt, compare }