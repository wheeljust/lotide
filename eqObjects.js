const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!(Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) return false;
      } else if (object1[key] !== object2[key]) return false;
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    }
  }

  return true;
};

module.exports = eqObjects;