const auth = async ({ usersModel }, req, res) => {
    const user = req.body
    const userAuth = await usersModel.findOne({ username: user.username })
    if(userAuth) {
        if(userAuth.password === user.password) {
            res.send({
                success: true,
                token: ''
            })
        } else {
            res.send({
                success: false,
                message: 'Wrong credentials'
            })
        }
    } else {
        res.send({
            success: false,
            message: 'Wrong credentials'
        })
    }
}

module.exports = {
    auth
}