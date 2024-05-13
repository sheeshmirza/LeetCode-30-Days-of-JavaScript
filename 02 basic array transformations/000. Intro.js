// MAP
// The map function iterates over each element in an array, applying a user-defined function to transform each element, and returns a new array containing the transformed elements.
Array.prototype.map = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

// FILTER
// The filter function iterates over each element in an array, applying a user-defined function to determine whether the element should be included in the result. It returns a new array containing only the elements that pass the test.
Array.prototype.filter = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      resultArray.push(this[index]);
    }
  }
  return resultArray;
};

// REDUCE
// The reduce function iterates over each element in an array, accumulating a single value by applying a user-defined function to each element and the previous accumulation. An initial value can be provided. The result is a single value.
Array.prototype.reduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let index = startIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
};
