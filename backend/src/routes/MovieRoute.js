const express = require('express');

const MovieRoute = express.Router();


MovieRoute.get('/movie/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-get'})
});
MovieRoute.post('/movie/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-post'})
});

MovieRoute.get('/movie/:idThemovie', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-get'})
});
MovieRoute.delete('/movie/:idThemovie', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-delete'})
});
MovieRoute.put('/movie/:idThemovie', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-put'})
});


MovieRoute.get('/movie/:idThemovie/link/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-get'})
});
MovieRoute.post('/movie/:idThemovie/link/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-post'})
});
MovieRoute.delete('/movie/:idThemovie/link/:linkCode/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-delete'})
});
MovieRoute.put('/movie/:idThemovie/link/:linkCode/', (req, res) => {
    const query = req.query;
    res.status(200).json({page: 'movie-put'})
});

module.exports = MovieRoute;