/** Applies a callback mapping function to an array, returns the newly mapped array. This is a version of the array method 'map' */

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;