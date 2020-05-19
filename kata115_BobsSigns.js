// =================== Bob's Signs ======================

// const SignMaster = function() {
//   this.addSign = 0;
//   this.remSign = 0;
//   this.diff = {add: 0, rem: 0};
// };

// SignMaster.prototype.changePrices = function(prices = {add: 0, rem: 0}) {
//   this.addSign = prices.add;
//   this.remSign = prices.rem;
//   console.log(`addSign: ${this.addSign}`)
//   console.log(`remSign: ${this.remSign}`)
// };

// SignMaster.prototype.estimatePrice = function(oldSign, newSign) {
//   console.log(oldSign);
//   console.log(newSign);
//   let strOldNew, aOldNew = [[]], iKeepedChars = 0;

//   strOldNew = [...oldSign].reduce((acc,val) => {
//     if (newSign.includes(val)) {
//       let filterOpt = [...newSign].map((el,idx) => el === val ? idx : -1 ).filter(item => item >= 0);
//       console.log(filterOpt);
//       if (filterOpt.length === 1) {
//         aOldNew.sort((a,b) => a[a.length-1] - b[b.length-1]);
//         for (let j = 0; j < aOldNew.length; j++) {
//           aOldNew[j].push(filterOpt[0]);
//           console.log('filterOptLength1: ', aOldNew);
//         }
//       } else {
//         let aOldNewDeepCopy = [];
//         for (let m = 0; m < filterOpt.length - 1; m++) {
//           aOldNewDeepCopy[m] = JSON.parse(JSON.stringify(aOldNew)); // deep copy
//         }
//         console.log('temp: ', aOldNewDeepCopy);
//         aOldNew = aOldNew.concat(...aOldNewDeepCopy).sort((a,b) => a[a.length-1] - b[b.length-1]);
//         console.log('aOldNew after sort: ', aOldNew);
//         for (l = 0; l < aOldNew.length; l++) {
//             aOldNew[l].push(filterOpt[l % filterOpt.length]);
//             console.log('aOldNew after push: ', aOldNew);
//         }
//       }
//       return acc + val;
//     } else {
//       return acc;
//     }
//   },'')

//   // console.log(strOldNew, aOldNew);
//   if (strOldNew.length === 0) return 0;
  
//   const findSequence = arr => {
//     if (arr.length === 1) return 1;
//     let lengths = new Array(arr.length).fill(1);
//     for (let base = 1; base < arr.length; base++) {
//       for (let curr = 0; curr < base; curr++) {
//         let currLength = lengths[curr] + 1;
//         let isLonger = currLength > lengths[base];
//         if (arr[curr] < arr[base] && isLonger) {
//           lengths[base] = currLength;
//         }
//       } 
//     }

//     return Math.max(...lengths);
//   }

//   iKeepedChars = Math.max(...aOldNew.map(arr => findSequence(arr)));
//   console.log(iKeepedChars);

//   let added = newSign.length - iKeepedChars;
//   let removed = oldSign.length - iKeepedChars;
//   // console.log({ add: newSign.length - iKeepedChars, rem: oldSign.length - iKeepedChars });
//   return added * this.addSign + removed * this.remSign;
// };

// =============================================================================================

// var SignMaster = function() {
//   this.prices = {"add": 0, "rem": 0};
// };

// SignMaster.prototype.changePrices = function(prices) {
//   this.prices = prices;
// };

// SignMaster.prototype.estimatePrice = function(oldSign, newSign) {
//   var dp = new Array(oldSign.length + 1);
//   for (var i = 0, n = newSign.length; i <= n; ++i) {
//       dp[i] = new Array(n + 1).fill(0);
//       dp[i][0] = i * (this.prices["add"]);
//   }
//   console.log('dp1: ', dp);
//   for (var j = 0, m = oldSign.length; j <= m; ++j) {
//           dp[0][j] = j * (this.prices["rem"]);
//   }
//   console.log('dp2: ', dp);
//   for (var i = 1, n = newSign.length; i <= n; ++i) {
//       for (var j = 1, m = oldSign.length; j <= m; ++j) {
//           const modify = newSign[i - 1] == oldSign[j - 1]? 0 : this.prices["add"] + this.prices["rem"];
//           dp[i][j] = Math.min(dp[i - 1][j] + this.prices["add"],
//                               dp[i][j - 1] + this.prices["rem"], 
//                               dp[i - 1][j - 1] + modify);
//       }
//   }
//   console.log(dp);
//   return dp[newSign.length][oldSign.length];
// };

// ==================================

// var SignMaster = function() {
//   this.add = 0;
//   this.rem = 0;
// };

// SignMaster.prototype.changePrices = function(prices) {
//   this.add = prices.add;
//   this.rem = prices.rem;
// };

// SignMaster.prototype.estimatePrice = function(oldSign, newSign) {
//   if (!this.add && !this.rem) return 0;
//   var m = oldSign.length, n = newSign.length, d = [];

//   for (var i = 0; i <= m; ++i) {
//     d[i] = [ i * this.rem ];
//     for (var j = 1; j <= n; ++j)
//       d[i][j] = i || j * this.add;
//   }
   
//   console.log(d);
//   for (var j = 1; j <= n; ++j)
//     for (var i = 1; i <= m; ++i)
//       d[i][j] = oldSign[i-1] == newSign[j-1] ? d[i-1][j-1] : Math.min(d[i-1][j] + this.rem, d[i][j-1] + this.add);
  
//   console.log(d)
//   return d[m][n];
// };

// const sign = new SignMaster();

// sign.changePrices({add: 85, rem: 72});

// console.log(sign.estimatePrice('swhmb55pe4k2boc13wh', 'qw8nxf7hz9zdrd7a7orh'));

// =============================

// SignMaster.prototype.estimatePrice = function(oldSign, newSign) {
//   let oOldSign = {}, oNewSign = {};
//   [...oldSign].map(letter => {
//     let i = oOldSign[letter] || 0;
//     oOldSign[letter] = ++i;
//   });
//   [...newSign].map(letter => {
//     let i = oNewSign[letter] || 0;
//     oNewSign[letter] = ++i;
//   });
//   this.diff = Object.keys(oNewSign).reduce((diff, key) => {
//     if (oOldSign[key] === oNewSign[key]) return diff;
//     if (!oOldSign[key]) return { ...diff, add : (diff.add || 0 ) + oNewSign[key] }
//     return oNewSign[key] > oOldSign[key] ?  { ...diff, add : (diff.add || 0) + Math.abs(oNewSign[key] - oOldSign[key]) } : { ...diff, rem : (diff.rem || 0 ) + Math.abs(oOldSign[key] - oNewSign[key]) };
//   }, {});
//   this.diff2 = Object.keys(oOldSign).reduce((diff,key) => {
//       if (!oNewSign[key]) return { ...diff, rem : (diff.rem || 0 ) + oOldSign[key] }
//       return diff;
//   }, this.diff );
//   // return this.test;
//   return (this.diff2.add || 0) * this.addSign + (this.diff2.rem || 0) * this.remSign;
// };

// JohanWiltink===========================

// String.prototype.reduce = Array.prototype.reduce;
// Function.prototype.on = function on(fn) { return (...a) => a.map(fn).reduce(this) ; } ;
// const compare = (v,w) => Number(v>w) - Number(v<w) ;
// const maximumBy = cmp => a => a.reduce( (v,w) => cmp(v,w)>=0 ? v : w ) ;
// const length = a => a.length ;
// const memo = fn => ( cache => n => n in cache ? cache[n] : cache[n] = fn(n) ) ( [] ) ;
// const lcs = memo( x => memo( y =>
//   ! ( x && y ) ? "" :
//   x[0]===y[0] ? x[0] + lcs(x.slice(1))(y.slice(1)) :
//     maximumBy (compare.on(length)) ([ lcs(x.slice(1))(y), lcs(x)(y.slice(1)) ])
// ) );
// const remove = (string,char) => ( i => ~i ? string.slice(0,i) + string.slice(i+1) : string ) ( string.indexOf(char) ) ;
// const diff = (left,right) => right.reduce(remove,left) ;

// class SignMaster {
//   constructor() { Object.assign(this, { add: 0, rem: 0 }); }
//   changePrices({add,rem}) { Object.assign(this,{add,rem}); }
//   estimatePrice(oldSign,newSign) {
//     const toKeep = lcs(oldSign)(newSign);
//     const toRemove = diff(oldSign,toKeep);
//     const toAdd = diff(newSign,toKeep);
//     return this.add * toAdd.length + this.rem * toRemove.length ;
//   }
// }

// =======================================================

// var SignMaster = function() {
//   this.add = 0;
//   this.rem = 0;
// };

// SignMaster.prototype.changePrices = function(prices) {
// this.add = prices['add']
// this.rem = prices['rem'] 
// };

// SignMaster.prototype.estimatePrice = function(oldSign, newSign) {
// if (this.add === 0 && this.rem ===0){
// return 0;
// }
// return getEditDistance (oldSign, newSign, this.add, this.rem); 
// };

// /** the most interesting part:
// * using dynamic algorithm from https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
// * replacing nominal step value 1 with add/rem price values
// * NB! slow recursive version will faild due to timeout!
// */
// function getEditDistance(b, a, add, rem) {
// if (a.length === 0) return b.length; 
// if (b.length === 0) return a.length;

// var matrix = [];
// var i;
// for (i = 0; i <= b.length; i++) {
//  matrix[i] = [i*rem];
// }

// var j;
// for (j = 0; j <= a.length; j++) {
//   matrix[0][j] = j*add;
// }

// for (i = 1; i <= b.length; i++) {
//   for (j = 1; j <= a.length; j++) {
//     if (b.charAt(i-1) == a.charAt(j-1)) {
//       matrix[i][j] = matrix[i-1][j-1];
//     } else {
//       matrix[i][j] = Math.min(matrix[i-1][j-1] + add + rem, // substitution
//                               Math.min(matrix[i][j-1] + add, // insertion
//                                        matrix[i-1][j] + rem)); // deletion
//     }
//   }
// }

// return matrix[b.length][a.length];

// ================================

// class SignMaster {
//   constructor() {
//     this.add = 0;
//     this.rem = 0;
//   }
//   changePrices({add, rem}) {
//     this.add = add;
//     this.rem = rem;
//   }
//   estimatePrice(oldSign, newSign) {
//     let cs = Array.from({length: oldSign.length + 1}, (_, i) => i * this.rem);
//     console.log(cs);
//     let ds = new Array(cs.length);
//     console.log(ds);
//     for (const [j, y] of Array.prototype.entries.call(newSign)) {
//       ds[0] = (j + 1) * this.add;
//       for (const [i, x] of Array.prototype.entries.call(oldSign)) {
//         ds[i + 1] = Math.min(cs[i + 1] + this.add, ds[i] + this.rem, x == y ? cs[i] : Infinity);
//       }
//       [cs, ds] = [ds, cs];
//     }
//     return cs[cs.length - 1];
//   }
// }

// ==================================

function longestCommonSubstringLength(string1, string2) {
  const lengths = [...Array(string1.length + 1)].map(() => Array(string2.length + 1));
  for (let i = 0; i <= string1.length; i += 1) {
    for (let j = 0; j <= string2.length; j += 1) {
      if (i === 0 || j === 0) {
        lengths[i][j] = 0;
        console.log('lengths1: ', lengths);
      } else if (string1[i - 1] === string2[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1;
        console.log('lengths2: ', lengths);
      } else {
        lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
        console.log('lengths3: ', lengths);
      }
    }
  }
  console.log(lengths);
  return lengths[string1.length][string2.length];
}

class SignMaster {
  constructor() {
    this.deleteCost = 0;
    this.insertCost = 0;
  }

  changePrices(prices) {
    if ('rem' in prices) {
      this.deleteCost = prices.rem;
    }
    if ('add' in prices) {
      this.insertCost = prices.add;
    }
  }

  estimatePrice(oldSign, newSign) {
    const longestSubstringLength = longestCommonSubstringLength(oldSign, newSign);
    const insertions = newSign.length - longestSubstringLength;
    const deletions = oldSign.length - longestSubstringLength;
    return (insertions * this.insertCost) + (deletions * this.deleteCost);
  }
}

const sign = new SignMaster();

// sign.changePrices({add: 85, rem: 72});
sign.changePrices({add: 5, rem: 4});

// console.log(sign.estimatePrice('swhmb55pe4k2boc13wh', 'qw8nxf7hz9zdrd7a7orh'));
console.log(sign.estimatePrice('totes', 'oats'));