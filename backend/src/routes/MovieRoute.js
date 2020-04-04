const express = require('express');
const MovieController = require('../controllers/MovieController');
const MovieLinkController = require('../controllers/MovieLinkController');

const MovieValidator = require('../validator/MovieValidator');
const MovieLinkValidator = require('../validator/MovieLinkValidator');

const MovieRoute = express.Router();


MovieRoute.get('/', MovieValidator.index, MovieController.index);
MovieRoute.post('/', MovieValidator.create, MovieController.create);

MovieRoute.get('/:idThemovie', MovieValidator.data, MovieController.data);
MovieRoute.delete('/:idThemovie', MovieValidator.delete, MovieController.delete);
MovieRoute.put('/:idThemovie', MovieValidator.update, MovieController.update);


MovieRoute.get('/:idThemovie/link/', MovieLinkValidator.data, MovieLinkController.data);
MovieRoute.post('/:idThemovie/link/', MovieLinkValidator.add, MovieLinkController.add);
MovieRoute.delete('/:idThemovie/link/:type/:language/:serverCode/', MovieLinkValidator.delete, MovieLinkController.delete);
MovieRoute.put('/:idThemovie/link/:serverCode/', (req, res) => {
    const {idThemovie, serverCode} = req.params;
    res.status(200).json({page: 'movie-put', idThemovie, serverCode})
});

module.exports = MovieRoute;