var array21 = [10, 20, 30, 40, 50];

function addTax(element) {
    return '$' + (element * 1.06).toFixed(2);
}

var mapped = array21.map(addTax);

console.log(mapped);

function toUpper(element) {
    return element.toUpperCase();
}

var array22 = ['an', 'the'];
var mapped2 = array22.map(toUpper);
console.log(mapped2);

function addRevenue(current, index, array) {
    var total = current * 1.06;
    total = Math.round(total * 100) / 100;
    return Number(total.toFixed(2));
}

function sumTotal(previous, current) {
    return previous + current;
}

var mapped3 = array21.map(addRevenue).reduce(sumTotal);

console.log(mapped3);

var result23 = "Please reverse me".split('').reverse().join('');

console.log(result23);