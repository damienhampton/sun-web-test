function renderer(header, data){
    return `
    <html>
    <body>
        <h1>${header}</h1>
        <ul>
        ${data.teasers.map(t => `<li>${t.title}</li>`)}
        </ul>
    </body>
    </html>
    `;
}

module.exports = {
    renderer
}
