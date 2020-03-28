const express = require('express');

const MovieRoute = express.Router();

const teste = (req, res) => {
    res.status(200).json({code: req.params})
};


MovieRoute.get('/movie/', teste);
MovieRoute.post('/movie/', teste);

MovieRoute.get('/movie/:idThemovie', teste);
MovieRoute.delete('/movie/:idThemovie', teste);
MovieRoute.put('/movie/:idThemovie', teste);


MovieRoute.get('/movie/:idThemovie/link/', teste);
MovieRoute.post('/movie/:idThemovie/link/', teste);
MovieRoute.delete('/movie/:idThemovie/link/:linkCode/', teste);
MovieRoute.put('/movie/:idThemovie/link/:linkCode/', teste);

module.exports = MovieRoute;