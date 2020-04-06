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
    },
    data: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-Idthemovie-get', idThemovie})
    },
    create: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-post', idThemovie})
    },
    update: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-Idthemovie-put', idThemovie})
    },
    delete: async (req, res) => {
        const {idThemovie} = req.params;
        res.status(200).json({page: 'tvshow-Idthemovie-delete', idThemovie})
    }
}