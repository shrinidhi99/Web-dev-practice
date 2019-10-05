// JavaScript Arrays: Properties, Methods, and Manipulation - part 2

// toString()

var array6 = ['This', 1, 'Time'];
var string6 = array6.toString();
console.log(string6);

// forEach()

var array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function timesTen(element, index, array) {
    array[index] = element * 10;
}

console.log(array7);
array7.forEach(timesTen);
console.log(array7);

var array8 = [{name: 'Corey', age: 28}, {name: 'John', age: 52}, {name: 'Steve', age: 36}];

function listPeople(element, index, array) {
    console.log((index + 1).toString() + '\t' + element.name + '\t' + element.age);
}

array8.forEach(listPeople);

// reverse()

array7.reverse();
console.log(array7);

// concat()

array9 = [77, 88, 99];
var arrayConcat = array7.concat(array9);
console.log(arrayConcat);
arrayConcat = arrayConcat.concat(1, 2, 3, ['d', 'e', 'f']);
console.log(arrayConcat);

// join()

var string10 = array9.join('.');
console.log(string10);
var string11 = arrayConcat.join('--');
console.log(string11);
