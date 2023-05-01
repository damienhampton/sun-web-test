const { getSport } = require('../data/sport');
const { transformSport } = require("../transformers/sport");
function sport(req, res, next){
    req.dataLoader = getSport;
    req.transform = transformSport;

    next();
}

module.exports = {
    sport
}
