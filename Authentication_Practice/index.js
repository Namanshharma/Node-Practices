const express = require('express');
const jwt = require('jsonwebtoken');
const jswtPassword = "12345";

const app = express();
const All_Users = [{
    username: "testing@gmail.com", password: "test", name: "Testing Person"
}, {
    username: "betting@gmail.com", password: "bett", name: "Betting Person"
}, {
    username: "catching@gmail.com", password: "catch", name: "Catching Person"
}]

const userExists = (username, password) => {

}

app.post('/',)

app.listen(4000);