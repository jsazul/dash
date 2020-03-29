const express = require('express');

const UserRoute = express.Router();

UserRoute.post('/user/', (req, res) => {
    res.status(200).json({page: 'user-post'})
});
UserRoute.get('/user/', (req, res) => {
    res.status(200).json({page: 'user-get'})
});
UserRoute.get('/user/search/', (req, res) => {
    res.status(200).json({page: 'user-search'})
});

module.exports = UserRoute;