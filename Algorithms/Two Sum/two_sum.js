var twoSum = function (nums, target) {
  var arr = [];
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      nums[i] + nums[j] === target ? arr.push(i, j) : null;
    }
  }
  return arr;
};
