const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    gender: { type: String },
    phone_number: { type: String, required: true }
}, { timeStamp: true });

const User = mongoose.model("user", userSchema);

module.exports = User;