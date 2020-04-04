const express = require('express');
const MoviesController = require('../controllers/MoviesController');

const MoviesValidator = require('../validator/MoviesValidator');

const MovieRoute = express.Router();


MovieRoute.get('/', MoviesValidator.index, MoviesController.index);
MovieRoute.post('/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-post'})
});

MovieRoute.get('/:idThemovie', MoviesValidator.data, MoviesController.data);
MovieRoute.delete('/:idThemovie', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-delete'})
});
MovieRoute.put('/:idThemovie', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-put'})
});


MovieRoute.get('/:idThemovie/link/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-get'})
});
MovieRoute.post('/:idThemovie/link/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-post'})
});
MovieRoute.delete('/:idThemovie/link/:linkCode/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-delete'})
});
MovieRoute.put('/:idThemovie/link/:linkCode/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-put'})
});

module.exports = MovieRoute;