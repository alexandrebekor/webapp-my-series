const express = require('express')
const mongoose = require('mongoose')

// Server
const app = express()
const port = process.env.PORT || 3000

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
    res.send('Hello World!')
})