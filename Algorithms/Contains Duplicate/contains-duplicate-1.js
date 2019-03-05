/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = new Object();
  let i;
  for (i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      break;
    } else {
      obj[nums[i]] = i;
    }
  }
  if (i == nums.length) {
    return false;
  } else {
    return true;
  }
};
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))