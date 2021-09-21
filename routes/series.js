const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/series')
const seriesModel = require('../models/serie')
const { jwt, jwtSecret } = require('../controllers/users')

router.use( async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token
    if(token) {
        try {
            const payload = jwt.verify(token, jwtSecret)
            console.log(payload)
            if(payload.roles.indexOf('admin') >= 0) {
                next()
            } else {
                res.send({ success: false })
            }
        } catch(e) {
            res.send({ success: false })
        }
    } else {
        res.send({ success: false })
    }
})

// Pages
router.get('/', seriesController.index.bind(null, { seriesModel }))
router.get('/info/:id/adicionar', seriesController.about.bind(null, { seriesModel }))

// Create
router.get('/adicionar', seriesController.create)
router.post('/adicionar', seriesController.store.bind(null, { seriesModel }))

// Create Comment
router.post('/info/:id/adicionar', seriesController.addComment.bind(null, { seriesModel }))

// Edit
router.get('/editar/:id', seriesController.edit.bind(null, { seriesModel }))
router.post('/editar/:id', seriesController.update.bind(null, { seriesModel }))

// Destroy
router.get('/excluir/:id', seriesController.destroy.bind(null, { seriesModel }))

module.exports = router