const express = require('express');

const DomainRoute = express.Router();

const teste = (req, res) => {
    res.status(200).json({code: req.params})
};


DomainRoute.get('/domain/', teste);
DomainRoute.post('/domain/', teste);
DomainRoute.patch('/domain/:code_domain/', teste);
DomainRoute.put('/domain/:code_domain/', teste);
DomainRoute.delete('/domain/:code_domain/', teste);

module.exports = DomainRoute;