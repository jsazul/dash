const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    themoviedb: {
      type: String,
      required: true,
      unique: true
    },
    tipo: {
      type: String,
      default: 'filme'
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
    user: {
      type: String,
      required: true
    },
    publicacao: {
      type: Date,
      default: new Date()
    }
});
module.exports = mongoose.model('Movie', MovieSchema, 'conteudo');