// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. 
// ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that 
// he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?


// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as 
// parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, 
// all distances are positive or null integers and this list has at least one element). 
// The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, 
// if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. 

// let arrayCombinations = [];
// const result = [];
// const test = 4

// const chooseBestSum = (t, k, ls) => {
//   if (ls.length < k) { return null }
//   const arrayCombinations = [];
//   const singleCombination = [];
//   const towns = k;

//   const combine = (input, len, start) => {
//     if(len === 0) {
//       arrayCombinations.push([...singleCombination]);
//       return;
//     }
//     for (let i = start; i <= input.length - len; i++) {
//       singleCombination[towns - len] = input[i];
//       combine(input, len - 1, i + 1 );
//     }
//     return arrayCombinations;
//   }

//   let allCombinations = combine(ls, k, 0);
//   allCombinations = allCombinations.map(el => el.reduce((a, b) => a + b));
//   allCombinations.push(t);
//   const limitIndex = allCombinations.sort((a, b) => b - a).indexOf(t);
//   return allCombinations[limitIndex+1] || null;
// }

// =======================================

// function chooseBestSum(t, k, ls) {
//   let arr = [];  
    
//   function rec(sum, ar, n) {
//     if (n == 0) {
//       arr.push(sum);
//     } else {
//       for (let i = 0; i < ar.length; i++) {
//         rec(sum+ar[i], ar.slice(i+1), n-1);
//       }
//     }
//   }

//   rec(0, ls, k);
    
//   var sol = arr.sort( (a, b) => b - a).find( a => a <= t);
//   return sol || null;
// }

// ============================================

function chooseBestSum(t, k, ls){
  if (ls.length < k) return null
  const results = [[]]
  for (const value of ls) {
      const copy = [...results]
      for (const prefix of copy) {
          results.push(prefix.concat(value)) // results contains all possible combinations of all lengths
      }
  }
  return results
      .filter((a => a.length && a.length == k ))
      .map(item => item.reduce((a,b) => a + b), 0)
      .filter(item => item <= t)
      .sort((a,b) => b-a)[0] || null
}

// ==================================================
// const chooseBestSum = (distance, towns, options) =>  Math.max(
//   0, ...options.reduce(
//       (list, value) => [...list, ...list.map(prior => [value, ...prior])], [[]] // contains all possible combinations of all lengths
//     ).filter(path => path.length === towns) //
//      .map(paths => paths.reduce((sum, value) => sum + value, 0))
//      .filter(length => length <= distance),
//   ) || null;


// const combinations = (s, i) => {
//   if (s.length === i) return arrayCombinations.push(s); 
//   const i0 = 0;
//   for (let i1 = 1, j = 0; i1 < s.length-1; i1++) {
//     for(let i2 = 2; i2 < s.length; i2++) {
//       if (s[i2+j]) {arrayCombinations.push([s[i0], s[i1], s[i2+j]])};
//     }
//     j++;
//   }
//   combinations(s.slice(1), i);
//   return arrayCombinations;
// }

// combinations of 2
// const getCombinations = ([head, ...tail]) => tail.length > 0 ? [...tail.map(tailValue => [head, tailValue]), ...getCombinations(tail)] : []
// all combinations
const getCombinations = options => {
  return options.reduce((list, value) => [...list, ...list.map(prior => [value, ...prior])], [[]]);
}

console.log(getCombinations([1, 2, 3]));
// const ts = [1, 2, 3];
// console.log(chooseBestSum(5, 2, ts));


// const result = [];
// const test = 2

// const combine = (input, len, start) => {
//   console.log("1st log: " + "input: " + input, "| len: " + len, "| start: " + start);
//   if(len === 0) {
//     console.log("result 1: " + result);
//     // arrayCombinations.push(result) -- this did not work because arrayC. was changing with result changing (copy by ref)
//     arrayCombinations.push([...result]); // spread operator makes a copy of array
//     console.log(arrayCombinations);
//     return;
//   }
//   for (let i = start; i <= input.length - len; i++) {
//     console.log("2nd log: " + "input: " + input, "| len: " + len, "| start: " + start, "| i: " + i);
//     result[test - len] = input[i]; // same result array changes every time
//     console.log("result 2: " + result);
//     combine(input, len - 1, i + 1 );
//   }
//   return arrayCombinations;
// }

// console.log(combine(ts, 2, 0));