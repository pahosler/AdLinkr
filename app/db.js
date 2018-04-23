/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const config = require('./config/config');
const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'dev') {
    mongoose.connect(config.db.development);
} else {
    console.log('prod mode bossman');
    mongoose.connect(config.db.production);
}
