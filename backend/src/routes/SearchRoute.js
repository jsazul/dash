const express = require('express');
const searchController = require('../controllers/searchController');

const SearchRoute = express.Router();

SearchRoute.get('/', searchController.index);

module.exports = SearchRoute;