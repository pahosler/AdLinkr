const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({"error": "Invalid endpoint."});
});

router.get('/*', (req, res) => {
    res.json({"error": "Invalid endpoint."});
});

module.exports = router;