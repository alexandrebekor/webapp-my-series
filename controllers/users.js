// JWT
const jwt = require('jsonwebtoken')
const jwtSecret = 'abc12345'

const auth = async ({ usersModel }, req, res) => {
    const user = req.body
    const userAuth = await usersModel.findOne({ username: user.username })
    if(userAuth) {
        if(userAuth.password === user.password) {
            const payload = {
                id: userAuth._id,
                username: userAuth.username,
                roles: userAuth.roles
            }
            jwt.sign(payload, jwtSecret, (err, token) => {
                res.send({
                    success: true,
                    token
                })
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
    auth,
    jwt,
    jwtSecret
}