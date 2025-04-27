const AllUsers = require('../users');
const jwt = require('jsonwebtoken');
const jwtPassword = "12345";
const USER = require('../Models/userModel');

const userExists = (username, password) => {
    const found = AllUsers.find(x => x.username === username && x.password === password);
    return found ? true : false;
}

const signUpHandler = async (req, res) => {

    const userExists = await USER.findOne({ email: req.body.email });
    if (userExists) {
        return res.status(200).json({
            Message: "User Already Exists",
        })
    }
    await USER.create({
        email: req.body.email,
        name: req.body.username,
        password: req.body.password
    }).then(res.status(200).json({
        Message: "User Successfully Created",
    }))

    const { username, password } = req.body;
    if (!userExists(username, password)) {
        return res.status(403).json({
            Message: "User doesn't exists"
        })
    }
    var token = jwt.sign({ username: username }, jwtPassword);              // first method of JWT library 
    return res.status(200).json({
        token
    })
}

const getUserHandler = (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);                     // second method of JWT library
        const userName = decoded.username;
        const users = AllUsers.filter(x => x.username != userName)
        return res.status(200).json({
            Message: "Success", Data: users
        })
    } catch (error) {
        return res.status(403).json({
            message: "Invalid Token"
        })
    }
}

module.exports = {
    signUpHandler, getUserHandler
}