const express = require('express');
const { generateNewShortUrlHandler, shortUrlToRedirectUrlHandler } = require('../Controllers/urlController');

const router = express.Router();

router.get('/:id', shortUrlToRedirectUrlHandler);
router.post('/', generateNewShortUrlHandler);

module.exports = router;