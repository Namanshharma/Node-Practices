const express = require('express');
const { userSignUpHandler } = require('../Controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userSignUpHandler);

module.exports = userRouter;