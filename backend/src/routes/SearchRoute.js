const express = require('express');

const SearchRoute = express.Router();

SearchRoute.get('/search/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'search-get', query})
});

module.exports = SearchRoute;