const express = require('express');
const routes = express();
const {errors} = require('celebrate');
const SessionValidator = require('../validator/SessionValidator');

const SessionRoute = require('./SessionRoute');
const SearchRoute = require('./SearchRoute');
const MovieRoute = require('./MovieRoute');
const DomainRoute = require('./DomainRoute');
const UserRoute = require('./UserRoute');


routes.use(SessionRoute)
routes.use(UserRoute);

routes.use(SessionValidator.validation);






routes.use(SearchRoute);
routes.use(MovieRoute);
routes.use(DomainRoute);



routes.use(errors());
routes.use((req, res) => {
    res.status(404).json({error: "Sorry, this route don't exist!"})
});
module.exports = routes;