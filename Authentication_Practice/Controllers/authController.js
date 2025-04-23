const AllUsers = require('../users');
const jwt = require('jsonwebtoken');
const jwtPassword = "12345";

const userExists = (username, password) => {
    const found = AllUsers.find(x => x.username === username && x.password === password);
    return found ? true : false;
}

const signUpHandler = (req, res) => {
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