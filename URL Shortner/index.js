const express = require('express');
const router = require('./Routes/urlRoutes');
const connectToMongoDB = require('./connect');

const app = express();
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("Conneted with Mongo"))
    .catch((err) => console.log("Some error has occurred", err));

app.use('/url', router)

app.listen(4000, () => console.log(`Server is running on Port : 4000`));