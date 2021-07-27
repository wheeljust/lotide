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

const middle = function(arr) {
  const length = arr.length;
  const middleArr = [];
  let middleIndex = 0;
  
  if (length < 3) {
    return middleArr;
  }
  
  if (length % 2 === 0) {
    middleIndex = length / 2;
    middleArr.push(arr[middleIndex - 1]);
    middleArr.push(arr[middleIndex]);
  } else {
    middleIndex = Math.floor(length / 2);
    middleArr.push(arr[middleIndex]);
  }

  return middleArr;
};


// Test Code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);