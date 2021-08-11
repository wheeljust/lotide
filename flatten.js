/** Pass an array to the function that has nested arrays and the function will return an array where there is no nesting.  All of the elements will still be in the array, but in un-nested format */

const flatten = function(arr) {
  const newArr = [];

  for (const elm of arr) {
    if (Array.isArray(elm)) {
      newArr.push(...flatten(elm));
    } else {
      newArr.push(elm);
    }
  }

  return newArr;
};

module.exports = flatten;