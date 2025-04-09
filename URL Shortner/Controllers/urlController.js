const URL = require('../Models/urlModel');
const shortid = require('shortid');

const generateNewShortUrlHandler = async (req, res) => {
    if (!req.body.url)
        return res.status(400).json({ error: "URL is required" });
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectUrl: req.body.url,
        visitHistory: []
    })
    return res.json({
        Id: shortId
    })
}

const getAnalyticsHandler = async (req, res) => {
    const shortId = req.params.shortId;
    if (!shortId) {
        return res.status(400).json({
            Message: "Please provide the Short Id"
        })
    }
    const obj = await URL.findOne({ shortId });
    return res.status(200).json({
        Message: "Success",
        TotalClicks: obj.visitHistory.length,
        Analytics: obj.visitHistory
    })
}

module.exports = {
    generateNewShortUrlHandler, getAnalyticsHandler
}