const express = require('express');
const { fabulous } = require('./handlers/fabulous');
const { sport } = require('./handlers/sport');
const { sunWebMiddleware } = require("./sun-web/index");

const app = express();

const routes = [
    {
        path: '/fabulous',
        handler: fabulous,
    },
    {
        path: '/sport',
        handler: sport,
    },
]

routes.forEach(({ path, handler }) =>
    app.get(path, handler, sunWebMiddleware));

app.listen(3000);
