var array1 = [4, 3, 2, 5, 7, 3, 4, 0];

// sorting array elements

function sortNum(a, b) {
    return a - b;
}

console.log(array1.sort(sortNum));

// sorting strings

var array2 = ['A', 'B', 'D', 'C', 'A'];

function sortAlpha(a, b) {
    var aLower = a.toLowerCase();
    var bLower = b.toLowerCase();
    if (aLower < bLower)
        return -1;
    if (aLower > bLower)
        return 1;
    return 0;
}

console.log(array2.sort(sortAlpha));

// sorting some objects
var array3 = [
    {
        first: 'Joe',
        last: 'Smith'
    },
    {
        first: 'Dan',
        last: 'Smith'
    },
    {
        first: 'Jos',
        last: 'Butler'
    },
    {
        first: 'Jos',
        last: 'A'
    }
];

function sortNames(a, b) {
    var aLower = a.first.toLowerCase();
    var bLower = b.first.toLowerCase();
    var aLast = a.last.toLowerCase();
    var bLast = b.last.toLowerCase();
    if (aLower === bLower) {
        if (aLast < bLast)
            return -1;
        if (aLast > bLast)
            return 1;
    }
    if (aLower < bLower)
        return -1;
    if (aLower > bLower)
        return 1;
    return 0;
}

console.log(array3.sort(sortNames));
