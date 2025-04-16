const express = require('express');
const authRoutes = require('./Routes/authRoute')

const app = express();

app.use('/', authRoutes)

app.listen(4000);