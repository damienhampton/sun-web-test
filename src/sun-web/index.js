const { getHeader } = require('../data/header');

function sunWebMiddleware(req, res, next){
    const data = req.dataLoader();
    const { header } = getHeader();

    res.send(`
    <html>
    <body>
        <h1>${header}</h1>
        <ul>
        ${data.teasers.map(t => `<li>${t.title}</li>`)}
        </ul>
    </body>
    </html>
    `);
}

module.exports = {
    sunWebMiddleware
}
