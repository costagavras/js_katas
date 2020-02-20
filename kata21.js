// As a part of this Kata, you need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.
// gimme([2, 3, 1]) => 0

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.filter(el => {
      el > Math.min(...inputArray) && el < Math.max(...inputArray)})[0]);
  };

  
// this is based on the assumption that it's a triple (i.e. returns [1]);
var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
};

console.log(gimme([20,12,9]));