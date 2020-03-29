const mongoose = require('mongoose');
require('../models/user');

const User = mongoose.model('Users');

module.exports = {
    register: async (req, res) => {
        try {
            const user = await new User(req.body).save();

            return res.status(201).json()
        } catch (err) {
            return res.status(400).json({error: err.message})
        }
    }
}