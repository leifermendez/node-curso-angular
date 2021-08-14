const express = require('express')
const router = express.Router()
const fs = require('fs') //TODO: <--- 

const pathRouter = `${__dirname}` //C:

const removeExtension = (fileName) => {
    return fileName.split('.').shift() //TODO: ['index','js'] --> 'index'
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExtension = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExtension)
    if (!skip) {
        //TODO: http://localhost/api/1.0/user
        //TODO: localhost/user <----    Controladores --> user.js
        router.use(`/${fileWithOutExtension}`, require(`./${fileWithOutExtension}`))
        console.log('Si carga la ruta!:::: /', fileWithOutExtension)
    }
})

//TODO: 404 not found
router.use('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router