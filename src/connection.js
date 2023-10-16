const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/../.env'})

module.exports.connection = () => {
    mongoose.connect(process.env.NODE_APP_CONNECT)
        .then(() => {
            console.log('Connected to database');
        })
        .catch((err) => {
            console.log(err);
        })
};
