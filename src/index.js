// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []
  return [].concat(...matrix.filter((value, key) => (key % 2 !== 0) ? value.sort((a, b) => b - a) : value))
}


/*
// You should implement your task here.

function towelSort (matrix) {
  if (matrix === undefined) return []
  return [].concat(...matrix.filter((value, key) => (key % 2 !== 0) ? value.sort((a, b) => b - a) : value))
}

console.log(towelSort())
// []

console.log(towelSort([
  [1, 2],
  [3, 4],
]))
// 1, 2, 4, 3

console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]))
// 1, 2, 3, 6, 5, 4, 7, 8, 9

console.log(towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]))

// 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13

console.log(towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]))

// 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12

console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
]))

// 1, 2, 3, 6, 5, 4

console.log(towelSort([
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
]))

// 1, 2, 4, 8, 7, 6, 5, 9, 12
*/
