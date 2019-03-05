/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var result = 0;
  var i = 0, j = height.length - 1;
  while (i < j) {
    result = Math.max(result, (j - i) * Math.min(height[i], height[j]));
    height[i] < height[j] ? i++ : j--;
  }
  return result;
};