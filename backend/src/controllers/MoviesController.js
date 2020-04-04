const mongoose = require('mongoose');
const generateToken = require('../utils/generateToken');
require('../models/movie');
require('../models/listarLinksMovie');
require('../models/ProcessarLinksMovie');

const Movie = mongoose.model('Movie');
const LinksMovies = mongoose.model('LinksMovies');
const ProcessarMovies = mongoose.model('ProcessarMovies');

module.exports = {
    index: async (req, res) => {
        const {page = 1} = req.query,
            userType = req.userType,
            perPage = 24,
            filter = {tipo: 'filme'};

        const count = await Movie.countDocuments(filter);
        res.header('X-Total-Count', count);
        res.header('X-Per-Page', perPage);

        if(count===0)
            return res.status(204).json([]);

            
        const movies = await Movie.find(filter, {__v: false, user: false, file: false, backup: false, torrent: false, categoria: false, nome_original: false, publicacao: false}).sort({publicacao: -1}).skip((page-1)*perPage).limit(perPage);
        const moviesParse = JSON.parse(JSON.stringify(movies));
        
        if(userType!==1){
            const moviesList = moviesParse.map(({banner, capa, categoria, descricao, trailer, publicacao, _id, themoviedb, nome, nome_original, ano, categorias, stream, download}) => {
                const streamB = {
                    dublado: stream.dublado ? true : false,
                    legendado: stream.legendado ? true : false,
                    nacional: stream.nacional ? true : false
                };
                const downloadB = {
                    dublado: download.dublado ? true : false,
                    legendado: download.legendado ? true : false,
                    nacional: download.nacional ? true : false
                };
    
                return {_id, themoviedb, nome, nome_original, ano, banner, capa, categoria, descricao, trailer: trailer==="https://www.youtube.com/embed/" ? null: trailer, publicacao, categorias, streamB, downloadB}
            });
            res.status(200).json(moviesList);
        } else {
            const moviesList = moviesParse.map(({banner, capa, categoria, descricao, trailer, publicacao, _id, themoviedb, nome, nome_original, ano, categorias, stream, download}) => {
                const streamB = {
                    dublado: stream.dublado || false,
                    legendado: stream.legendado || false,
                    nacional: stream.nacional || false
                };
                const downloadB = {
                    dublado: download.dublado || false,
                    legendado: download.legendado || false,
                    nacional: download.nacional || false
                };
    
                return {_id, themoviedb, nome, nome_original, ano, banner, capa, categoria, descricao, trailer: trailer==="https://www.youtube.com/embed/" ? null: trailer, publicacao, categorias, streamB, downloadB}
            });
            res.status(200).json(moviesList);
        }

    },
    data: async (req, res) => {
        const {idThemovie} = req.params,
        userType = req.userType;

        const movie = await Movie.findOne({themoviedb: idThemovie}).select('+pass');

        if(!movie)
            return res.status(400).json({err: 'not found'})
        const movieFinal = JSON.parse(JSON.stringify(movie));


        movieFinal.file = undefined;
        movieFinal.backup = undefined;
        movieFinal.torrent = undefined;
        movieFinal.user = undefined;
        movieFinal.tipo = undefined;
        movieFinal.trailer = movieFinal.trailer=="https://www.youtube.com/embed/"? "" : movieFinal.trailer;  

        if(userType!==1){
            const streamB = {
                dublado: movieFinal.stream.dublado ? true : false,
                legendado: movieFinal.stream.legendado ? true : false,
                nacional: movieFinal.stream.nacional ? true : false
            };
            const downloadB = {
                dublado: movieFinal.download.dublado ? true : false,
                legendado: movieFinal.download.legendado ? true : false,
                nacional: movieFinal.download.nacional ? true : false
            };

            movieFinal.download = downloadB;
            movieFinal.stream = streamB;

            return res.status(200).json(movieFinal);
        } else {
            const streamB = {
                dublado: movieFinal.stream.dublado || false,
                legendado: movieFinal.stream.legendado || false,
                nacional: movieFinal.stream.nacional || false
            };
            const downloadB = {
                dublado: movieFinal.download.dublado || false,
                legendado: movieFinal.download.legendado || false,
                nacional: movieFinal.download.nacional || false
            };

            movieFinal.download = downloadB;
            movieFinal.stream = streamB;

            return res.status(200).json(movieFinal);
        }

    },
    getLink: async (req, res) => {
        const {idThemovie} = req.params,
        userType = req.userType;

        if(userType!==1)
            return res.status(400).json({err: 'access denied'})


        const movie = await Movie.findOne({themoviedb: idThemovie}).select('+pass');

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
    create: (req, res) => {
        const userType = req.userType;

        if(userType!==1)
            return res.status(400).json({err: 'access denied'})

        res.status(200).json({})
    },
    delete: async (req, res) => {
        const {idThemovie} = req.params,
            userType = req.userType;

        if(userType!==1)
            return res.status(400).json({err: 'access denied'})

        const filter = {themoviedb: idThemovie, tipo: 'filme'};

        await LinksMovies.deleteMany(filter);
        await Movie.deleteMany(filter);
        await ProcessarMovies.deleteMany(filter);

        res.status(204).json();
    }
}