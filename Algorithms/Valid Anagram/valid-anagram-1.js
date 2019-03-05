/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) === -1) return false;
    t = t.replace(s[i], "");
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("a", "ab"))
console.log(isAnagram("aacc", "ccac"))