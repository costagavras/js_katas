// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071


// const nextBigger = n => {
//   console.log(n);

//   const permutations = (str) => 
//   str.length === 1 ? 
//     [str] : Array.from(new Set(
//     [...str].map((char, i) => 
//       permutations(str.slice(0, i) + str.slice(i + 1))
//         .map(p => char + p)
//     ).reduce((a, b) => a.concat(b), [])
//   ));

//   const sN = String(n), nLen = String(n).length, aDiffs = [];
//   let head, tail;
//   if (String(n).length > 6) {
//     [head, tail] = [sN.slice(0, nLen - 6), sN.slice(nLen - 6, nLen)];
//     const aPermutationsN = permutations(String(tail));
//     for (const tl of aPermutationsN) {
//       if (+(head + tl) - n > 0) aDiffs.push(+(head + tl));
//     }
//   } else {
//     const aPermutationsN = permutations(String(sN));
//     for (const i of aPermutationsN) {
//       if (+i - n > 0) aDiffs.push(+i);
//     }
//   }

//   return aDiffs.length === 0 ? -1 : aDiffs.sort((a,b) => a - b)[0];
// }

// function nextBigger(n){
//   console.log(n);
//   var chars = n.toString().split('');
//   var i = chars.length-1;
//   while(i > 0) {
//     if (chars[i]>chars[i-1]) break;
//     i--;
//   }
//   console.log(i);
//   if (i == 0) return -1;
//   var suf = chars.splice(i).sort();
//   console.log(suf, chars);
//   var t = chars[chars.length-1];
//   console.log(t);
//   for (i = 0; i < suf.length; ++i) {
//     if (suf[i] > t) break;
//   }
//   chars[chars.length-1] = suf[i]
//   suf[i] = t;
//   var res = chars.concat(suf);
//   var num = parseInt(res.join(''));
//   console.log("->" +num);
//   return num;
// }

// const sortedDigits = n => n.toString().split('').sort((a, b) => b - a);

// function nextBigger(n){
  
//   let arr = sortedDigits(n);
//   let max = parseInt(arr.join(''), 10);
  
//   for(var i = n + 1; i <= max; i++){
//     console.log(i, sortedDigits(i));
//     if(sortedDigits(i).every((x, j) => x === arr[j])){ // increments sortedDigits by one until it doesn't match the digits of initial n in sortedDigits;
      
//       return i;
//     }
//   }
  
//   return -1;
// }

// function nextBigger(n){
//   let max = biggify(n)
//   while (++n <= max) {
//     if (biggify(n) === max) return n
//   }
//   return -1
// }

// const biggify = n => [...`${n}`].sort((a, b) => b - a).join`` 

// const nextBigger = n => {
//   let num = Array.from(+String(n), Number); // sic! Number is a second argument mapFn;
//   console.log('num: ', num);
//   //Next lexicographical permutation algorithm
//   let pivot = num.reduce((max,_,i) => num[i - 1] < num[i] ? i : max, 0);
//   console.log('pivot: ', pivot);
//   let swap  = num.reduce((max,_,i) => num[i] > num[pivot - 1] ? i : max, 0); 
//   console.log('swap: ', swap);
//   [num[swap], num[pivot - 1]] = [num[pivot - 1], num[swap]]; // sic! swap
//   return pivot ? Number(num.concat(num.splice(pivot).sort()).join('')) : -1;
// };

// function nextBigger(n){
//   let num = Number(n.toString().split('').sort((a, b) => b - a).join(''))
//   for(let i = n + 1; i <= num; i++) {
//     if(i.toString().split('').sort().join('') === n.toString().split('').sort().join(''))
//     return i
//   } return -1
// }

// console.log(nextBigger(59710562295204));
console.log(nextBigger(1234));
// console.log(sortedDigits(1234));

// console.log(arr[j]);