var array17 = [1, 2, 3, 4, 5];

function addValues(previous, current, index, array) {
    return previous + current;
}

var result17 = array17.reduce(addValues);
var array18 = ['a', 'b', 'c', 'd', 'e'];
var result18 = array18.reduce(addValues);
var result19 = array18.reduceRight(addValues);

console.log(result17);
console.log(result18);
console.log(result19);

var array19 = [
    {
        name: 'Corey',
        age: 28
    },
    {
        name: 'John',
        age: 52
    },
    {
        name: 'Steve',
        age: 36
    }
];

function totalAge(previous, current) {
    return previous + current.age;
}

var resultAge = array19.reduce(totalAge, 0);
// the second parameter is sent as initial value of previous, since previous.age is not always a number
// every time take care of what are going to be previous and current values
console.log(resultAge);