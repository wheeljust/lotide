const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};


//TEST CODE
const testArr = [1,2,3,4];
const result = tail(testArr).toString();
assertEqual(result, '2,3,4');
assertEqual(testArr.toString(), '1,2,3,4');
assertEqual(testArr.length, 4);
