const express = require('express');
const URL = require('../Models/urlModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const data = await URL.find({});
    return res.render("home", { urls: data });
})

router.get('/signup', async (req, res) => {
    return res.render("signup")
});

router.get('/login', async (req, res) => {
    return res.render("login");
})

module.exports = router;