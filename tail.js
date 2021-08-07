/** Tail returns a new array that excludes the first element
 *
 * Used a C style for loop because we want to skip over the first element
 */

const tail = function(arr) {
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

module.exports = tail;
