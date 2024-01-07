var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sliced = array1.slice(2, 5);
console.log(sliced);
sliced = array1.slice(-3);
console.log(sliced);
sliced = array1.slice(-3, -2);
console.log(sliced);

var array2 = ['And', 'Or', 'Nor', 'Not'];
var deleted;

// deleting
deleted = array2.splice(2, 1);
console.log(deleted);

// adding
deleted = array2.splice(2, 0, ['Xor', 'X', 'Y']);
console.log(deleted);
console.log(array2);

// overwriting
deleted = array2.splice(2, 1, 'Zero');
console.log(array2);