const home = (req, res) => res.render('series/home')
const create = (req, res) => res.render('series/create')

module.exports = {
    home,
    create
}