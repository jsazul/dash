const express = require('express');

const DomainRoute = express.Router();


DomainRoute.get('/domain/', (req, res) => {
    res.status(200).json({page: 'domain-get'})
});
DomainRoute.post('/domain/', (req, res) => {
    res.status(200).json({page: 'domain-post'})
});
DomainRoute.patch('/domain/:code_domain/', (req, res) => {
    res.status(200).json({page: 'domain-patch'})
});
DomainRoute.put('/domain/:code_domain/', (req, res) => {
    res.status(200).json({page: 'domain-put'})
});
DomainRoute.delete('/domain/:code_domain/', (req, res) => {
    res.status(200).json({page: 'domain-delete'})
});

module.exports = DomainRoute;