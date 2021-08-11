const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');


module.exports = {
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  map: map,
  without: without,
  takeUntil: takeUntil,
  countLetters: countLetters,
  letterPositions: letterPositions,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,

};