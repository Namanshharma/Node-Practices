const express = require('express');
const { signUpHandler, getUserHandler } = require('../Controllers/authController')

const Router = express.Router();

Router.post('/signup', signUpHandler);
Router.get('/users', getUserHandler)

module.exports = Router;