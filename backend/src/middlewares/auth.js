const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    

    if(!authHeader){
        req.userType = 5;
        return next();
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        req.userType = 5;
        return next();
    }

    const [scheme, token] = parts;

    if(!/Bearer$/i.test(scheme))
        return res.status(401).json({error: 'Token malformatted'});

    jwt.verify(token, process.env.HASH_1_SECRET, (err, decoded) => {
        if(err)
            return res.status(401).json({error: 'Token invalid'});

        req.userId = decoded.id;
        req.userType = decoded.type;
        return next();
    })
}