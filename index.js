const bodyParse = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

app.use(bodyParse.urlencoded({ extended: true }))

// Server
const app = express()
const port = process.env.PORT || 3000

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

app.get('/', (req, res) => {
    res.render('home')
})