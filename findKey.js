// Return the key in the first instance where the key-value matches the requirement of the call back function, if no matching value is found then return undefined.

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;