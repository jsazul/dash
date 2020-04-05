const mongoose = require('mongoose');

module.exports = {
    index: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-get', idThemovie})
    },
    indexSeasson: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-list-seassons-get', idThemovie})
    },
    indexEpisode: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-list-episodes-get', idThemovie})
    }
}