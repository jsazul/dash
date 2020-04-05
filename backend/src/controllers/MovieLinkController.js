const mongoose = require('mongoose');
const generateToken = require('../utils/generateToken');
require('../models/movie');
require('../models/listarLinksMovie');
require('../models/ProcessarLinksMovie');
require('../models/servidor');

const Movie = mongoose.model('Movie');
const LinksMovies = mongoose.model('LinksMovies');
const ProcessarMovies = mongoose.model('ProcessarMovies');
const Servidor = mongoose.model('Servidor');

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
        const {idThemovie} = req.params,
            {quality, language, links} = req.body,
            userType = req.userType;
        
        if(userType!==1)
            return res.status(400).json({err: 'access denied'});

        const filter = {themoviedb: idThemovie, tipo: 'filme'};


        const movieLinks = await Movie.findOne(filter);


        const serversList = await Servidor.find({tipo: "link"});
        const servers = JSON.parse(JSON.stringify(serversList));

        const stream = {update: [], tipeUpdate: '', add: []};
        const download = {update: [], tipeUpdate: '', add: []};
        const backup = {update: [], tipeUpdate: '', add: []};

        links.map(link => {
            const domain = link.split('/')[2];
            var selected = servers.filter(server => domain==server.dominio)[0];
            selected = JSON.parse(JSON.stringify(selected));
            
            if(selected.stream===true){
                if(selected.stream_dados.converter===false){
                    var streamLink = link;
                } else {
                    var id = link.split(selected.stream_dados.dados_converter.explode)[selected.stream_dados.dados_converter.numero_explode].replace(/embed-/g, '').replace(/.html/g, '');
                    var streamLink = selected.stream_dados.dados_converter.base.replace(/{ID_FILE}/g, id);
                }
                stream.tipeUpdate = movieLinks.stream[language]===null ? '$set' : '$push';

                stream.update.push({
                    servidor: selected.numero,
                    nome_servidor: selected.nome,
                    qualidade: quality,
                    link: streamLink
                })
                stream.add.push({
                    themoviedb: idThemovie,
                    servidor: selected.numero,
                    nome_servidor: selected.nome,
                    idioma: language,
                    link: streamLink,
                    tipo_link: 'stream',
                    qualidade: quality,
                })
            }
            if(selected.download===true){
                if(selected.download_dados.converter===false){
                    var downloadLink = link;
                } else {
                    var id = link.split(selected.download_dados.dados_converter.explode)[selected.download_dados.dados_converter.numero_explode].replace(/embed-/g, '').replace(/.html/g, '');
                    var downloadLink = selected.download_dados.dados_converter.base.replace(/{ID_FILE}/g, id);
                }
                download.tipeUpdate = movieLinks.download[language]===null ? '$set' : '$push';

                download.update.push({
                    servidor: selected.numero,
                    nome_servidor: selected.nome,
                    qualidade: quality,
                    link: downloadLink
                })
                download.add.push({
                    themoviedb: idThemovie,
                    servidor: selected.numero,
                    nome_servidor: selected.nome,
                    idioma: language,
                    link: downloadLink,
                    tipo_link: 'download',
                    qualidade: quality,
                })
            }
            if(selected.backup===true){
                if(selected.backup_dados.converter===false){
                    var backupLink = link;
                } else {
                    var id = link.split(selected.backup_dados.dados_converter.explode)[selected.backup_dados.dados_converter.numero_explode];
                    var downloadLink = selected.backup_dados.dados_converter.base.replace(/{ID_FILE}/g, id);
                }
                backup.tipeUpdate = movieLinks.backup[language]===null ? '$set' : '$push';

                backup.update.push({
                    servidor: selected.numero,
                    nome_servidor: selected.nome,
                    qualidade: quality,
                    link: backupLink
                })
                backup.add.push({
                    themoviedb: idThemovie,
                    servidor: selected.numero,
                    nome_servidor: selected.nome,
                    idioma: language,
                    link: backupLink,
                    tipo_link: 'backup',
                    qualidade: quality,
                    api: {}
                })
            }
        })

        const update = {};

        if(stream.update.length!==0){
            if(update[`${stream.tipeUpdate}`]===undefined){
                update[`${stream.tipeUpdate}`] = {};
            }
            update[`${stream.tipeUpdate}`][`stream.${language}`] = stream.update;
        }
        if(download.update.length!==0){
            if(update[`${download.tipeUpdate}`]===undefined){
                update[`${download.tipeUpdate}`] = {};
            }
            update[`${download.tipeUpdate}`][`download.${language}`] = download.update;
        }
        if(backup.update.length!==0){
            if(update[`${backup.tipeUpdate}`]===undefined){
                update[`${backup.tipeUpdate}`] = {};
            }
            update[`${backup.tipeUpdate}`][`backup.${language}`] = backup.update;
        }

        await Movie.updateOne(filter, update);
        await LinksMovies.insertMany([...stream.add, ...download.add, ...backup.add]);
        res.status(205).json({stream: {[language]: stream.update}, download: {[language]: stream.update}, backup: {[language]: stream.update}});
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