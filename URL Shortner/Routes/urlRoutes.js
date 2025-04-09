const express = require('express');
const { generateNewShortUrlHandler, getAnalyticsHandler } = require('../Controllers/urlController');

const urlRouter = express.Router();

urlRouter.get('/analytics/:shortId', getAnalyticsHandler);
urlRouter.post('/', generateNewShortUrlHandler);

module.exports = urlRouter;