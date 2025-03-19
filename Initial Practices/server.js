// importing area
const express = require('express');
const app = express();
// const userController = require('./controllers/userController')
const { getRequestOfHomePage, postRequest } = require('./controllers/userController');

// implementation area
// app.get("/", userController.getRequestOfHomePage);
app.get("/", getRequestOfHomePage);

// app.post("/postRequest", userController.postRequest)
app.post("/postRequest", postRequest)

// exporting area or Listening area
app.listen(4000, () => { console.log("Port is running on 4000") });