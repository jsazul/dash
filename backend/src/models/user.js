const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
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
    type: {
        type: Number,
        default: 5
    },
    domainDdefault: {
        type: String,
        select: false,
        default: null
    },
    domains: {
        type: Array,
        select: false,
        default: []
    }
});

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.pass, 10)
  this.pass = hash;

  next();
});

module.exports = mongoose.model('Users', UserSchema, 'users');