const assert = require('chai').assert;
const without = require('../without');

describe('#without tests', () =>  {

  it('returns [2, 3] when asked to remove 1 and 4 from the source array', () => {
    const startArr = [1, 2, 1, 3, 1, 4 ];
    const toRemove = [1, 4];
    const actual = without(startArr, toRemove);
    const expected = [2, 3];
    
    assert.deepEqual(actual, expected);
  });

  it("returns ['hello', 'world'], when asked to remove ['lighthouse']", () => {
    const words = ["hello", "world", "lighthouse"];
    const actual = without(words, ['lighthouse']);
    const expected = ['hello', 'world'];
    
    assert.deepEqual(actual, expected);
  });

});