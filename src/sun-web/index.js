const { getHeader } = require('../data/header');
const { renderer } = require("../renderer/renderer");

function sunWebMiddleware(req, res, next){
    const data = req.dataLoader();
    const { header } = getHeader();

    const content = req.transform(data)

    res.send(renderer(header, content));
}

module.exports = {
    sunWebMiddleware
}
