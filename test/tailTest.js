const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail tests', () =>  {

  it('returns [2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['Light', 'House', 'Labs'] for ['Whoops', 'Light', 'House', 'Labs']", () => {
    assert.deepEqual(tail(['Whoops', 'Light', 'House', 'Labs']), ['Light', 'House', 'Labs']);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

});
