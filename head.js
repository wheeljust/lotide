const head = function(arr) {
  if (arr.length < 1) {
    return  undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;