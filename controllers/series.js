const status = [
    {id: 'to-watch', name: 'Assistir'},
    {id: 'watching', name: 'Assistindo'},
    {id: 'watched', name: 'Assistido'}
]

const index = async ({ seriesModel }, req, res) => {
    const series = await seriesModel.find({})
    res.render('series/home', { series, status })
}

const create = (req, res) => {
    res.render('series/create', { status, errors: [] })
}

const store = async ({ seriesModel }, req, res) => {
    const serie = new seriesModel(req.body)
    try {
        await serie.save()
        res.redirect('/series')
    } catch (e) {
        res.render('series/create', { status, errors: Object.keys(e.errors) })
    }
}

const show = ({ seriesModel }, req, res) => {

}

const edit = async ({ seriesModel }, req, res) => {
    const serie = await seriesModel.findOne({ _id: req.params.id })
    res.render('series/edit', { serie, status, errors: [] })
}

const update = async ({ seriesModel }, req, res) => {
    const serie = await seriesModel.findOne({ _id: req.params.id })
    serie.name = req.body.name
    serie.status = req.body.status
    try {
        await serie.save()
        res.redirect('/series')
    } catch (e) {
        res.render('series/edit', { serie, status, errors: Object.keys(e.errors) })
    }
}

const destroy = async ({ seriesModel }, req, res) => {
    await seriesModel.deleteOne({ _id: req.params.id })
    res.redirect('/series')
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