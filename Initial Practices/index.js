const http = require('http');
const fs = require('fs');
const url = require('url'); // this package is used to handle the Request URL completely with the route parameter, query string parameter.

const app = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true, true);
    console.log(myUrl);
    // fs.appendFile('./LogFile.txt', `${Date.now()} : New Request has received at : ${req.url}\n`, () => { })
    res.end("Hello from Server");
});

app.listen(4000, () => console.log("Server is running on Port : 4000"))