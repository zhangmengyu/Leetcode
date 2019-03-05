/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (arr[temp] !== undefined) return [arr[temp], i];
    arr[nums[i]] = i;
  }
};
console.log(twoSum([2, 5, 5, 12], 14));
console.log(twoSum([2, 5, 5, 11], 10));