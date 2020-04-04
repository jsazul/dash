const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
require('../models/user');

const User = mongoose.model('Users');

module.exports = {
    authenticate: async (req, res) => {
        const {body} = req,
            userBody = body.user,
            {pass} = body;

        const user = await User.findOne({user: userBody}).select('+pass');

        if(!user)
        return res.status(400).json({err: 'not user'})

        if(!await bcrypt.compare(pass, user.pass))
            return res.status(400).json({err: 'invalid'})

            user.pass = undefined;
            user.__v = undefined;

        return res.status(200).json({
            user,
            token: generateToken({id: user._id, type: user.type})
        })
    }
}