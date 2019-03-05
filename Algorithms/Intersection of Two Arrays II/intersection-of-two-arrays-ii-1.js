/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.indexOf(nums1[i]) > -1) {
        res.push(nums1[i]);
        nums2.splice(nums2.indexOf(nums1[i]), 1);
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.indexOf(nums2[i]) > -1) {
        res.push(nums2[i]);
        nums1.splice(nums1.indexOf(nums2[i]), 1);
      }
    }
  }
  return res;
};
// console.log(intersect([2, 1], [1, 2]))
// console.log(intersect([1, 2], [1, 1]))
// console.log(intersect([1, 2, 2, 1], [2, 2]))
// console.log(intersect([1, 2, 2, 1], [2]))
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
// console.log(intersect([0, 5, 8, 7, 2, 9, 7, 5], [1, 4, 8, 9]))