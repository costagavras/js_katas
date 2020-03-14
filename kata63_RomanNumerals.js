// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.

const table = { M : 1000, CM : 900, D : 500, CD : 400, C : 100, XC : 90, L : 50, XL : 40, X : 10, IX : 9, V : 5, IV : 4, I : 1};

const solutionFromRoman1 = roman => {
  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, item) => acc + table[item], 0); // matches groups
}

// console.log(solution('MDCLXIV'));

function solutionFromRoman2(roman) {
  var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
}

// const solution=a=>a.split``.map(a=>({I:1,V:5,X:10,L:50,C:100,D:500,M:1000}[a])).reduceRight((a,b)=>a>b+b?a-b:a+b)

function solutionFromRoman3(roman){
  var memo = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
  };  
  
return [...roman].map(a => memo[a]).reduce((a,b) => a < b  ? b - a : a + b)
// return [...roman].map(a => memo[a]);
  
}

// console.log(solutionFromRoman('MDCLXIV'));

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

const solutionToRoman = (arabic) => {
  const options = (A, B, C) => ["", A, A + A, A + A + A, A + B, B, B + A, B + A + A, B + A + A + A, A + C];
  const numerals = [options("I", "V", "X"), options("X", "L", "C"), options("C", "D", "M"), options("M", "", "")];
  return ("" + arabic).split``.reverse().reduce((str, d, idx) => numerals[idx][d] + str, "");
}

// console.log(solutionToRoman(1994));
console.log(solutionFromRoman4('XXII'));


function solution(number) {
  let numeral = '';
  const arabic = [1000,  900, 500,  400, 100,  90 ,  50,  40 ,  10,   9 ,  5 ,   4 ,  1 ];
  const roman  = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  arabic.forEach((n, i) => { while (number >= n) { numeral += roman[i]; number -= n; } });
  return numeral;
}

// Range from 0 to Roman Numerals
// console.log(0..X) //[0,1,2,3,4,5,6,7,8,9]

Number.prototype.X=[0,1,2,3,4,5,6,7,8,9]
Number.prototype.IV=[0,1,2,3]
Number.prototype.III=[0,1,2]
Number.prototype.XIX=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

Number.prototype.X = [...Array(10).keys()]
Number.prototype.IV = [...Array(4).keys()]
Number.prototype.III = [...Array(3).keys()]
Number.prototype.XIX = [...Array(19).keys()]