const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

//TEST CODE
assertArraysEqual(tail([1,2,3,4]), [2, 3, 4]);
assertArraysEqual(tail(['Whoops', 'Light', 'House', 'Labs']), ['Light', 'House', 'Labs']);
