const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects tests', () =>  {

  it('returns true for two objects with same key-values (numbers)', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    
    assert.isTrue(eqObjects(ab, ba));
  });

  it('returns true for two objects with same key values that have arrays', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    
    assert.isTrue(eqObjects(cd, dc));
  });

  it('returns false for two objects with different number of keys', () => {
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };
    
    assert.isFalse(eqObjects(ba, abc));
  });


  it('returns true for two objects with nested objects', () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('returns true for two objects with nested objects which have nested arrays as well', () => {
    const obj1 = { a: { z: 1, x: { i: [6, 7] } }, b: 2 };
    const obj2 = { a: { z: 1, x: { i: [6, 7] } }, b: 2 };
    
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('returns false for two objects with nested objects that do not match', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    
    assert.isFalse(eqObjects(obj1, obj2));
  });

  it('returns true for two empty objects', () => {
    assert.isTrue(eqObjects({}, {}));
  });

});