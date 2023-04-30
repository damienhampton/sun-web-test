const { getSport } = require('../data/sport');
function sport(req, res, next){
    req.dataLoader = getSport;
    next();
}

module.exports = {
    sport
}
