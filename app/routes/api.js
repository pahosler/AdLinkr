/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.json({'error': 'Invalid endpoint.'});
});

router.get('/*', (req, res) => {
    res.json({'error': 'Invalid endpoint.'});
});

module.exports = router;
