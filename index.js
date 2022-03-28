const express = require('express')
const mongoose = require('mongoose')

// Import Routing
const pagesRouter = require('./routes/pages')
const seriesRouter = require('./routes/series')
const usersRouter = require('./routes/users')

// Import Models
const User = require('./models/user')

// Server
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cors
const cors = require('cors')
app.use(cors())
// app.use(cores({ origin: 'https://www.agenciabekor.com' }))

// Template
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Assets
app.use(express.static('public'))

// Database
const mongo = process.env.DATABASE || 'mongodb://localhost/webapp-myseries'
mongoose.Promise = global.Promise

// Routes
app.use('/', pagesRouter)
app.use('/series', seriesRouter)
app.use('/users', usersRouter)

const createInitialUsers = async () => {
    const totalUsers = await User.count({})
    if(totalUsers === 0) {
        const admin = new User({
            username: 'bekor',
            password: '12345',
            roles: ['restrito', 'admin']
        })
        await admin.save()

        const user = new User({
            username: 'bekor2',
            password: '12345',
            roles: ['restrito']
        })
        await user.save()
    }
}

// Start database and server
mongoose
    .connect(mongo)
    .then(() => {
        createInitialUsers()
        app.listen(port, () => console.log('connected'))
    })
    .catch(e => { console.log(e) })