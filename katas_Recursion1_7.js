// Write a function binarySwap which accepts exactly 1 argument and should behave as follows:

// If the input is 0 then the return value should be 1 e.g. binarySwap(0) === 1
// If the input is 1 then the return value should be 0 e.g. binarySwap(1) === 0
// The strings '0' and '1' should be treated as 0 and 1 respectively e.g. binarySwap('0') === 1 && binarySwap('1') === 0

const binarySwap = input => {
  if (typeof input === 'function') return binarySwap(input());
  // if (input instanceof Array) return input.length === 1 ? binarySwap(input[0]) : input.map(item => binarySwap(item));
  cc
  return input == 0 ? 1 : 0;
}

// function binarySwap(input) {
//   return typeof input === 'function' ? binarySwap(input()): input instanceof Array && input.length > 1 ? input.map(binarySwap): +!+input;
// }

// function binarySwap(input) {
//   let result;
//   switch (typeof input) {
//       case 'string':
//       case 'number':
//           result = Number(input) === 0 ? 1 : 0;
//           break;
//       case 'function':
//           result = binarySwap(input());
//           break;
//       case 'object':
//           input.length === 1
//               ? result = binarySwap(input[0])
//               : result = input.map(inp => inp = binarySwap(inp));
//           break;
//   }
//   return result;
// }


// function binarySwap(input) {
//   if (typeof input === 'function')
//     return binarySwap(input());

//   if (input.constructor !== Array)
//     return 1 - +input;
    
//   return input.length === 1 
//     ? binarySwap(input[0]) 
//     : input.map(binarySwap);
// }

// function binarySwap(input) {
//   switch (typeof input) {
//     case 'function': return binarySwap(input());
//     case 'number': return 1 - input;
//     case 'string': return 1 - Number(input);
//     case 'object': return input.length === 1 ? binarySwap(input[0]) : input.map(binarySwap);
//   }
// }

// console.log(binarySwap(1));
// console.log(binarySwap([ 1, 1, 0, '1', '0', 1, 0, 0, 1, '1' ]));
// console.log(binarySwap([ 1, [ 0, [ '1', [Array] ] ] ]));

// ========================================Upper <body> Strength========================

const alexMistakes = (numberOfKata, timeLimit) => {
  let timeForPushups = timeLimit - numberOfKata / 10 * 60;
  const mistakesAllowed = (timeForPushups, mistakes, pushUpDuration) => {
    if (timeForPushups < pushUpDuration) return mistakes;
    timeForPushups -= pushUpDuration;
    mistakes++;
    pushUpDuration += pushUpDuration; 
    return mistakesAllowed(timeForPushups, mistakes, pushUpDuration);
  }
  return mistakesAllowed(timeForPushups, 0, 5);
}

// const alexMistakes = (numberOfKata, timeLimit, mistakes = 0, time = 5) => {
//   return timeLimit >= numberOfKata * 6 ? alexMistakes(numberOfKata, timeLimit - time, mistakes + 1, time * 2) : mistakes - 1;
// }

// function alexMistakes(numberOfKata, timeLimit, i = 0){
//   if(timeLimit < 0) return i -1 
//   return  alexMistakes(0, (timeLimit - numberOfKata*6) - 5*2**i, ++i)
// }

// function alexMistakes(numberOfKata, timeLimit){
//     var timePushup = timeLimit - (numberOfKata/10) * 60;   
//     function getMistakes (timePushup, time = 5) {     
//       return timePushup < time ? 0 : 1 + getMistakes(timePushup - time, time*2);
//     }
//     return getMistakes (timePushup, time = 5)
// }

// console.log(alexMistakes(3, 45));

// ================================ Fac Recursion (pest control) ===================

const facRecursion = value => {
  if(value < 0) return 0;
  if(value <= 1) return 1;
  return value * facRecursion(value - 1);
}

// console.log(facRecursion(1));

// =================================== The wheat/rice and chessboard problem ==============================

const squaresNeeded = (grains, squares = 0) => {
  if (grains === 0) return squares;
  const grainsTotal = squares => {
    if (squares === 0) return 0;
    return Math.pow(2, squares - 1,) + grainsTotal(squares - 1); 
  }
  while (grainsTotal(squares) < grains) squares++;
  return squares;
}

// function squaresNeeded(grains){
//   return Math.ceil(Math.log2(grains+1))
// }

// squaresNeeded=g=>g ? g.toString(2).length : 0;

// function squaresNeeded(grains, step=1){
//   if (grains == 0) return 0
//   let rice = parseInt(grains / 2);
//   console.log(rice);
//   return (rice > 0) ? squaresNeeded( rice, step+1) : step
// }

// function squaresNeeded(grains, n = 0) {
//   console.log(grains, Math.pow(2,n));
//   if (grains >= Math.pow(2,n)) return squaresNeeded(grains, n + 1);
//   return n;
// }

// function squaresNeeded(grains){
//   console.log(Math.floor(grains / 2));
//   return grains == 0 ? 0 : 1 + squaresNeeded(Math.floor(grains / 2));
// }

// function squaresNeeded(grains, counter = 1, square = 0){
//   square == 0 ? counter = 1 : counter *= 2
//   if(grains <= 0) return square
//   square += 1
//   return squaresNeeded(grains - counter, counter, square)
// }

// console.log(squaresNeeded(3));

// ==================== Factorial #1 ====================

// const factorial = n => {
//   if (n === 1) return 1;
//   return n * factorial(n-1);
// }

const factorial = n => n < 0 ? null : n == 0 ? 1 : n * factorial(n - 1);

// console.log(factorial(5));

// ======================== Fibonacci ======================

// const fibonacci = n => {
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n-1) + fibonacci(n-2);
// };

const fibonacci = n => n > 2 ? fibonacci(n-1) + fibonacci(n-2) : 1;

// const fibonacci = (n, memo = {1:1,2:1}) => memo[n] || (memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo));

// const fibonacci = n => n > 2 ? fibonacci(--n) + fibonacci(--n) : 1;

// const fibCache = [0, 1, 1]
// const fibonacci = n => fibCache[n] || (fibCache[n] = fibonacci(n - 1) + fibonacci(n - 2));

// const fibonacci = x => x > 1 ? fibonacci[x] || (fibonacci[x] = fibonacci(x - 1) + fibonacci(x - 2)) : x;

// console.log(fibonacci(2));

// ============================ Magic Index ==================

const findMagic = (arr, i = 0) =>  i < arr.length ? arr[i] === i ? i : findMagic(arr, i+1) : -1;

// const findMagic = arr => arr.findIndex(i => arr[i] === i);

// const findMagic = arr => arr.filter((item, index) => item === index)[0] || -1;

// console.log(findMagic([6, 5, 83, 5, 3, 18]));

// ============================= Sum all the arrays ================

// const arraySum = arr => {
//   const flatten = arr => {
//     const fl = [].concat(...arr);
//     return fl.some(Array.isArray) ? flatten(fl) : fl;
//   }
//   arr = flatten(arr);
//   return arr.length < 1 ? 0 : typeof arr[0] === 'number' ? arr[0] + arraySum(arr.slice(1)) : 0 + arraySum(arr.slice(1));
// }

// const flatten = l => l.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

// function arraySum(arr) {
//   return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
// }

// const arraySum = arr => arr.reduce((n, x) => n + (x instanceof Array ? arraySum(x) : isNaN(x) ? 0 : x), 0);

// function arraySum(arr) {
//   return arr.reduce((s,n)=>s+= (Array.isArray(n) ? arraySum(n) : +n || 0), 0)
// }

// const flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
// const arraySum = arr => flatten(arr).reduce((s, v) => isFinite(v) ? s + v : s);

// function arraySum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       sum += arraySum(arr[i]);
//     } else if (typeof arr[i] === 'number') {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

const sumNested = arr => arr.reduce((acc,curr) => acc + (curr instanceof Array ? sumNested(curr) : curr), 0);


// console.log(arraySum([ 1, 2, 'pig', 3 ]));

// =========================== Greatest commmon divisor ============

const mygcd = (x, y) => y ? mygcd(y, x % y) : x;

// function mygcd(x,y){
//   console.log('x: ', x, 'y: ', y);
//   return y == 0 ? x : mygcd(y, x % y)
// }

// function mygcd(x,y){
//   while (y) {
//     [x, y] = [y, x%y];
//   }
//   return x;
// }

// function mygcd(dividend,divisor){
//   var quotient = Math.floor(dividend / divisor);
//   var remainder = dividend - (divisor * quotient);
//   console.log('dividend:', dividend, ' divisor:', divisor, ' quotient:', quotient, ' remainder:', remainder); 
//   if (remainder === 0) { return divisor;}
//   return mygcd(divisor, remainder);
// }


// console.log(mygcd(30,12));

// ==================== Sum squares of numbers in lists ==============

const SumSquares = l => l.reduce((acc, curr) => acc + (curr instanceof Array ? SumSquares(curr) : curr**2), 0);

// const SumSquares = l => Array.isArray(l) ? l.map(SumSquares).reduce((a,b)=>a+b) : l*l;

// const flatten = l => l.reduce(
//   (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
// );
// function SumSquares(arr){
// let a = flatten(arr);
// return a.reduce((s, e) => s + e * e, 0);
// }

// function SumSquares(l){
//   return JSON.stringify(l).match(/\d+/g).reduce((a,v)=>a+v*v,0);
// }

// console.log(SumSquares([1,2,3]));

// ===================== Broken Collatz ======================
// The Collatz sequence is a set of numbers formed by taking an arbitrary positive integer and applying an operation to it:
// if the number is even, divide it by two, and if it's odd, multiply by three and add one. Repeat this process,
// taking the result as the input for the next step, until the resulting number is one.

function collatz(n, count = 1) {
  if (n <= 1) return count;
  !(n % 2) ? n = n / 2 : n = n * 3 + 1;
  return collatz(n, count + 1);
}

// function collatz(n, count = 1) {
//   if (n === 1) return count;
//   n = !(n % 2) ? n / 2 : n * 3 + 1;
//   return collatz(n, count + 1);
// }

// console.log(collatz(6));

// ======================== Recursive Replication =================

const replicate = (times, number, arr = []) => {
  if (times < 1) return arr;
  arr.push(number);
  return replicate(times-1, number, arr);
}

// console.log(3, 5);
//
// function replicate(times, number) {
//   return Array.from({length: times}, a => number);
// }

// function replicate(times, number) {
//   return times < 1? [] : [number].concat(replicate(times - 1, number));
// }

// function replicate(times, number) {
//   return times > 0 ? [number, ...replicate( times - 1, number )] : [];
// }

// ========================== Convert a linked list to a string ===========

const stringify = list => {
  return !list ? 'null' : `${list.data} -> ${stringify(list.next)}`; 
}

// console.log(stringify(new Node(1, new Node(2, new Node(3)))));

// ========================== Life Path Number ====================

const lifePathNumber = dateOfBirth => {
  const reducer = dob => {
    if (dob.length === 1) return dob;
    dob = dob.reduce((prev, curr) => +prev + +curr, 0);
    return reducer([...String(dob)]);
  }
  const sumDOB = dateOfBirth.split`-`.map(x => reducer(x.split``, 0)).reduce((a,b) => +a + +b);
  return +reducer([...String(sumDOB)])[0];
}

// const lifePathNumber = dateOfBirth =>
//   dateOfBirth < 10 ? dateOfBirth : lifePathNumber([...dateOfBirth + ``].reduce((pre, val) => pre + (+val || 0), 0));


//   const lifePathNumber = str => +str.replace(/-/g, '') % 9 || 9; // 17 => 1 + 7 === 17 - 9;

// const lifePathNumber = dateOfBirth =>
//   sumOfDigits(dateOfBirth.replace(/-/g, ``));

// const sumOfDigits = digits => {
//   let res = [...digits].reduce((pre, val) => pre + +val, 0);
//   return res < 10 ? res : sumOfDigits(res.toString());
// };

// const lifePathNumber = dateOfBirth => {
//   const sum = dig => {
//     let res = [...dig.toString()].reduce((pre, val) => pre + +val, 0);
//     return res >= 10 ? sum(res) : res;
//   };
//   return sum(dateOfBirth.split(`-`).map(val => sum(val)).join(``));
// };

// const lifePathNumber = (number, separator='-') => 
//                 (number.length > 1)
//                 ? lifePathNumber(String(number.split(separator).map(x => lifePathNumber(x, '')).map(Number).reduce((a, b) => a + b, 0)), '')
//                 : Number (number)

// console.log(lifePathNumber('1879-03-14'));

// ================== Reduce My Fraction ===============

const reduce = ([fr1, fr2]) => {
  const mygcd = (x, y) => y ? mygcd(y, x % y) : x;
  const divisor = mygcd(fr1, fr2);
  return [fr1/divisor, fr2/divisor];
}

// function reduce(fraction){
//   var max=1;
//   for (var i=1; i<=fraction[0]; ++i)
//     if (fraction[1]%i==0 && fraction[0]%i==0)
//       max=i;
//   return [fraction[0]/max,fraction[1]/max];
// }

// console.log(reduce([1000,1]));

// ========================= The real size of multi-dimensional array ===========

const realSize = arr => {
  const flatten = l => l.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
  let a = flatten(arr);
  return a.filter(a => typeof a === 'number').length;
}

// const realSize = arr => arr.reduce((a, e) => a + (Array.isArray(e) ? realSize(e) : 1), 0);

// const realSize=arr=>((arr+"").match(/\d+/g)||[]).length
// const realSize=arr=>(arr+""); // 5,3,0,2,,4,5,6

// function realSize(arrays) {
//   return arrays.reduce((s, x) => s + (typeof(x) === 'object' ? realSize(x) : 1), 0);
// }

// console.log(realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]));

// =========================== Recurrence by Recursion ===================
// Your task is to create a function, recurrence(base, formula, term) where base is the base case or first term of the sequence, 
// formula is the recurrence formula given as a function/method and term is the number of the term of the series which your function/method has to calculate. 
// For example:
// recurrence(1, n => n + 3, 4) === 10

// const recurrence = (base, formula, term, runs = 1) => {
//   if (term === 1) return base;
//   if (runs >= term-1) return formula(base);
//   return recurrence(formula(base), formula, term, runs+1);
// }

// const recurrence = (base, formula, term) => {
//   if (term === 1) return base;
//   return recurrence(formula(base), formula, term-1);
// }

// const recurrence = (base, formula, term) => term>1 ? recurrence( formula(base), formula, term-1 ) : base;

// function recurrence(base, formula, term) {
//   return term === 1 ? base : formula(recurrence(base, formula, term - 1));
// }

// const recurrence = (base, formula, term) => --term ? recurrence(formula(base), formula, term) : base;

// function recurrence(base, formula, term) {
//   return eval(`
//     wh`+`ile (--term > 0)
//       base = formula(base);
//     base;
//   `);
// }

// console.log(recurrence(3, n => n + 3, 1));
