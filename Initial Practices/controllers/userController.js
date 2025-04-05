const User = require('../models/userModel');

async function handleGetAllUsers(req, res) {
    return res.json(await User.find({}));
}

const handleGetUserById = async (req, res) => {
    // return res.status(200).json(User.find(x => x.id === Number(req.params.id)));
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
}

const handleUpdateUserById = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id,
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            email: req.body.email,
            phone_number: req.body.phone_number
        });
    const user = await User.findById(req.params.id);
    return res.status(201).json({
        Message: "Success",
        UpdatedUser: user
    })
}

const handleDeleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
        Message: "Success",
        Users: await User.find({})
    })
}

const handleCreateNewUser = async (req, res) => {
    if (!req.body || !req.body.first_name || !req.body.email || !req.body.phone_number) { return res.status(400).json({ message: "First Name, Email and Phone number are mendatory" }); }
    const result = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number,
    });
    console.log(result);
    return res.status(201).json({ Message: "User Added Successfully" });
}

module.exports = {
    handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser
}