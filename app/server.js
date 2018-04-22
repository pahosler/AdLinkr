const express = require('express');
// const mongoose = require('mongoose');

// const config = require('./config/config');
const coreRoutes = require('./routes/core');
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');

// const User = require('./models/User');

require('./db');

const app = module.exports = express();
const port = process.env.PORT || 3000;

app.use('/public', express.static('public'));

app.use('/', coreRoutes);
app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

app.use(function(req, res) {
    res.sendStatus(404);
});

app.listen(port, () => console.log(`AdLinkr server initalized.`));
