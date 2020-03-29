const express = require('express');

const SessionRoute = express.Router();

SessionRoute.post('/session/', (req, res) => {
    res.status(200).json({page: 'seassion-post'})
});
SessionRoute.delete('/session/', (req, res) => {
    res.status(200).json({page: 'seassion-delete'})
});

module.exports = SessionRoute;