const express = require('express');
const { generateNewShortUrlHandler } = require('../Controllers/urlController');

const router = express.Router();

router.post('/', generateNewShortUrlHandler)

module.exports = router;