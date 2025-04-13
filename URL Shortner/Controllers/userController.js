const User = require('../Models/usersModel');

const userSignUpHandler = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.render("home");
};

const userLoginHandler = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) res.render('login', { error: "Invalid Email or Password" });
    return res.render("home");
};

module.exports = {
    userSignUpHandler, userLoginHandler
}