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

const letterPositions = function(str) {
  const results = {};
  const casedStr = str.toUpperCase();

  for (let i = 0; i < casedStr.length; i++) {
    if (casedStr[i] !== ' ') {
      if (results[casedStr[i]]) {
        results[casedStr[i]].push(i);
      } else {
        results[casedStr[i]] = [i];
      }
    }
  }

  return results;
};


// Test code
assertArraysEqual(letterPositions('hello').H, [0]);
assertArraysEqual(letterPositions('hello').E, [1]);
assertArraysEqual(letterPositions('hello').L, [2, 3]);
assertArraysEqual(letterPositions('hello').O, [4]);