const express = require('express');

const TvShowController = require('../controllers/TvShowController');

const TvShowValidator = require('../validator/TvShowValidator');

const TvShowRoute = express.Router();


TvShowRoute.get('/', TvShowValidator.index, TvShowController.index);
TvShowRoute.get('/list/seassons/', TvShowValidator.indexSeasson, TvShowController.indexSeasson);
TvShowRoute.get('/list/episodes/', TvShowValidator.indexEpisode, TvShowController.indexEpisode);


TvShowRoute.get('/:idThemovie/', TvShowValidator.data, TvShowController.data);
TvShowRoute.post('/', TvShowValidator.create, TvShowController.create);
TvShowRoute.delete('/:idThemovie/', TvShowValidator.delete, TvShowController.delete);
TvShowRoute.put('/:idThemovie/', TvShowValidator.update, TvShowController.update);


TvShowRoute.get('/:idThemovie/seasson/', (req, res) => {
    const {idThemovie} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-get', idThemovie})
});
TvShowRoute.post('/:idThemovie/seasson/', (req, res) => {
    const {idThemovie} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-post', idThemovie})
});
TvShowRoute.delete('/:idThemovie/seasson/:numberSeasson/', (req, res) => {
    const {idThemovie, numberSeasson} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-numberSeasson-delete', idThemovie, numberSeasson})
});
TvShowRoute.put('/:idThemovie/seasson/:numberSeasson/', (req, res) => {
    const {idThemovie, numberSeasson} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-numberSeasson-put', idThemovie, numberSeasson})
});


TvShowRoute.get('/:idThemovie/seasson/:numberSeasson/episode/', (req, res) => {
    const {idThemovie, numberSeasson} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-numberSeasson-episode-get', idThemovie, numberSeasson})
});
TvShowRoute.post('/:idThemovie/seasson/:numberSeasson/episode/', (req, res) => {
    const {idThemovie, numberSeasson} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-numberSeasson-episode-post', idThemovie, numberSeasson})
});
TvShowRoute.delete('/:idThemovie/seasson/:numberSeasson/episode/:numberEpisode/', (req, res) => {
    const {idThemovie, numberSeasson, numberEpisode} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-numberSeasson-episode-numberEpisode-delete', idThemovie, numberSeasson, numberEpisode})
});
TvShowRoute.put('/:idThemovie/seasson/:numberSeasson/episode/:numberEpisode/', (req, res) => {
    const {idThemovie, numberSeasson, numberEpisode} = req.params;
    res.status(200).json({page: 'tvshow-Idthemovie-seasson-numberSeasson-episode-numberEpisode-put', idThemovie, numberSeasson, numberEpisode})
});


TvShowRoute.put('/:idThemovie/link/:serverCode/', (req, res) => {
    const {idThemovie} = req.params;
    res.status(200).json({page: 'tvshow-put', idThemovie})
});

module.exports = TvShowRoute;