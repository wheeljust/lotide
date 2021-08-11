const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten tests', () =>  {

  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    
    assert.deepEqual(actual, expected);
  });

  it('returns [1, 2] for [ [[[[1]]]], [[[2]]] ]', () => {
    const actual = flatten([[[[[1]]]],[[[2]]]]);
    const expected = [1, 2];
    
    assert.deepEqual(actual, expected);
  });

  it('returns [] for [[[[]]]]]', () => {
    const actual = flatten([[[[]]]]);
    const expected = [];
    
    assert.deepEqual(actual, expected);
  });

});
