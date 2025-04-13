const User = require('../Models/usersModel');
const { v4: uuidv4 } = require('uuid');
const { getUser, setUser } = require('../Service/auth')

const userSignUpHandler = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.render("home");
};

const userLoginHandler = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) res.render('login', { error: "Invalid Email or Password" });
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId);
    return res.render("home");
};

module.exports = {
    userSignUpHandler, userLoginHandler
}