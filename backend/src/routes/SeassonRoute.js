const express = require('express');

const SeassonRoute = express.Router();

SeassonRoute.post('/session/', (req, res) => {
    res.status(200).json({message: 'Lindão'})
});
SeassonRoute.delete('/session/', (req, res) => {
    res.status(200).json({message: 'Lindão DELETE'})
});

module.exports = SeassonRoute;