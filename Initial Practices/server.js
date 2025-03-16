// importing area
const express = require('express');
const app = express();

// implementation area
app.get("/", (req, res) => {
    // res.send("Hello Naman");    // generally we need to send the Status in the reponse along with the response in JSON format
    res.status(201).json({
        OutputMessage: "Hello World"
    })
});

app.post("/postRequest", (req, res) => {
    res.status(500).json({
        email: "xxx@slomins.com"
    })
})

// exporting area or Listening area
app.listen(4000, () => { console.log("Port is running on 4000") });