const express = require('express');

const app = module.exports = express();
const port = process.env.PORT || 3000; 

app.use('/public', express.static('public'));

app.listen(port, () => console.log(`AdLinkr server initalized.`));

app.get('/', (req, res) => {
    res.sendStatus(200)
});

app.get('/api', (req, res) => {
    res.json({"error": "Invalid endpoint."});
});

app.get('/api/*', (req, res) => {
    res.json({"error": "Invalid endpoint."});
});

app.use(function(req, res){
    res.sendStatus(404)
});