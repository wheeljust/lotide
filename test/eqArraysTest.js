const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays tests', () =>  {

  it('returns true for two arrays with same numbers', () => {
    assert.isTrue(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]));
  });

  it('returns true for two arrays with same strings', () => {
    assert.isTrue(eqArrays(['Hello', 'World'], ['Hello', 'World']));
  });

  it('returns false for two arrays, one with stings, one with numbers', () => {
    assert.isFalse(eqArrays(['1', '2', 3], ['1', '2', '3']));
  });

  it('returns false for two arrays with mis-matched numbers', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('returns true for two identical arrays, with one level of nested arrays', () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it('returns false for two different arrays, with one level of nested arrays', () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

  it('returns true for two identical arrays, with multiple nested arrays', () => {
    assert.isTrue(eqArrays([[[[[4, 5]]]], [4, [[4, 7]]]], [[[[[4, 5]]]], [4, [[4, 7]]]]));
  });

  it('returns true for two empty arrays', () => {
    assert.isTrue(eqArrays([], []));
  });

});