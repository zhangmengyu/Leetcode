/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let isValid = true;
  let obj3 = {},
    obj4 = {},
    obj5 = {};
  for (let i = 0; i < 9; i++) {
    let obj1 = {},
      obj2 = {};
    if (!isValid) break;
    for (let j = 0; j < 9; j++) {
      if ((i === 3 && j === 0) || (i === 6 && j === 0)) {
        obj3 = {};
        obj4 = {};
        obj5 = {};
      }
      if (board[i][j] !== '.') {
        if (obj1[board[i][j]] !== undefined) {
          isValid = false;
          break;
        };
        obj1[board[i][j]] = board[i][j];
        if (i <= 2) {
          if (j <= 2) {
            if (obj3[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj3[board[i][j]] = board[i][j];
          } else if (j > 2 && j <= 5) {
            if (obj4[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj4[board[i][j]] = board[i][j];
          } else {
            if (obj5[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj5[board[i][j]] = board[i][j];
          }
        } else if (i > 2 && i <= 5) {
          if (j <= 2) {
            if (obj3[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj3[board[i][j]] = board[i][j];
          } else if (j > 2 && j <= 5) {
            if (obj4[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj4[board[i][j]] = board[i][j];
          } else {
            if (obj5[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj5[board[i][j]] = board[i][j];
          }
        } else {
          if (j <= 2) {
            if (obj3[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj3[board[i][j]] = board[i][j];
          } else if (j > 2 && j <= 5) {
            if (obj4[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj4[board[i][j]] = board[i][j];
          } else {
            if (obj5[board[i][j]] !== undefined) {
              isValid = false;
              break;
            };
            obj5[board[i][j]] = board[i][j];
          }
        }
      }
      if (board[j][i] !== '.') {
        if (obj2[board[j][i]] !== undefined) {
          isValid = false;
          break;
        };
        obj2[board[j][i]] = board[j][i];
      }
    }
  }
  return isValid;
};
console.log(isValidSudoku([
  [".", ".", ".", "2", ".", ".", "6", ".", "."],
  [".", ".", ".", "1", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", "1", ".", ".", "8"],
  [".", "3", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "9", ".", ".", ".", ".", "3"],
  ["4", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "3", "8", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "4"]
]));
console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
console.log(isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));