// JavaScript Arrays: Properties, Methods, and Manipulation - part 1
var string1 = "Test";
var object1 = {'name': 'test'};
var array1 = [0, 1, 2, 3, 4, 5];

var testString = Array.isArray(string1);
var testObj = Array.isArray(object1);
var testArray = Array.isArray(array1);

console.log(testArray);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayLen;
console.log(array2.length);

var sum = 0;
for (var i = 0; i < array2.length; i++)
    sum += array2[i];
console.log(sum);

var array3 = [1, 2, 3, 4, 5, 3, 4, 3, 1];

var indexOfThree = array3.indexOf(3);
console.log(indexOfThree);
console.log(array3.indexOf(3, 3));
console.log(array3.lastIndexOf(3));
console.log(array3.lastIndexOf(3, 6));
console.log(array3.indexOf(0));

var array4 = [1, 2, 3];
array4.push(4);
console.log(array4);
array4.push(5);
console.log(array4);
array4.pop();
console.log(array4);

var array5 = [1, 2, 3];
array5.unshift(0);
console.log(array5);
array5.shift();
console.log(array5);