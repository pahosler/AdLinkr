/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    shortcode: {
        type: String,
        required: true,
    },
    utmSource: {type: String},
    utmMedium: {type: String},
    utmTerm: {type: String},
    utmContent: {type: String},
});

module.exports = mongoose.model('Link', linkSchema);
