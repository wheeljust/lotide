const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue tests', () =>  {

  it("returns 'drama' when searching for the value 'The Wire'", () => {
    const actual = findKeyByValue({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, 'The Wire');
    const expected = 'drama';
    
    assert.strictEqual(actual, expected);
  });

  it("returns 'comedy' when searching for the value 'Brooklyn Nine-Nine'", () => {
    const actual = findKeyByValue({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, 'Brooklyn Nine-Nine');
    const expected = 'comedy';
    
    assert.strictEqual(actual, expected);
  });

  it("returns undefined when searching for the value 'The Office'", () => {
    const actual = findKeyByValue({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, 'The Office');
    const expected = undefined;
    
    assert.strictEqual(actual, expected);
  });

});