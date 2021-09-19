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
    res.render('series/create', { status })
}

const store = async ({ seriesModel }, req, res) => {
    const serie = new seriesModel(req.body)
    await serie.save()
    res.redirect('/series')
}

const show = ({ seriesModel }, req, res) => {

}

const edit = async ({ seriesModel }, req, res) => {
    const serie = await seriesModel.findOne({ _id: req.params.id })
    res.render('series/edit', { serie, status })
}

const update = async ({ seriesModel }, req, res) => {
    const serie = await seriesModel.findOne({ _id: req.params.id })
    serie.name = req.body.name
    serie.status = req.body.status
    await serie.save()
    res.redirect('/series')
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