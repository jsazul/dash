const express = require('express');
const userController = require('../controllers/userController');
const userValidator = require('../validator/userValidator');

const UserRoute = express.Router();

UserRoute.post('/', userValidator.register, userController.register);
UserRoute.get('/', (req, res) => {
    res.status(200).json({page: 'user-get'})
});
UserRoute.get('/search', (req, res) => {
    res.status(200).json({page: 'user-search'})
});

module.exports = UserRoute;