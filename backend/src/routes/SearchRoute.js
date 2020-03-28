const express = require('express');

const SearchRoute = express.Router();

SearchRoute.get('/search/', (req, res) => {
    const query = req.query;
    res.status(200).json({query})
});

module.exports = SearchRoute;