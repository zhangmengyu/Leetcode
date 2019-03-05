/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x != 0) {
    temp = x % 10;
    x = parseInt(x / 10);
    res = res * 10 + temp;
  }
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
  return res;
};
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))