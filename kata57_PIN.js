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

// const getPINs = observed => {
  //   let result = [];
  //   if (observed.length  === 1) return options[observed];
  //   let arrLen = options[observed[0]].length;
  //     for (let i = 0; i < arrLen; i++) {
  //       // console.log(`looped item: ${options[observed[0]][i]}`);
  //       // console.log(`result: ${result}`);
  //       result.push(getPINs(observed.slice(1)).reduce((a, b) => a + options[observed[0]][i] + b,[]));
  //     }
  //     return Array.from(new Set(result.join``.match(/(...)/g)));
  // }

// const options = {
//   "1": ['1','2','4'],
//   "2": ['1','2','3','5'],
//   "3": ['2','3','6'],
//   "4": ['1','4','5','7'],
//   "5": ['2','4','5','6','8'],
//   "6": ['3','5','6','9'],
//   "7": ['4','7','8'],
//   "8": ['5','7','8','9','0'],
//   "9": ['6','8','9'],
//   "0": ['8','0']
// }

// const getPINs = observed => {
//   let aResult = [];
//   if (observed.length  === 1) return options[observed];
//   options[observed[0]].forEach(el1 => {
//     let sNewObserved = getPINs(observed.slice(1));
//     sNewObserved.forEach(el2 => aResult.push(el1 + el2));
//   })
//   return aResult;
// }

// var adj = [[0,8],
//            [1,2,4],
//            [2,1,3,5],
//            [3,2,6],
//            [4,1,5,7],
//            [5,2,4,6,8],
//            [6,3,5,9],
//            [7,4,8],
//            [8,0,5,7,9],
//            [9,6,8]];
// var getPINs = observed => adj[observed[0]]
//   .map(x => observed.length == 1 ? [x.toString()] : getPINs(observed.slice(1)).map(y => x + y)) // map joins and reduce concatenates
//   .reduce((x,y) => {
//     console.log(`x: ${x}, y: ${y}`)
//    return x.concat(y);
//   });


// function getPINs(observed) { 
//   const pins = [];
//   const substitutions = [
//   ["8"],
//   ["2","4"],
//   ["1", "3", "5"],
//   ["2", "6"],
//   ["1", "5", "7"],
//   ["2", "4", "6", "8"],
//   ["3", "5", "9"],
//   ["4", "8"],
//   ["5", "7", "9", "0"],
//   ["6", "8"]
//   ];

//   let newPin = observed;
//   pins.push(newPin);
  
//   let index = 0;
//   for (const digit of observed) { // '10'
//     const alternativeDigits = substitutions[digit]; // substitutions['1'];
//     console.log(`alternativeDigits: ${alternativeDigits}`)
//     const currentBranch = [...pins]; // ['10']; to string
//     console.log(`currentBranch: ${currentBranch}`)
//     for (const currentPin of currentBranch) {
//       const startSlice = currentPin.substring(0,index);
//       const endSlice   = currentPin.substring(index+1);
//       console.log(`startSlice/endSlice: ${startSlice}/${endSlice}`)
//       for(const alternativeDigit of alternativeDigits) {
//         console.log(`alternativeDigit: ${alternativeDigit}`)
//         newPin = startSlice+alternativeDigit+endSlice;
//         pins.push(newPin);
//         console.log(`pins: ${pins}`)
//       }
//     }
//     index++;
//     console.log(`index: ${index}`)
//   }
//   return pins;
// }

// const a = ['08', '124', '1235', '236', '1457', '24568', '3569', '478', '57890', '689'];
// const getPINs = p = o => o.length ? p(o.slice(1)).reduce((r, c) => r.concat(a[o[0]].split('').map(x => x + c)), []) : [''];

// function getPINs(observed) {
//   const digits = {
//     "0": ["8", "0"],
//     "1": ["1", "2", "4"],
//     "2": ["1", "2", "3", "5"],
//     "3": ["2", "3", "6"],
//     "4": ["1", "4", "5", "7"],
//     "5": ["2", "4", "5", "6", "8"],
//     "6": ["3", "5", "6", "9"],
//     "7": ["4", "7", "8"],
//     "8": ["5", "7", "8", "9", "0"],
//     "9": ["6", "8", "9"]
//   }
//   return [...observed]
//     .map(m => digits[m]) // [1,2,4],[8,0]
//     .reduce((acc, curr) => acc.length <= 0 ? curr : acc.map(n => curr.map(num => n + num)).reduce((a,c) => a.concat(c)),[])
// }    // [1,2,4]

// const adjacent = [[8,0],[1,2,4],[1,2,3,5],[2,3,6],[1,4,5,7],[2,4,5,6,8],[3,5,6,9],[4,7,8],[5,7,8,9,0],[6,8,9]];
// const getPINs = observed => observed[1] ? [].concat(...getPINs(observed.slice(1)).map(n=>adjacent[observed[0]].map(d=>d+n))) : adjacent[observed[0]].map(d=>d+'');

// let map = {1:['1','2','4'],     2:['1','2','3','5'],     3:['2','3','6'],
//            4:['1','4','5','7'], 5:['2','4','5','6','8'], 6:['3','5','6','9'],
//            7:['4','7','8'],     8:['5','7','8','9','0'], 9:['6','8','9'],
//                                 0:['8','0']
//           }
// function getPINs(observed, i=0) {
//   if(i===observed.length)return [observed];
//   let lst = [];
//   for(let dgt of map[observed[i]]) lst.push(...getPINs(observed.slice(0,i)+dgt+observed.slice(i+1), i+1))
//   return lst;
// }

// console.log(getPINs('10'));
