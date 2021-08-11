const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly tests', () =>  {

  it("returns an object where { 1: 5 } for the array of numbers given", () => {
    assert.deepEqual(countOnly([1, 2, 3, 1, 4, 1, 6, 7, 1, 1], { 1: true }), { 1: 5 });
  });

  it("returns an object of the correct counts for the names array and items to count", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), 
    {
      Jason: 1,
      Fang: 2
    }
    );

  });

  it("returns an empy object when no specified items to count", () => {
    assert.deepEqual(countOnly([1, 2, 3, 1, 4, 1, 6, 7, 1, 1], { }), { });
  });

});