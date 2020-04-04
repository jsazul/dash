const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    themoviedb: {
      type: String,
      required: true
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
    stream: {
      type: Object,
      default: {dublado: null, legendado: null, nacional: null}
    },
    download: {
      type: Object,
      default: {dublado: null, legendado: null, nacional: null}
    },
    file: {
      type: Object,
      default: {dublado: null, legendado: null, nacional: null, original: null}
    },
    backup: {
      type: Object,
      default: {dublado: null, legendado: null, nacional: null, original: null}
    },
    torrent: {
      type: Object,
      default: {dublado: null, legendado: null, nacional: null, dual: null}
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