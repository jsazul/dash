const mongoose = require('mongoose');

const ProcessarLinksSchema = new mongoose.Schema({
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
    qualidade: {
      type: String,
      required: true
    },
    expira: {
      type: Date,
      default: new Date(),
      select: false
    },
    servidor_original: {
      type: String,
      required: true
    },
    link_original: {
      type: String,
      required: true
    }
});
module.exports = mongoose.model('ProcessarMovies', ProcessarLinksSchema, 'processar_links');