const mongoose = require('mongoose');

const LinksMoviesSchema = new mongoose.Schema({
    themoviedb: {
      type: String,
      required: true,
      unique: true
    },
    tipo: {
      type: String,
      default: 'filme'
    },
    servidor: {
        type: Number,
        required: true
    },
    nome_servidor: {
        type: String,
        default: null
    },
    idioma: {
        type: String,
        required: true,
        enum: ['dublado', 'legendado', 'nacional']
    },
    link: {
      type: String,
      required: true
    },
    tipo_link: {
      type: String,
      required: true,
      enum: ['stream', 'download', 'file', 'backup', 'torrent']
    },
    qualidade: {
      type: String,
      required: true
    },
    api: {
      type: Object,
      required: true,
      default: {}
    },
    data: {
      type: Date,
      default: new Date(),
      select: false
    }
});
module.exports = mongoose.model('LinksMovies', LinksMoviesSchema, 'listar_links');