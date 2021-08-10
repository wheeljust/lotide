const eqObjects = require('./eqObjects');

const passedMsg = '✅ Assertion Passed';
const failedMsg = '❌ Assertion Failed';

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`${passedMsg} ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`${failedMsg} ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;



// // Test Code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);
