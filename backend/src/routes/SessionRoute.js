const express = require('express');
const sessionController = require('../controllers/sessionController');
const sessionValidator = require('../validator/sessionValidator');

const SessionRoute = express.Router();

SessionRoute.post('/authenticate', sessionValidator.authenticate, sessionController.authenticate);

module.exports = SessionRoute;