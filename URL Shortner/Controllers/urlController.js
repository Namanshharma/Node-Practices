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

const shortUrlToRedirectUrlHandler = async (req, res) => {
    if (!req.params.id)
        return res.status(400).json("Please enter the full URL");
    const obj = await URL.findOne({ shortId: req.params.id });
    // return res.status(200).json({
    //     Message: "Succes",
    //     Redirect_URL: obj.redirectUrl
    // })
    console.log(obj);
    res.redirect(obj.redirectUrl);
}

module.exports = {
    generateNewShortUrlHandler, shortUrlToRedirectUrlHandler
}