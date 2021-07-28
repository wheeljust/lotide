const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// This function does not support comparing objects containing keys that are assigned as objects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    // Check if the corresponding object keys are both arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if they are indeed both arrays, run eqArrays. eqArrays will return true if they are equal.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // We know at this point they must be primitive data type, or there could be a case where one is primitive and one is an array, in which case the check below will return false (array !== num/str/boolean)
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};


// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: 2 };
assertEqual(eqObjects(cd, cd2), false);