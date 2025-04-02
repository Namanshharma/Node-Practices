const mongoose = require('mongoose');

async function connectWithMongoose(url) {
    return mongoose.connect(url)
    // return mongoose.connect('mongodb://127.0.0.1:27017/Initial_Practice')
    // .then(() => console.log("Mongo DB is connected"))
    // .catch(err => console.log("Mongo Error", err))
}

module.exports = {
    connectWithMongoose 
};