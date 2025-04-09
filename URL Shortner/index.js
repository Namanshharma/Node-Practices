const express = require('express');
const urlRouter = require('./Routes/urlRoutes');
const connectToMongoDB = require('./connect');
const URL = require('./Models/urlModel');
const userRouter = require('./Routes/userRoutes');
const path = require('path');
const staticRouter = require('./Routes/staticRoutes');

const app = express();

app.use(express.json());                            // through this we can get json parsed data
app.use(express.urlencoded({ extended: false }));   // through this we can get the FROM related data

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("Conneted with Mongo"))
    .catch((err) => console.log("Some error has occurred", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).json("Please enter the full URL");
    const shortId = req.params.id;
    // const obj = await URL.findOneAndUpdate({ shortId: req.params.id }, { visitHistory });
    // res.redirect(obj.redirectUrl);  
    const entry = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timeStamp: Date.now(), } } });
    res.redirect(entry.redirectUrl);
})

app.use('/url', urlRouter);
app.use('/', staticRouter)
app.use('/user', userRouter);


app.listen(4000, () => console.log(`Server is running on Port : 4000`));