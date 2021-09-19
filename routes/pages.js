const express = require('express')
const router = express.Router()
const controller = require('../controllers/pages')

router.get('/', controller.home)
router.get('/sobre', controller.about)

module.exports = router