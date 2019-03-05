/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i]++;
    }
    if (digits[i] > 9) {
      digits[i] = 0;
      i === 0 ? digits.unshift(1) : digits[i - 1]++;
    }
  }
  return digits;
};
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))