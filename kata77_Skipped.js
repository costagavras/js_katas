

String.prototype.toJadenCase =  function () {
  return this.split` `.map(([a,...b]) => (a[0].toUpperCase()+b.join``)).join` `
}

// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, l => l.toUpperCase());
// };

// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };

// String.prototype.toJadenCase = function() {
//   return this
//     .split` `
//     .map(s => s[0].toUpperCase() + s.slice(1))
//     .join` `;
// };

// const str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase())

// ==========================================================================

// In this kata you will create a function that takes a list of non-negative nums and strings and returns a new list with the strings filtered out.

filter_list = l => l.filter(Number.isFinite)
// filter_list = l => l.filter(Number.isnum)
// filter_list = l => l.filter(e => Number.isnum(e));

// console.log(filter_list([1,'a','b',0,15]));

// const filter_list = l => l.filter(c => typeof c === 'number');

// ============================================================================

// Implement a method that accepts 3 num values a, b, c. The method should return true if a triangle can be built
// with the sides of given length and false in any other case.
// Conditio sine qua non: Triangle Inequality Theorem, the sum of two side lengths of a triangle is always greater than the third side. 
// If this is true for all three combinations of added side lengths, then you will have a triangle

isTriangle = (a,b,c) => a+b>c && a+c>b && b+c>a

// const isTriangle = (a,b,c) => Math.max(a, b, c) < (a + b + c)/2;

// console.log(isTriangle(1,2,2));

// ==============================================================================

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after 
// paying tax 'T' on the interests that were just gained (and only on the interests part).

const calculateYears = (principal, interest, tax, desired) => {
  let year = 0;
  while (principal < desired) {
    year++;
    principal = principal*(1+interest*(1-tax));
  }
  return year;
 }

// console.log(calculateYears(1000,0.01625,0.18,1000));


// function calculateYears(principal, interest, tax, desired) {
//     // your code
//     var years = 0;
//     while(principal < desired){
//       principal += (principal * interest) * (1 - tax);
//       years++;
//     }
//     return years;
// }

// function calculateYears(principal, interest, tax, desired) {
//   return Math.ceil(
//     Math.log(desired / principal) / 
//     Math.log(1 + interest * (1 - tax))
//   );
// }

// ================================================================================

const digPow = (n, p) => {
  let result = (n+'').split``.reduce((acc,curVal, idx) => acc + Math.pow(curVal,p+idx),0)/n;
  return Number.isinteger(result) ? result : -1;
}

// console.log(digPow(92,1));

// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }

// function digPow(n,p){
//   var ps = [...''+n].reduce((s,d,i)=>s+Math.pow(d,p+i),0);
//   return ps%n?-1:ps/n;
// }

// function digPow(n, p) {
//   const sum = (n + '').split``.reduce((a, b, i) => a + Math.pow(b, p + i), 0);
//   return sum % n ? -1 : sum / n;
// }

// ====================================================================================

const longestConsec = (starr, k) => {
  if (starr.length === 0 || k > starr.length || k <=0) return '';
  let result = '', l = 0, maxL = 0;
  for (i = 0; i <= starr.length - k; i++) {
    l = starr.slice(i,k + i).join``.length;
    if (maxL < l) maxL = l, result =  starr.slice(i,k+i).join``;
  }
  return maxResult;
}

// function longestConsec(strarr, k) {
//   let longest = '', i;
//   for (i = 0; k > 0 && i <= strarr.length - k; i++) {
//     let temp = strarr.slice(i, k + i).join('');
//     if (temp.length > longest.length) {
//       longest = temp;
//     }
//   }
//   return longest;
// }

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"],12))

// function longestConsec(strarr, k) {
//   if (k <= 0 || k > strarr.length) {
//     return '';
//   }
  
//   return strarr.reduce((long, item, i) => {
//     const currString = strarr.slice(i, i + k).join('');
//     return (currString.length > long.length) ? currString : long;
//   }, '');
// }

// function longestConsec(strarr, k) {
//   if (k <= 0 || k > strarr.length) {
//     return "";
//   }
  
//   return strarr.map((value, index) => (
//     strarr.slice(index, index+k).join('')
//   ))
//   .reduce((longest, current) => current.length > longest.length ? current : longest)
// }

// =================================================================

const checkCoupon = (eCode, cCode, cDate, eDate) => eCode === cCode && Date.parse(cDate) <= Date.parse(eDate);

// console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));

// ===================================================================== 

const listSquared = (m, n) => {
  let result = [];
  for (i = m; i <= n; i++) {
    let divisors = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisors.push(j);
    }
    const allFactorsSumSquare = divisors.reduce((a, v) => a + Math.pow(v, 2), 0);
    if (Number.isInteger(Math.pow(allFactorsSumSquare,0.5))) result.push([i,allFactorsSumSquare ])
  }
  return result;
}

// console.log(listSquared(1,250))

// [[1, 1], [42, 2500], [246, 84100], [287, 84100], [728, 722500], [1434, 2856100], [1673, 2856100], [1880, 4884100], [4264, 24304900], [6237, 45024100], [9799, 96079204], [9855, 113635600]]

// function listSquared(m, n) {
//   var arr = [];
//   for (var i = m; i <= n; i++){
//     var temp = 0;
//     for (var j = 1; j <= i; j++) {
//       if ( i % j == 0) temp += j*j;  // find each digit's divisors
//     };
//     if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
//   };
//   return arr;
// }

// ========================================================================

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.

// const removeSmallest = num => {
//   let numCopy = num.slice();
//   return numCopy.splice(numCopy.indexOf(Math.min(...numCopy)),1) ? numCopy : []
// }


// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers))); O(n3);
// removeSmallest=a=>(b=>[...a.slice(0,b),...a.slice(b+1)])(a.indexOf(Math.min(...a)))
function removeSmallest(ns) {
    removed = !1, ns.filter((e,i)=>{
      console.log(`removed before: ${removed}`);
      console.log(`e: ${e==Math.min(...ns)}, removed: ${!removed?(removed=!0,false):true}`);
      console.log(`removed after: ${removed}`);
      console.log(e==Math.min(...ns)&&!removed?(removed=!0,false):true) })
      // e==Math.min(...ns)&&!removed?(removed=!0,false):true }));
    }
    // return (removed = !1, ns.filter((e,i)=>e==Math.min(...ns)&&!removed?(removed=!0,false):true));
  
  // console.log(removeSmallest([2, 2, 1, 2, 1]));

// =============================================================================

const sumDigPow = (a, b) => {
  let result = [];
  const nums = [...new Array(b-a+1).fill(a).map((x, idx) => a + idx)];
  nums.forEach(item => { if (item === (item + '').split``.reduce((a, b, i) => a + Math.pow(b, i + 1), 0)) result.push(item) })
  return result;
}

// const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];
// const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );

// function sumDigPow(a, b) {
//   var ans = [];
//   while(a <= b){
//     if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
//       ans.push(a);
//     a++;
//   }
//   return ans;
// }

// function sumDigPow(a, b) {
//   let arr = new Array(b-a+1).fill('').map((e,i)=>a+i);
//   return arr.filter(n=>[...n.toString()].map((a,i)=>Math.pow(a,i+1)).reduce((a,b)=>a+b)===n);
// }

// console.log(sumDigPow(10,150));

// =================================================================== 

const countSmileys = arr => {
  const validSmileys = [':)', ':D', ';)', ';D', ':-)', ':-D', ';-)', ';-D', ':~)', ':~D', ';~)', ';~D']
  return arr.filter(smiley => validSmileys.indexOf(smiley) > -1,[]).length;
}

// console.log(countSmileys([]));

// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

// const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

// const faces = new Set()
// for (let eyes of [':',';'])
//     for (let nose of ['-','~',''])
//         for (let mouth of [')','D'])
//             faces.add(eyes+nose+mouth)

// countSmileys =(arr)=> arr.filter(x => faces.has(x)).length

// function countSmileys(a) {
//   return a.filter(f => /^(\:|\;)(\-|\~)?(\)|D)$/.test(f)).length;
//   return arr.filter(f=>/^(:|;)(-|~)?(\)|D)$/.test(f)).length;
// }

// const countSmileys = arr => arr.filter(smileys).length
// const smileys = str => /[:;][->~]{0,1}[D)]/.test(str)

// const countSmileys = arr => arr.reduce((s, t) => s + (t.match(/[:;][~-]?[\)D]/g) || []).length, 0);
