var bcrypt = require( 'bcrypt')
var saltRounds = 10
​
const cipherPassword = password => new Promise((resolve,reject) => {
    bcrypt.hash(password, saltRounds).then(function(hash) {
        resolve(hash)
    }).catch(err => reject(err))
})
​
const comparePassword = (password, searchedPass) => new Promise ((resolve,reject) => {
    bcrypt.compare(password, searchedPass, (err, res) => {
        if (err) reject(err)
        resolve(res)
    })
})
​
module.exports = {
    cipherPassword,
    comparePassword
}