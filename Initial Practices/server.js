// importing area
const express = require('express');
const app = express();
const postRequest = require('./controllers/userController');
const getRequestOfHomePage = require('./controllers/userController')

// implementation area
app.get("/", getRequestOfHomePage);

app.post("/postRequest", postRequest)



// exporting area or Listening area
app.listen(port, () => { console.log("Port is running on 4000") });