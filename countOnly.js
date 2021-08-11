/** 
 * Funtion returns an object, the object contains the count of each specified parameter in the items to Count argument passed to the function.
 * allItems: an array of strings that we need to look through
 * itemsToCount: an object specifying what to count
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  
  return results;
};

module.exports = countOnly;