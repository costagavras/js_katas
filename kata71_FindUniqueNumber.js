// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

const findUniq = arr => arr.filter(x => x === arr[0]).length === 1 ? arr[0] : arr.filter(x => x !== arr[0])[0];

console.log(findUniq([ 1, 0, 0 ]));

const findUniq = arr => arr.sort()[0] === arr[1] ? arr.pop() : arr[0];

const findUniq = arr => +arr.filter(unique);
const unique = (x, i, arr) => arr.indexOf(x) == arr.lastIndexOf(x);

const findUniq = arr => arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))[0];