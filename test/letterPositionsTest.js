const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions tests', () =>  {

  it("returns the correct positions for the string case insensitive 'HeLlo'", () => {
    const actual = letterPositions('HeLlo');
    const expected = {
      H: [0], O: [4], L: [2, 3], E: [1]
    };
    
    assert.deepEqual(actual, expected);
  });

  it("returns the correct positions for the string case insensitive 'WOWWow'", () => {
    const actual = letterPositions('WOWWow');
    const expected = {
      W: [0, 2, 3, 5], O: [1, 4]
    };
    
    assert.deepEqual(actual, expected);
  });

  it("returns {} when given an empty string '' ", () => {
    assert.deepEqual(letterPositions(''), {});
  });

});