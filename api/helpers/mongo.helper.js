
const mongoose = require('mongoose')

const options = {
    user: "admin",
    pass: "votaciones2018." ,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4
};
const url = 'mongodb://localhost:27017/votaciones'

const connect = () => {
    var db = mongoose.connect(url,options);
    return db;
}

mongoose.Promise= global.Promise;

module.exports ={
    connect
}