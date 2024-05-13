var reduce = function (nums, fn, init) {
  let result = init !== undefined ? init : nums[0];
  const startIndex = init !== undefined ? 0 : 1;
  for (let i = startIndex; i < nums.length; i++) {
    result = fn(result, nums[i], i, nums);
  }
  return result;
};