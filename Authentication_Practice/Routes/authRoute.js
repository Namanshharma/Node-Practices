const express = require('express');
const { signUpHandler, getUserHandler } = require('../Controllers/authController')

const Router = express.Router();

// Router.post('/signup', signUpHandler);
// Router.get('/users', getUserHandler)

Router.post('/signJWT', singJWT);
Router.post('/verifyJWT', verifyJWT);
Router.post('/decodeJWT', decodeJWT);

module.exports = Router;