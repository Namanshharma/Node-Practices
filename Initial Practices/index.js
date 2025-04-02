const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const { connectWithMongoose } = require('./connection')
const { middleware1 } = require('./middlewares');
// ------------------------------------------------------------- Importing section ends and create a Server -----------------------------------------------
const app = express();
const PORT = 4000;
// ---------------------------------------------------------------- Building connection with DB ------------------------------------------------------------
connectWithMongoose("mongodb://127.0.0.1:27017/Initial_Practice");

// ------------------------------------------------------------- Middleware Section ---------------------------------------------------------------------
app.use(bodyParser.json());
app.use(middleware1);
// ------------------------------------------------------------------ routing or endpoint section -------------------------------------------------------------
app.use("/user", userRouter);

// ----------------------------------------------------------------- Terminate middleware -------------------------------------------------------------------
app.listen(PORT, () => console.log("Server is running on PORT number : " + PORT));