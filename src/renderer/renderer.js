function renderer(header, content){
    return `
    <html>
    <body>
        <h1>${header}</h1>
        <div>${content}</div>
    </body>
    </html>
    `;
}

module.exports = {
    renderer
}
