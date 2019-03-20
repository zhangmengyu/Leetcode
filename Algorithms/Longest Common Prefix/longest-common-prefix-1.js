/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return "";
  let minLen = Number.MAX_SAFE_INTEGER;
  strs.forEach((str, index) => {
    minLen = Math.min(minLen, str.length);
  })
  let low = 1;
  let high = minLen;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let str1 = strs[0].substring(0, mid);
    let isCommonPrefix = true;
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(str1, 0)) {
        isCommonPrefix = false;
        break;
      }
    }
    isCommonPrefix ? low = mid + 1 : high = mid - 1;
  }
  return strs[0].substring(0, Math.floor((high + low) / 2));
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));