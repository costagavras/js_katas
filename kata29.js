// Given a string representing a simple fraction x/y,
// your function must return a string representing
// the corresponding mixed fraction in the following format:
//
// [sign]a b/c
//
// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000

function mixedFraction(s){
  var [x,y] = s.split("/").map(z=>+z);
  if (y === 0) throw "ZeroDivisionError";
  if (x % y === 0) return "" + x/y;
  var g = greatestCommonDivisor(Math.abs(x), Math.abs(y)), add = x/y < 0 ? "-" : "";
  x = Math.abs(x/g), y = Math.abs(y/g);
  return add +(x < y ? "" : Math.floor(x/y) + " ") + x % y + "/" + y;
}

function greatestCommonDivisor(x, y) {
  for(let i = x; i > 0; i--) {
    if (x % i === 0 && y % i === 0) return i;
  }
}

function getGCD(a, b) {
  if(!b) return a
  return getGCD(b , a % b)
}

console.log(mixedFraction('-10/7'));
