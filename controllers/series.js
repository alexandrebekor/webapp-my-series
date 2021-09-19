const Serie = require('../models/serie')

const home = (req, res) => {
    Serie.find({}, (err, docs) => {
        res.render('series/home', {
            series: docs
        })   
    })
}

const create = (req, res) => {
    // const serie = new Serie({
    //     name: 'Dark',
    //     status: 'watching'
    // })
    // serie.save(() => console.log('Saved'))
    //res.render('series/create')
}

module.exports = {
    home,
    create
}