const {errors} = require('celebrate');
const sessionValidator = require('../validator/sessionValidator');

const SessionRoute = require('./SessionRoute');
const SearchRoute = require('./SearchRoute');
const MovieRoute = require('./MovieRoute');
const DomainRoute = require('./DomainRoute');
const UserRoute = require('./UserRoute');

module.exports = app => {
    app.use(SessionRoute)
    app.use('/user', UserRoute);
    
    app.use(sessionValidator.validation);
    
    app.use(SearchRoute);
    app.use(MovieRoute);
    app.use(DomainRoute);
    
    app.use(errors());
    app.use((req, res) => {
        res.status(404).json({error: "Sorry, this route don't exist!"})
    });
}