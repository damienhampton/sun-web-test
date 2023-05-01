function transformFabulous(data){
    return `
    <h2>Fabulous</h2>
    <ul>
        ${data.teasers.map(t => `<li>${t.title}</li>`).join('')}
    </ul>`;
}

module.exports = {
    transformFabulous
}
