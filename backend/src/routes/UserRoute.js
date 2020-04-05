const express = require('express');
const userController = require('../controllers/userController');
const userValidator = require('../validator/userValidator');

const authMiddlewares = require('../middlewares/auth');

const UserRoute = express.Router();

UserRoute.post('/resgister', userValidator.register, userController.register);

UserRoute.get('/', authMiddlewares, userValidator.index, userController.index);
UserRoute.put('/:userId/', authMiddlewares, userValidator.update, userController.update);

UserRoute.get('/search', (req, res) => {
    res.status(200).json({page: 'user-search'})
});

module.exports = UserRoute;