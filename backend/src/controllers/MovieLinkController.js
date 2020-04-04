const mongoose = require('mongoose');
const generateToken = require('../utils/generateToken');
require('../models/movie');
require('../models/listarLinksMovie');
require('../models/ProcessarLinksMovie');

const Movie = mongoose.model('Movie');
const LinksMovies = mongoose.model('LinksMovies');
const ProcessarMovies = mongoose.model('ProcessarMovies');

module.exports = {
    data: async (req, res) => {
        const {idThemovie} = req.params,
        userType = req.userType;

        if(userType!==1)
            return res.status(400).json({err: 'access denied'})


        const movie = await Movie.findOne({themoviedb: idThemovie, tipo: 'filme'});

        if(!movie)
            return res.status(400).json({err: 'not found'})
        const movieFinal = JSON.parse(JSON.stringify(movie));

        const stream = {
            dublado: movieFinal.stream.dublado || false,
            legendado: movieFinal.stream.legendado || false,
            nacional: movieFinal.stream.nacional || false
        };
        const download = {
            dublado: movieFinal.download.dublado || false,
            legendado: movieFinal.download.legendado || false,
            nacional: movieFinal.download.nacional || false
        };

        return res.status(200).json({stream, download});
    },
    add: async (req, res) => {

        res.status(205).json({oi:"as"})
    },
    delete: async (req, res) => {
        const {idThemovie, type, language, serverCode} = req.params,
        userType = req.userType;

        if(userType!==1)
            return res.status(400).json({err: 'access denied'})

        const filter = {themoviedb: idThemovie, tipo: 'filme'};

        const movie = await Movie.findOne(filter);

        if(!movie)
            return res.status(400).json({err: 'not found'})
        const movieFinal = JSON.parse(JSON.stringify(movie));

        if(!movieFinal[type][language])
            return res.status(400).json({err: 'dont found this link'})



        const response = movieFinal[type][language].filter(filter => filter.servidor!==serverCode);

        const itemUpdate = response.length===0 ? null : response;

        const update = {
            [type]: {
                [language]: itemUpdate
            }
        };

        await Movie.updateOne(filter, update);

        await LinksMovies.deleteMany({themoviedb: `${idThemovie}`, tipo: 'filme', tipo_link: type, idioma: language, servidor: serverCode});

        return res.status(200).json({themoviedb: idThemovie, type, language, listLinks: itemUpdate});
    }
}