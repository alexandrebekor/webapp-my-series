const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const pagesRouter = require('./routes/pages')

// Server
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))

// Template
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Assets
app.use(express.static('public'))

// Database
const mongo = process.env.DATABASE || 'mongodb://localhost/webapp-myseries'
mongoose.Promise = global.Promise

mongoose
    .connect(mongo)
    .then(() => {
        app.listen(port, () => console.log('connected'))
    })
    .catch(e => {
        console.log(e)
    })

app.use('/', pagesRouter)