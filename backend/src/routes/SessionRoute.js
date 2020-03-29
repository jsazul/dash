const express = require('express');
const sessionValidator = require('../validator/sessionValidator');

const SessionRoute = express.Router();

SessionRoute.post('/session/', sessionValidator.authenticate, (req, res) => {
    res.status(200).json({page: 'seassion-post'})
});
SessionRoute.delete('/session/', sessionValidator.logOut, (req, res) => {
    res.status(200).json({page: 'seassion-delete'})
});

module.exports = SessionRoute;