const express = require('express');
const routes = express();
const {errors} = require('celebrate');

const SeassonRoute = require('./SeassonRoute');
const SearchRoute = require('./SearchRoute');
const MovieRoute = require('./MovieRoute');
const DomainRoute = require('./DomainRoute');
const UserRoute = require('./UserRoute');


routes.use(SeassonRoute)
routes.use(SearchRoute);
routes.use(MovieRoute);
routes.use(DomainRoute);
routes.use(UserRoute);



routes.use(errors());
routes.use((req, res) => {
    res.status(404).json({error: "Sorry, this route don't exist!"})
});
module.exports = routes;