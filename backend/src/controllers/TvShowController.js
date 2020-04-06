const mongoose = require('mongoose');

require('../models/tvShow');

const TvShow = mongoose.model('TvShow');

module.exports = {
    index: async (req, res) => {
        const {page = 1} = req.query,
            userType = req.userType,
            perPage = 24,
            filter = {tipo: 'serie'};

        const count = await TvShow.countDocuments(filter);
        res.header('X-Total-Count', count);
        res.header('X-Per-Page', perPage);

        if(count===0)
            return res.status(204).json({});


        const tvShow = await TvShow.find(filter, {__v: false, user: false, categoria: false, nome_original: false, publicacao: false}).sort({publicacao: -1}).skip((page-1)*perPage).limit(perPage);
        const tvShowParse = JSON.parse(JSON.stringify(tvShow));

        res.status(200).json(tvShowParse)
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
        const {idThemovie} = req.params,
            userType = req.userType;

        if(userType!==1)
            return res.status(401).json({err: 'access denied'})

        res.status(200).json({page: 'tvshow-Idthemovie-get', idThemovie})
    },
    create: async (req, res) => {
        const {idThemovie} = req.params,
            userType = req.userType;

        if(userType!==1)
            return res.status(401).json({err: 'access denied'})

        res.status(200).json({page: 'tvshow-post', idThemovie})
    },
    update: async (req, res) => {
        const {idThemovie} = req.params,
        userType = req.userType;

        if(userType!==1)
            return res.status(401).json({err: 'access denied'})

        res.status(200).json({page: 'tvshow-Idthemovie-put', idThemovie})
    },
    delete: async (req, res) => {
        const {idThemovie} = req.params,
            userType = req.userType;

        if(userType!==1)
            return res.status(401).json({err: 'access denied'})

        res.status(200).json({page: 'tvshow-Idthemovie-delete', idThemovie})
    }
}