// As a part of this Kata, you need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.
// gimme([2, 3, 1]) => 0

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.filter(function(el){
      el > Math.min(...inputArray) && el < Math.max(...inputArray)})[0]);
  };

// const gimme = iA => iA.indexOf(iA.filter(a=>(
//     a<Math.max(...iA) && a>Math.min(...iA)))[0]);

console.log(gimme([20,12,9]));

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
};
