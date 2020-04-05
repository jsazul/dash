const mongoose = require('mongoose');
const generateToken = require('../utils/generateToken');

require('../models/user');

const User = mongoose.model('Users');

module.exports = {
    index: async (req, res) => {
        const {page = 1} = req.query,
            userType = req.userType,
            perPage = 24;

        if(userType!==1)
            return res.status(401).json({err: 'access denied'})

        const filter = {};

        const count = await User.countDocuments(filter);
        res.header('X-Total-Count', count);
        res.header('X-Per-Page', perPage);

        if(count===0)
            return res.status(204).json([]);

        const movies = await User.find(filter, {__v: false, pass: false}).sort({publicacao: -1}).skip((page-1)*perPage).limit(perPage);
        const moviesParse = JSON.parse(JSON.stringify(movies));

        res.status(200).json(moviesParse)
    },
    update: async (req, res) => {
        const {userId} = req.params,
            content = req.body,
            userType = req.userType;
        
        if(userType!==1)
            return res.status(400).json({err: 'access denied'})

        const filter = {_id: userId};

        const movie = await User.updateOne(filter, content);
        
        if(movie.n===0)
            return res.status(400).json({err: 'not found'})
        
        content.user = undefined;

        res.status(200).json(content);
    },
    register: async (req, res) => {
        const body = req.body,
            userBody = body.user.toLowerCase();

        try {
            if(await User.findOne({user: userBody}))
                return res.status(400).json({statusCode: 400, error: "Bad Request", message: "\"user\" already in use", validation: { source: "body", keys: [ "user"]}})

            const user = await new User(req.body).save();
            user.pass = undefined;
            user.__v = undefined;

            return res.status(201).json({
                user,
                token: generateToken({id: user._id, type: user.type, user: user.user})
            })
        } catch (err) {
            return res.status(400).json({error: err.message})
        }
    }
}