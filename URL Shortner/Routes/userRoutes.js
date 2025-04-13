const express = require('express');
const { userSignUpHandler, userLoginHandler } = require('../Controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userSignUpHandler);
userRouter.post('/login', userLoginHandler);

module.exports = userRouter;