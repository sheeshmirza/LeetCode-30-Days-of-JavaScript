var map = function (arr, fn) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(fn(arr[i], i, arr));
  }
  return resultArray;
};