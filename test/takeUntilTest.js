const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil tests', () =>  {

  it('returns [1, 2, 5, 7, 2], function returns once a num < 0 is found', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const actual = takeUntil(data1, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    
    assert.deepEqual(actual, expected);
  });

  it("returns [I've', 'been', 'to', 'Hollywood], function returns once a ',' is found", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const actual = takeUntil(data2, x => x === ',');
    const expected = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    
    assert.deepEqual(actual, expected);
  });

});