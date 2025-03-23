const express = require('express');
const bodyParser = require('body-parser')
const users = require('./MOCK_DATA.json')
const fs = require('fs');

const app = express();
const PORT = 4000;
// in this we will create a hybrid server which means If client sends the request from Browser then we can directly render the 
// HTML content on the browser else we can send the JSON data to Client

app.use(bodyParser.json()); // Middleware to convert the request body into JSON

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

app.post('/api/user', (req, res) => {
    // users.push({
    //     id: users.length + 1,
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     gender: req.body.gender,
    //     phone_number: req.body.phone_number,
    // })
    users.push({ ...req.body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({
            Id: users.length,
            Message: "User Added Successfully"
        })
    })
})

app.route('/api/users/:id')
    .get((req, res) => {
        return res.status(200).json(users.find(x => x.id === Number(req.params.id)));
    })
    .patch((req, res) => {
        const foundUser = users.find(x => x.first_name === req.body.first_name);
        if (foundUser == undefined || foundUser == null) {
            return res.status(200).json({
                Message: "User Didn't found"
            })
        }
        console.log(foundUser);
        foundUser.first_name = req.body.first_name;
        foundUser.last_name = req.body.last_name;
        foundUser.email = req.body.email;
        foundUser.gender = req.body.gender;
        foundUser.phone_number = req.body.phone_number;
        console.log(foundUser);
        return res.json({
            message: "Pending"
        })
    })
    .delete((req, res) => {
        const index = users.findIndex(x => x.id === Number(req.params.id));
        if (index >= 0) {
            const removedUser = users.splice(index, 1);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
                return res.status(200).json({
                    Message: "User Deleted Successfully",
                    Details: removedUser
                })
            })
        } else {
            return res.status(200).json({
                Message: "User already Deleted"
            })
        }
        // users.filter(x => x.id != Number(req.params.id));
        // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        //     return res.json({
        //         Message: "User Deleted Successfully"
        //     })
        // })
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