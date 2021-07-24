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

const flatten = function(arr) {
  const newArr = [];
  for (const elm of arr) {
    if (Array.isArray(elm)) {
      for (const arg of elm) {
        newArr.push(arg);
      }
    } else {
      newArr.push(elm);
    }
  }
  return newArr;
};


//Test Code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);