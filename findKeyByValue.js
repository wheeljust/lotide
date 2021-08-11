/** Returns the key from the object if the search value matches any of the values in the object.  if no matches, returns undefined. */

const findKeyByValue = function(obj, searchValue) {
  for (const key in obj) {
    if (obj[key] === searchValue) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;