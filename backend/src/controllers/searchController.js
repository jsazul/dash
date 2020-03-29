const mongoose = require('mongoose');

module.exports = {
    index: async (req, res) => {
        res.send({ok: true, user: req.userId})
    }
}