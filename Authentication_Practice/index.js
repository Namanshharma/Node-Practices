const express = require('express');
const authRoutes = require('./Routes/authRoute')

const app = express();
app.use(express.json());                // this middleware is used to convert the body into json
app.use(express.urlencoded({ extended: true }));        // this middleware is used 

app.use('/', authRoutes)

app.listen(4000);