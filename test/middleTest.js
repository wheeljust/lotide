const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle tests', () =>  {

  it('ODD NUM LENGTH: returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("EVEN NUM LENGTH: returns ['Light', 'House'] for ['Hi', 'Light', 'House', 'Labs']", () => {
    assert.deepEqual(middle(['Hi', 'Light', 'House', 'Labs']), ['Light', 'House']);
  });

  it('EVEN NUM LENGTH: returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});

// // Test Code
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);