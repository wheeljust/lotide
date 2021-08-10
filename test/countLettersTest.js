const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters tests', () =>  {

  it("returns the correct counts for the string case insensitive 'HeLlo'", () => {
    assert.deepEqual(countLetters('HeLlo'), {H: 1, O: 1, L: 2, E: 1,});
  });

  it("returns the correct counts for the string 'How Are You'", () => {
    assert.deepEqual(countLetters('How Are You'), {H: 1, O: 2, W: 1, A: 1, R: 1, E: 1, Y: 1, U: 1});
  });

  it("returns {E: 9} when given a string of the same letter with different case 'EeEE eEe EE'", () => {
    assert.deepEqual(countLetters('EeEE eEe EE'), {E: 9,});
  });

  it("returns {} when given an empty string '' ", () => {
    assert.deepEqual(countLetters(''), {});
  });

});
