const mongoose = require('mongoose');

const TvShowSchema = new mongoose.Schema({
    themoviedb: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      default: 'serie'
    },
    ano: {
        type: Number,
        required: true
    },
    banner: {
        type: String,
        default: null
    },
    capa: {
        type: String,
        default: null
    },
    categoria: {
        type: Array,
        select: false,
        default: []
    },
    descricao: {
      type: String,
      default: ''
    },
    nome: {
      type: String,
      required: true
    },
    nome_original: {
      type: String,
      required: true
    },
    trailer: {
      type: String,
      default: null
    },
    temporada: {
      type: Object,
      default: {}
    },
    user: {
      type: String,
      required: true
    },
    publicacao: {
      type: Date,
      default: new Date()
    }
});
module.exports = mongoose.model('TvShow', TvShowSchema, 'conteudo');