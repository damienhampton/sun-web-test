function transformSport(data){
    return `
    <h2>Sport</h2>
    <ul>
        ${data.teasers.map(t => `<li>${t.title}</li>`).join('')}
    </ul>`;
}

module.exports = {
    transformSport
}
