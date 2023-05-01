const { getFabulous } = require("../data/fabulous");
const { transformFabulous } = require("../transformers/fabulous");

function fabulous(req, res, next){
    req.dataLoader = getFabulous;
    req.transform = transformFabulous;

    next();
}

module.exports = {
    fabulous
}
