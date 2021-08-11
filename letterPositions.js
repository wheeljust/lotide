/** Returns an object with arrays of all of the index positions for each character in a given string */

const letterPositions = function(str) {
  const results = {};
  const casedStr = str.toUpperCase();

  for (let i = 0; i < casedStr.length; i++) {
    if (casedStr[i] !== ' ') {
      if (results[casedStr[i]]) {
        results[casedStr[i]].push(i);
      } else {
        results[casedStr[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;