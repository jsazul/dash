const express = require('express');
const SessionValidator = require('../validator/SessionValidator');

const SessionRoute = express.Router();

SessionRoute.post('/session/', SessionValidator.authenticate, (req, res) => {
    res.status(200).json({page: 'seassion-post'})
});
SessionRoute.delete('/session/', SessionValidator.logOut, (req, res) => {
    res.status(200).json({page: 'seassion-delete'})
});

module.exports = SessionRoute;