const { nanoid } = require('nanoid');
const URL = require('../Models/urlModel');

const generateNewShortUrlHandler = async (req, res) => {
    if (!req.body.url)
        return res.status(400).json({ error: "URL is required" });
    const shortId = nanoid(8).toString();
    await URL.create({
        shortId: shortId,
        redirectUrl: req.body.url,
        visitHistory: []
    })
    return res.json({
        Id: shortId
    })
}

module.exports = {
    generateNewShortUrlHandler
}