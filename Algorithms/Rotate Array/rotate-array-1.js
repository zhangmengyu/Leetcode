/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let temp;
  for (let i = 1; i <= k; i++) {
    temp = nums[nums.length - 1];
    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = temp;
  }
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));