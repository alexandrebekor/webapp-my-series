const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/series')
const seriesModel = require('../models/serie')

// Show
router.get('/', seriesController.index.bind(null, { seriesModel }))

// Create
router.get('/adicionar', seriesController.create)
router.post('/adicionar', seriesController.store.bind(null, { seriesModel }))

// Edit
router.get('/editar/:id', seriesController.edit.bind(null, { seriesModel }))
router.post('/editar/:id', seriesController.update.bind(null, { seriesModel }))

// Destroy
router.get('/excluir/:id', seriesController.destroy.bind(null, { seriesModel }))

module.exports = router