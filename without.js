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
  const result = eqArrays(arr1, arr2) ? passedMsg : failedMsg;
  console.log(result);
};

const without = function(source, itemsToRemove) {
  const newArr = [];
  for (const elm of source) {
    let noMatches = true;
    for (const item of itemsToRemove) {
      if (elm === item) {
        noMatches = false;
      }
    }
    if (noMatches) {
      newArr.push(elm);
    }
  }
  return newArr;
};


//Test code
const startArr = [1, 2, 1, 3, 1, 4 ];
const toRemove = [1, 4];
const finalArr = [2, 3];
assertArraysEqual(without(startArr, toRemove), finalArr);

//Test code - check that original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


