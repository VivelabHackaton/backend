var userService = require('../services/user')
var cipherHelper = require('../helpers/cipher.helper')

const login = (req, res) => {
    userService.getUser(req.body.email).then(
        user => {
            if (user) {
                cipherHelper.comparePassword(req.body.password).then(
                    isValid => {
                        if (isValid) res.json({msg: 'Loggeado'})
                        res.json({error: 'Invalid username or password'})
                    }
                ).catch(err => res.json({error: 'Invalid username or password'}))
            }

        }
    ).catch(err => res.json({error: 'User not found'}))
}

module.exports = {
    login
}