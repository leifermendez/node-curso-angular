const express = require('express')
const router = express.Router()
const taskCtrl = require('../controllers/task')
const checkAuth = require('../middleware/auth')
const checkAuthRole = require('../middleware/roleAuth')

//TODO: Registrar nueva tarea
router.post(
    '/',
    checkAuth,
    taskCtrl.createTask)


router.get(
    '/',
    checkAuth,
    taskCtrl.listTask
)

module.exports = router