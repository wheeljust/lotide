const assert = require('chai').assert;
const map = require('../map');

describe('#map tests', () =>  {

  it('returns [2, 4, 6] for a map of [1, 2, 3] with callback x * 2', () => {
    const actual = map([1, 2, 3], x => x * 2);
    const expected = [2, 4, 6];
    
    assert.deepEqual(actual, expected);
  });

  it("returns ['g', 'c', 't', 'm', 't'] when mapping the first letter of the phrase given", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word[0]);
    const expected = ['g', 'c', 't', 'm', 't'];
    
    assert.deepEqual(actual, expected);
  });

  it('returns capitalized string mapped from the original string', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word.toUpperCase());
    const expected = ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'];
    
    assert.deepEqual(actual, expected);
  });

});