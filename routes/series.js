const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/series')

router.get('/', seriesController.home)
router.get('/adicionar', seriesController.create)

module.exports = router