/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) > -1 && res.indexOf(nums1[i]) == -1) res.push(nums1[i]);
  }
  return res;
};
console.log(intersection([2, 1], [1, 2]))
console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))