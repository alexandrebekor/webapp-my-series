const express = require('express')
const router = express.Router()
const usersModel = require('../models/user')
const usersController = require('../controllers/users')

router.post('/auth', usersController.auth.bind(null, { usersModel }))

module.exports = router