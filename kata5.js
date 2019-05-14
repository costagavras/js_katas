// Given an array of one's and zero's convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  for (var i = arr.length-1, pow = 0, sum = 0; i >= 0, pow < arr.length; i--, pow++) {
    console.log(arr[i], pow);
    var power = Math.pow(2 * arr[i], pow);
    //plug for a condition when 0 to the power of 0 gives 1!
    if (pow === 0 && arr[i] === 0) {
      power = 0;
    }
    console.log(power);
    sum += power;
  }
  console.log("The sum of it all: " + sum);
};

binaryArrayToNumber([0,0,0,1]);
binaryArrayToNumber([0,0,1,0]);
binaryArrayToNumber([1,1,1,1]);
binaryArrayToNumber([0,1,1,0]);

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}

//Converts array to string with no separations and interprets it as a number of base 2 (binary),
//using radix of "2" into parseInt.
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};
