/** Returns a new array without the values specified in the itemsToRemove array, this is similar to the array method reject */

const without = function(source, itemsToRemove) {
  const newArr = [];
  for (const elm of source) {
    let noMatches = true;
    for (const item of itemsToRemove) {
      if (elm === item) {
        noMatches = false;
      }
    }
    if (noMatches) {
      newArr.push(elm);
    }
  }
  return newArr;
};

module.exports = without;