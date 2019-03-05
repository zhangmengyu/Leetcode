/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let temp,
    n = matrix.length;
  matrix.map(arr => arr.reverse());
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][n - i - 1];
      matrix[n - j - 1][n - i - 1] = temp;
    }
  }
  return matrix;
};
console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
console.log(rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]))