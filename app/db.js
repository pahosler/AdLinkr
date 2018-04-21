const config = require('./config/config');
const mongoose = require('mongoose');

if(process.env.NODE_ENV === 'dev') {
    mongoose.connect(config.db.development);
} else {
    console.log("prod mode bossman")
    mongoose.connect(config.db.production);
}