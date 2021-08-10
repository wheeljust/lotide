// Function returns an object indicating the number of times each letter appears in the string argument

const countLetters = function(str) {
  const results = {};
  const upperCaseStr = str.toUpperCase();

  for (const letter of upperCaseStr) {
    if (letter !== ' ') {
      results[letter] ? results[letter] += 1 : results[letter] = 1;
    }
  }

  return results;
};

module.exports = countLetters;