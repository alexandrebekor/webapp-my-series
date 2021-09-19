const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/series')
const seriesModel = require('../models/serie')

router.get('/', seriesController.home.bind(null, { seriesModel }))
router.get('/adicionar', seriesController.create)
router.post('/adicionar', seriesController.store.bind(null, { seriesModel }))
router.get('/excluir/:id', seriesController.destroy.bind(null, { seriesModel }))

module.exports = router