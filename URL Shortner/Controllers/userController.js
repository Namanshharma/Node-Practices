const User = require('../Models/usersModel');

const userSignUpHandler = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.status(200).json({
        Message: "Success"
    });
};

module.exports = {
    userSignUpHandler
}