const mongoose = require('mongoose');

const ServidorSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true,
      enum: ['link', 'api']
    },
    numero: {
        type: Number,
        required: true,
        unique: true
    },
    stream: {
        type: Boolean,
        default: false
    },
    stream_dados: {
        type: Object,
        default: null
    },
    download: {
      type: Boolean,
      default: false
    },
    download_dados: {
      type: Object,
      default: null
    },
    file: {
      type: Boolean,
      default: false
    },
    file_dados: {
      type: Object,
      default: null
    },
    backup: {
      type: Boolean,
      default: false
    },
    backup_dados: {
      type: Object,
      default: null
    },
    dominio: {
      type: String,
      required: true
    },
    original_ex: {
      type: String,
      required: true
    }
});
module.exports = mongoose.model('Servidor', ServidorSchema, 'servidores');