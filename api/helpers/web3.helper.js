const Web3 = require('web3')

function connect(){
    return web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
}


module.exports={
    connect
}