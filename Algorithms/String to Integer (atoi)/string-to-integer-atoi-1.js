/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let res = '';
  str = str.replace(/^(\s)+/g, "");
  let reg1 = /^(\-|\+|[0-9])/;
  if (!reg1.test(str)) return 0;
  res += str[0];
  let reg2 = /[0-9]/;
  for (let i = 1; i < str.length; i++) {
    if (!reg2.test(str[i])) break;
    res += str[i];
  }
  res = Number(res);
  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (res < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (!res) {
    return 0;
  } else {
    return res;
  }
};
console.log(myAtoi("+"))
console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("3.14159"))
console.log(myAtoi("   +0 123"))
console.log(myAtoi("-5-"))