const AllUsers = require('../users');
const jwt = require('jsonwebtoken');
const jswtPassword = "12345";

const userExists = (username, password) => {
    // write a logic to return true or false based on the existance of user in AllUser array
    const found = AllUsers.find(x => x.username === username && x.password === password)
    return found ? true : false;
}

const signUpHandler = (req, res) => {
    const { userName, password } = req.body;
    if (!userExists(userName, password)) {
        return res.status(403).json({
            Message: "User doesn't exists"
        })
    }
    var token = jwt.sign({ username: userName }, "shhh");
    return res.status(200).json({
        token
    })
}

const getUserHandler = (req, res) => {
    const token = req.Headers.authorization;
    try {
        const decoded = jwt.verify(token, jswtPassword);
        const userName = decoded.userName;
        // return a list of users except this current user
    } catch (error) {
        return res.status(403).json({
            message: "Invalid Token"
        })
    }
    // finally {}
}



module.exports = {
    signUpHandler, getUserHandler
}