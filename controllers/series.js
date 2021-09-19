const Serie = require("../models/serie")

const home = ({ seriesModel }, req, res) => {
    seriesModel.find({}, (err, docs) => {
        res.render('series/home', {
            series: docs
        })
    })
}

const create = (req, res) => {
    res.render('series/create')
}

const store = ({ seriesModel }, req, res) => {
    const serie = new Serie(req.body)
    serie.save(() => console.log('Record added'))
    res.redirect('/series')
}

const show = ({ seriesModel }, req, res) => {

}

const edit = ({ seriesModel }, req, res) => {

}

const update = ({ seriesModel }, req, res) => {

}

const destroy = ({ seriesModel }, req, res) => {
    seriesModel.deleteOne({ _id: req.params.id }, (err) => {
        res.redirect('/series')
    })
}

module.exports = {
    home,
    create,
    store,
    destroy
}