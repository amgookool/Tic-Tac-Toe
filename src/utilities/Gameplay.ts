export const WIN_CONDITIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row

  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column

  [0, 4, 8], // top-left to bottom-right diagonal
  [2, 4, 6], // top-right to bottom-left diagonal
];
