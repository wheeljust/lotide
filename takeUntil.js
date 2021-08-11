/** Takes in an array and returns the elements in order until the stopping condition is met, the stop condition is passed in the form of a callback funtion */

const takeUntil = function(array, callback) {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  
  return result;
};

module.exports = takeUntil;