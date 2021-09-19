const status = [
    {id: 'to-watch', name: 'Assistir'},
    {id: 'watching', name: 'Assistindo'},
    {id: 'watched', name: 'Assistido'}
]

const index = ({ seriesModel }, req, res) => {
    seriesModel.find({}, (err, series) => {
        res.render('series/home', {
            series, status
        })
    })
}

const create = (req, res) => {
    res.render('series/create', {
        status
    })
}

const store = ({ seriesModel }, req, res) => {
    const serie = new seriesModel(req.body)
    serie.save(() => console.log('Record added'))
    res.redirect('/series')
}

const show = ({ seriesModel }, req, res) => {

}

const edit = ({ seriesModel }, req, res) => {
    seriesModel.findOne({ _id: req.params.id }, (err, serie) => {
        res.render('series/edit', {
            serie, status
        })
    })
}

const update = ({ seriesModel }, req, res) => {
    seriesModel.findOne({ _id: req.params.id }, (err, serie) => {
        serie.name = req.body.name
        serie.status = req.body.status
        serie.save()
        res.redirect('/series')
    })
}

const destroy = ({ seriesModel }, req, res) => {
    seriesModel.deleteOne({ _id: req.params.id }, (err) => {
        res.redirect('/series')
    })
}

module.exports = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
}