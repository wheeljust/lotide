/** Middle returns the element(s) in the middle of an array
 * For arrays with an even number length, middle will return 2 numbers
 * For arrays with an odd number length, middle will return 1 number
 * For arrays with 2 or fewer elements, there is no middle, so function returns empty array []
 */

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
    return middleArr;
  } 
  
  middleIndex = Math.floor(length / 2);
  middleArr.push(arr[middleIndex]);
  return middleArr;
};

module.exports = middle;
