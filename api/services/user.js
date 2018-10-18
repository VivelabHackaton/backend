var userModel = require('../models/user')

const cipherHelper = require('../helpers/cipher.helper')

const getUser = (email) => new Promise((resolve, reject) => {
    let query = {email: email}
    userModel.User.findOne(query, function (err, doc) {
        if(err) reject(error)
        resolve(doc)
    })
})

module.exports = {
    getUser
}
