// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

function addBinary(a,b) {
  var sumBinary = a + b;
  return sumBinary.toString(2);
}


addBinary(2,3);

const addBinary = (a, b) => (a + b).toString(2);

function addBinary(a,b){
  return ((a + b) >>> 0).toString(2);
}

function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}

function addBinary(a,b) {
  let num = a + b;
  let bin = "";
  while (num) {
    bin = (num & 1) + bin;
    num >>= 1;
  }
  return bin;
}
