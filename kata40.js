// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// const highestRank = (...arr) => {
//   let max = 1;
//   let setMax = new Set();
//   const freq = arr.reduce((acc, it) => {
//     acc[it] = acc[it] + 1 || 1;
//     if (acc[it] > max) {
//       setMax.clear();
//       setMax.add(it);
//       max = acc[it];
//     } 
//     return acc;
//   }, {});
//   return Math.max(...Array.from(setMax.values()));
// }

// function highestRank(arr){
//   return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
// }

// most ingenious solution
const highestRank = (...arr) =>  arr.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  if (acc[cur] > (acc[acc.maxCount] || 0)) { //acc[cur] is bigger than acc[acc.maxCount] or 0
    acc.maxCount = cur;
  }
  console.log(acc);
  return acc;
}, { maxCount: 0 }).maxCount;


console.log(highestRank(12, 10, 8, 12, 7, 6, 4, 10, 10, 12));