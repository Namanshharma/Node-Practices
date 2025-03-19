const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hey from Home page");
})



// const app = http.createServer((req, res) => {    // traditional way to build server in Node by using Http module
//     const myUrl = url.parse(req.url, true, true);
//     console.log(myUrl);
//     // fs.appendFile('./LogFile.txt', `${Date.now()} : New Request has received at : ${req.url}\n`, () => { })
//     res.end("Hello from Server");
// });

app.listen(4000, () => console.log("Server is running on Port : 4000"))