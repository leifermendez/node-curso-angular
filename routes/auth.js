const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')
const checkAuth = require('../middleware/auth')
//TODO: auth/**** */

router.post(`/login`, authCtrl.loginCtrl)

router.post(`/register`, authCtrl.registerCtrl)

router.get('/verify', checkAuth, authCtrl.getCtrl)

module.exports = router