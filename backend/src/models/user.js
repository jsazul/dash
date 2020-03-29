const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nickname: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    pass: {
      type: String,
      required: true,
      select: false
    },
    mail: {
        type: String,
        required: true
    },
    domain_default: {
        type: String,
        select: false,
        default: null
    },
    domains: {
        type: Array,
        select: null,
        default: []
    }
});


module.exports = mongoose.model('Users', schema, 'users');