/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var arr = [];
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      nums[i] + nums[j] === target ? arr.push(i, j) : null;
    }
  }
  return arr;
};
console.log(twoSum([2, 5, 5, 12], 14));

/* var twoSum = function (nums, target) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    for (j = nums.length - 1; j > i; j--) {
      if (nums[i] + nums[j] === target) {
        arr.splice(0, 0, i, j);
        break;
      }
    }
  }
  return arr;
}; */