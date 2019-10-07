// filter()

var array14 = [3, 2, 6, 7, 73, 1];

function numOver(element, index, theArray) {
    return element > 20;
}

function numUnder(element, index, theArray) {
    return element < 15;
}

var filteredArray = array14.filter(numOver);
console.log(filteredArray);
var filteredArray2 = array14.filter(numUnder);
console.log(filteredArray2);

var array15 = [
    {
        name: 'Corey',
        age: 28
    },
    {
        name: 'Shrinidhi',
        age: 20
    },
    {
        name: 'Steve',
        age: 29
    }
];

function ageOver(element) {
    return element.age > 25;
}

var filteredArray3 = array15.filter(ageOver);
console.log(filteredArray3);

// every()

var array16 = [1, 2, 3, 4, 5, 6, 7];

function isEvery(element) {
    return element > 5;
}

var passed = array16.every(isEvery);
console.log(passed);

function allUnder(element) {
    return element.age < 30;
}

var setArray = array15.every(allUnder);
console.log(setArray);

// some()

function someOdd(element) {
    return element % 2 === 1;
}

var passed2 = array16.some(someOdd);
console.log(passed2);

function someAge(element) {
    return element.age > 50;
}

var passed3 = array15.some(someAge);
console.log(passed3);
