// each lowercase letter becomes uppercase and each uppercase letter becomes lowercase

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"


// String.prototype.toAlternatingCase = function () {
//   return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase(): a.toUpperCase()).join('')
// }

// String.prototype.toAlternatingCase = function () {
//   return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
// }

// String.prototype.toAlternatingCase = function() {
//   return [...this].map(
//     char => char[`to${char > 'Z' ? 'Uppe' : 'Lowe'}rCase`]()
//   ).join``;
// }

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].

// ==========================================================================
// const vowelIndices = word => {
//   return word.split``.map((letter, idx) => {
//     return ['a','e','i','o','u','y'].indexOf(letter) > -1 ? idx + 1 : '';
//   }).filter(x => x > 0);
// }

// const vowelIndices = word => word.split``.map((letter, idx) => ['a','e','i','o','u','y','A','E','I','O','U','Y'].indexOf(letter) > -1 ? idx + 1 : '').filter(x => x > 0);

// console.log(vowelIndices('supercalifragilisticexpialidocious'));

// function vowelIndices(word,a=[]){
//   return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
// }

// function vowelIndices(word){
//   return [...word].map((v,i)=>~'aeiouyAEIOUY'.indexOf(v)&&++i).filter(Boolean);
// }

// ==============================================================================

// Swap head andonst vowelIndices = word => word.split``.map((letter, idx) => ['a','e','i','o','u','y','A','E','I','O','U','Y'].indexOf(letter) > -1 ? idx + 1 : '').filter(x => x > 0);

// console.log(vowelIndices('supercalifragilisticexpialidocious'));

// function vowelIndices(word,a=[]){
//   return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
// }

// function vowelIndices(word){
//   return [...word].map((v,i)=>~'aeiouyAEIOUY'.indexOf(v)&&++i).filter(Boolean);
// }

// ===================================================================

const swapHeadAndTail = arr => {
  const halfArray = arr.length / 2 | 0;
  let newArr = arr.concat(Array(halfArray)).copyWithin(arr.length, 0, halfArray).slice(halfArray);
  if (arr.length % 2 !== 0) { newArr.splice(halfArray, 0, newArr.shift()) }
  return newArr;
}



// const swapHeadAndTail = (arr, mid = arr.length / 2) => [
//   ...arr.slice(-mid),
//   ...arr.slice(mid, -mid), 
//   ...arr.slice(0, mid)
// ];

// function swapHeadAndTail(arr)  {

//   if (arr.length < 2)
//     return arr;

//   const len = arr.length / 2 | 0;

//   let res = arr.slice(-len).concat(arr.slice(0, len));

//   if (arr.length % 2)
//     res.splice(len, 0, arr[len]);
    
//   return res;

// }

// function swapHeadAndTail(arr) {
//   let i = ~~(arr.length / 2)
//   return arr.slice(-i).concat(arr.slice(i,-i), arr.slice(0,i))
// }

// console.log(swapHeadAndTail([1, 2, 3, 4, 5]));

// =========================================================================

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace,
// while ensuring there is exactly one space between each word. 
// Punctuation marks should be treated as if they are a part of the word in this kata.

const reverse = str => str.trim().split` `.map((word, idx) => idx % 2 !== 0 ? word.split``.reverse().join`` : word).join` `

console.log(reverse("I really don't like reversing strings!"));


function reverse(string) {
  return string
    .split` `
    .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
    .join` `
    .trim();
}