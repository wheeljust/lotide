const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  const upperCaseStr = str.toUpperCase();

  for (const letter of upperCaseStr) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};


// Test code
const countedLetters = countLetters('How Are You World');
assertEqual(countedLetters['H'], 1);
assertEqual(countedLetters['O'], 3);
assertEqual(countedLetters['W'], 2);
assertEqual(countedLetters['R'], 2);