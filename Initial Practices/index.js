const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    fs.appendFile('./LogFile.txt', `${Date.now()} : New Request has received at : ${req.url}\n`, () => { })
    res.end("Hello from Server");
});

app.listen(4000, () => console.log("Server is running on Port : 4000"))