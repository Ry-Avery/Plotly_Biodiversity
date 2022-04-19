var trace = {
    x: ['Beer', 'Wine', 'Martini', 'Margarita', 'Ice Tea', 'Rum & Coke', 'Mai Tai', 'Gin & Tonic'],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter'
};
var data = [trace];

var layout = {
    title: 'Skill Drill 12.1.4',
    xaxis: {title: 'Drinks'},
    yaxis: {title: '% of Drinks Ordered'}
};

Plotly.newPlot('plotlyArea', data, layout);