/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/ig, "");
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) return false;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("0P"))