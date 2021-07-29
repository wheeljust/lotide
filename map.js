const passedMsg = '✅ Assertion Passed';
const failedMsg = '❌ Assertion Failed';

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2) ? passedMsg : failedMsg;
  console.log(result);
};

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


// Test Code
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [2, 4, 6, 8];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, number => number * 3), [6, 12, 18, 24]);
assertArraysEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
