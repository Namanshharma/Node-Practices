const express = require('express');
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 4000;
// in this we will create a hybrid server which means If client sends the request from Browser then we can directly render the 
// HTML content on the browser else we can send the JSON data to Client

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((x) => `<li>${x.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.get('/api/users', (req, res) => {
    return res.status(200).json(users);
})

// app.get('/api/users/:id', (req, res) => {
//     // const id = Number(req.params.id);
//     // const user = users.find((x) => x.id === id);
//     // return res.json(user);
//     return res.json(users.find(x => x.id === Number(req.params.id)))
// })

// app.patch('/api/users/:id', (req, res) => {
//     console.log(req);
// })

// app.delete('/api/users/:id', (req, res) => {
//     console.log(req);
// })

// we can merge them together

app.route('/api/users/:id').get((req, res) => {
    return res.status(200).json(users.find(x => x.id === Number(req.params.id)));
}).patch((req, res) => {
    return res.send("pending");
}).delete((req, res) => {
    return res.json({
        message: "Pending"
    })
})

app.post('/api/user', (req, res) => {
    console.log(req);
})


app.listen(PORT, () => console.log("Server is running on PORT number : " + PORT));























// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     return res.send("Hey from Home page");
// })



// // const app = http.createServer((req, res) => {    // traditional way to build server in Node by using Http module
// //     const myUrl = url.parse(req.url, true, true);
// //     console.log(myUrl);
// //     // fs.appendFile('./LogFile.txt', `${Date.now()} : New Request has received at : ${req.url}\n`, () => { })
// //     res.end("Hello from Server");
// // });

// app.listen(4000, () => console.log("Server is running on Port : 4000"))