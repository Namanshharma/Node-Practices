const express = require('express');
const authRoutes = require('./Routes/authRoute')
const { connectToMongoDB, createMongoModel } = require('./connect');

connectToMongoDB('mongodb://127.0.0.1:27017/Authentication_Practice')
    .then(() => console.log("Mongo DB is connected Successfully"))
    .catch((error) => console.log("Something went wrong" + error));

const app = express();
app.use(express.json());                // this middleware is used to convert the body into json
app.use(express.urlencoded({ extended: true }));        // this middleware is used

app.use('/', authRoutes)

app.listen(4000, () => console.log(`Server is running on port 4000`));