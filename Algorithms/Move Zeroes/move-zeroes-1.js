/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count + i == nums.length - 1) break;
    if (nums[i] !== 0) continue;
    nums.push(nums[i]);
    nums.splice(i, 1);
    i--;
    count++;
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]))