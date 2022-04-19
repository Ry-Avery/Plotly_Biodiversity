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

var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(num){
    return num * 2;
});
//console.log(doubled);
// Skill Drill 12.2.1
var numbers = [0, 2, 4, 6, 8];
var addFive = numbers.map(function(num){
    return num + 5;
});
//console.log(numbers);
//console.log(addFive);

var numbers = [1, 2, 3, 4, 5];
var larger = numbers.filter(num => num > 1);
//console.log(larger);
// Skill Drill 12.2.1
var words = ['Seal', 'Dog', 'Scorpion', 'Orangutan', 'Salamander'];
var firstLetterS = words.filter(word => word[0] == 'S');
//console.log(firstLetterS);

var familyAge = [3, 2, 39, 37, 9];
sortedAge = familyAge.sort((a, b) => b - a);
//console.log(sortedAge);

var integers = [0, 1, 2, 3, 4, 5];
var slice1 = integers.slice(0, 2);
//console.log(slice1);
// Skill Drill 12.2.1
var words = ['Seal', 'Dog', 'Scorpion', 'Orangutan', 'Salamander'];
var wordSlice = words.slice(0, 3);
console.log(wordSlice);