// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000


const tableToRoman1s = { 1 : 'I', 2 : 'II', 3 : 'III', 4 : 'IV', 5 : 'V', 6 : 'VI', 7 : 'VII', 8 : 'VIII', 9 : 'IX' }
const tableToRoman10s = { 1 : 'X', 4 : 'XL', 5 : 'L', 9 : 'XC' }
const tableToRoman100s = { 1 : 'C', 4 : 'CD', 5 : 'D', 9 : 'CM' }
const tableToRoman1000s = { 1 : 'M' }
const tableFromRoman = { 'I' : 1, 'IV' : 4, 'V' : 5, 'IX' : 9, 'X' : 10, 'XL' : 40, 'L' : 50, 'XC' : 90, 'C' : 100, 'CD' : 400, 'D' : 500, 'CM' : 900, 'M' : 1000 }

class RomanNumerals {

  constructor() {
    this.tableToRoman1s = tableToRoman1s;
    this.tableToRoman10s = tableToRoman10s;
    this.tableToRoman100s = tableToRoman100s;
    this.tableToRoman1000s = tableToRoman1000s;
    this.tableFromRoman = tableFromRoman;
  }

  static toRoman(num) {
    let strRoman = ''
    let numArray = [...num.toString()];
    while (numArray.length > 0) {
      if (numArray.length === 4) {
        strRoman = 'M'.repeat(numArray[0]);
        numArray = numArray.slice(1);
      } 
      if (numArray.length === 3) {
          if (tableToRoman100s.hasOwnProperty(numArray[0])) {
            strRoman += tableToRoman100s[numArray[0]]
          } else if (numArray[0]) { // case not 
            numArray[0] < 4 ? strRoman += 'C'.repeat(numArray[0]) : strRoman += 'D' + 'C'.repeat(numArray[0] - 5);
          }
        numArray = numArray.slice(1);
      } 
      if (numArray.length === 2) {
        if (tableToRoman10s.hasOwnProperty(numArray[0])) {
          strRoman += tableToRoman10s[numArray[0]]
        } else if (numArray[0]) { // case not 
          numArray[0] < 4 ? strRoman += 'X'.repeat(numArray[0]) : strRoman += 'L' + 'X'.repeat(numArray[0] - 5);
        }
        numArray = numArray.slice(1);
      } 
      if (numArray.length === 1) {
        if (tableToRoman1s.hasOwnProperty(numArray[0])) strRoman += tableToRoman1s[numArray[0]]
        return strRoman;
      }
    }
  }

  static fromRoman(num) {
    let arrayArab = [];
    let numArray = [...num];
    for (let i = 0; i < numArray.length; i++) {
      let pair = numArray[i] + numArray[i+1];
      if (tableFromRoman.hasOwnProperty(pair)) {
        arrayArab.push(tableFromRoman[pair]);
        i ++;
      } else if (tableFromRoman.hasOwnProperty(numArray[i])) {
        arrayArab.push(tableFromRoman[numArray[i]]);
      }
    }
    return arrayArab.reduce((a, b) => a + b);
  }

}

// tableFromRoman = {
//   'I' : 1, 'IV' : 4, 'V' : 5, 'IX' : 9, 'X' : 10, 'XL' : 40, 'L' : 50, 'XC' : 90, 'C' : 100, 'CD' : 400, 'D' : 500, 'CM' : 900, 'M' : 1000
// }

// let converter = new RomanNumerals();
console.log(RomanNumerals.toRoman(999));
// console.log(converter.toRoman(1991));
// console.log(converter.toRoman(1000));
// console.log(converter.toRoman(2006));
// console.log(converter.toRoman(2020));

// console.log(converter.fromRoman('XXI'));
// console.log(converter.fromRoman('I'));
// console.log(converter.fromRoman('III'));
// console.log(converter.fromRoman('IV'));
// console.log(converter.fromRoman('MMVII'));
// console.log(converter.fromRoman('MDCLXIX'));
// console.log(converter.tableFromRoman);

var numerals = [
  ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
];

RomanNumerals = {
  toRoman: function(v) {
    var s = '';
    numerals.forEach(function(n) {
      while (v >= n[1]) {
        s += n[0];
        v -= n[1]; 
      }
    });
    return s;
  },
  fromRoman: function(s) {
    var v = 0;
    numerals.forEach(function(n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  }
};

// =============================================================

const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
              str += i;
              num -= map[i];
            }
        }
        return str;
    }
    
    static fromRoman(str) {
         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}

// =============================================================

const RomanNumerals = {
  
  toRoman:
    n => {
      var F = (A, B, C) => ["", A, A+A, A+A+A, A+B, B, B+A, B+A+A, B+A+A+A, A+C];
      var numerals = [F("I", "V", "X"), F("X", "L", "C"), F("C", "D", "M"), F("M", "", "")];
      return (""+n).split("").reverse().reduce((str, d, i) => numerals[i][d] + str, "");
    },
  
  fromRoman: // :P
    str => {
      for (var n = 0; RomanNumerals.toRoman(n) !== str; n++) {}
      return n;
    }
  
};

// =============================================================

const fromRoman = rn =>
  rn
    .replace(/CM/g, '900 ')
    .replace(/CD/g, '400 ')
    .replace(/XC/g, '90 ')
    .replace(/XL/g, '50 ')
    .replace(/IX/g, '9 ')
    .replace(/IV/g, '4 ')
    .replace(/M/g, '1000 ')
    .replace(/D/g, '500 ')
    .replace(/C/g, '100 ')
    .replace(/L/g, '50 ')
    .replace(/X/g, '10 ')
    .replace(/V/g, '5 ')
    .replace(/I/g, '1 ')
    .trim()
    .split(' ')
    .reduce((s, n) => s + Number(n), 0)

const toRoman = n =>
  'I'
    .repeat(n)
    .replace(/IIIII/g, 'V')
    .replace(/VV/g,"X")
    .replace(/XXXXX/g,"L")
    .replace(/LL/g,"C")
    .replace(/CCCCC/g,"D")
    .replace(/DD/g,"M")
    .replace(/IIII/g, 'IV')
    .replace(/IIII/g,"IV")
    .replace(/VIV/g,"IX")
    .replace(/XXXX/g,"XL")
    .replace(/LXL/g,"XC")
    .replace(/CCCC/g,"CD")
    .replace(/DCD/g,"CM")
    
const RomanNumerals = { fromRoman, toRoman }

// =====================================================

const arabic = [1000,  900, 500,  400, 100,  90 ,  50,  40 ,  10,   9 ,  5 ,   4 ,  1 ];
const roman  = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

class RomanNumerals {
  static fromRoman(numeral) {
    let number = 0;
    roman.forEach((n, i) => { while (numeral !== (numeral = numeral.replace(RegExp('^'+n),''))) number += arabic[i]; });
    return number;
  }
  static toRoman(number) {
    let numeral = '';
    arabic.forEach((n, i) => { while (number >= n) { numeral += roman[i]; number -= n; } });
    return numeral;
  }
}
