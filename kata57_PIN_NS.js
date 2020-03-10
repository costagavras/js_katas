// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw 
// could actually be another adjacent digit (horizontally or vertically, but not diagonally). 
// E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

const getPINs = observed => {

}

// all combinations (but not permutations)
const combinations = s => {
  if (s.length == 1) return; 
  const ss = combinations(s.slice(1)) // All the combinations without the first char:
  return [...ss.map(ch => s[0] + ch), ...ss]; // Return both those with and those without the first char
}

// const combinations = (s) => s.length == 1 
//     ? ['', s] 
//     : (ss=combinations(s.slice(1)), 
//        [...ss.map(ch => s[0] + ch), ...ss])

console.log(combinations("124"));