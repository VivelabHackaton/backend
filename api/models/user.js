
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
​
var userSchema = new Schema({
    id: String,
    name: String,
    email: String,
    adminEmail: String,
    regToken: String
});
​
var User = mongoose.model('User', userSchema, 'usersCollection');
​
module.exports={
    User
}