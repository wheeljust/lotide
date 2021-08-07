const eqArrays = require('./eqArrays');

const passedMsg = '✅ Assertion Passed';
const failedMsg = '❌ Assertion Failed';

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2) ? passedMsg : failedMsg;
  console.log(result);
};

module.exports = assertArraysEqual;