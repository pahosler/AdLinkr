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
const bodyParser = require('body-parser');

const coreRoutes = require('./routes/core');
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');

require('./db');

const app = module.exports = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/public', express.static('public'));

app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);
app.use('/', coreRoutes);

app.listen(port, () => console.log(`AdLinkr server initalized.`));
