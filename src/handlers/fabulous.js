const { getFabulous } = require("../data/fabulous");

function fabulous(req, res, next){
    req.dataLoader = getFabulous;
    next();
}

module.exports = {
    fabulous
}
