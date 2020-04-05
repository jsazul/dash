const {errors} = require('celebrate');
const authMiddlewares = require('../middlewares/auth');

const SessionRoute = require('./SessionRoute');
const SearchRoute = require('./SearchRoute');
const MovieRoute = require('./MovieRoute');
const TvShowRoute = require('./TvShowRoute');
const DomainRoute = require('./DomainRoute');
const UserRoute = require('./UserRoute');

module.exports = app => {
    app.use('/session', SessionRoute)
    app.use('/user', UserRoute);
    
    app.use('/search', authMiddlewares, SearchRoute);
    app.use('/movie', authMiddlewares, MovieRoute);
    app.use('/tvshow', authMiddlewares, TvShowRoute);
    app.use(DomainRoute);
    
    app.use(errors());
    app.use((req, res) => {
        res.status(404).json({error: "Sorry, this route don't exist!"})
    });
}