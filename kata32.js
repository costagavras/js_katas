// Create the function prefill that returns an array of n elements that all have the same value v.
// See if you can do this without using a loop.

// You have to validate input:
//
// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

function prefill(n, v){
  var newArr = Array(Number(n));
  (v) ? newArr.fill(v) : newArr.fill("undefined");
  (n !== 0) ? newArr.fill(v) : newArr = [];
  return newArr;
}

console.log(prefill(3, prefill(2,'2d')));

function prefill(num, value) {
  if(typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
  return Array.apply(null, Array(+num)).map(function (d,i) { return value })
}

function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? Array(n).fill(v) : [];
}
