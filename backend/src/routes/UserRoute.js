const express = require('express');

const UserRoute = express.Router();

const teste = (req, res) => {
    res.status(200).json({code: req.params})
};

UserRoute.post('/user/', teste);
UserRoute.get('/user/', teste);
UserRoute.get('/user/search/', teste);

module.exports = UserRoute;