const express = require('express');
const sessionController = require('../controllers/sessionController');
const sessionValidator = require('../validator/sessionValidator');

const SessionRoute = express.Router();

SessionRoute.post('/authenticate', sessionValidator.authenticate, sessionController.authenticate);

SessionRoute.delete('/', sessionValidator.logOut, (req, res) => {
    res.status(200).json({page: 'seassion-delete'})
});

module.exports = SessionRoute;