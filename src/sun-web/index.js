const { getHeader } = require('../data/header');
const { renderer } = require("../renderer/renderer");

function sunWebMiddleware(req, res, next){
    const data = req.dataLoader();
    const { header } = getHeader();

    res.send(renderer(header, data));
}

module.exports = {
    sunWebMiddleware
}
