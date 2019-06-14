// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in an array like so: [index1, index2].

function twoSum(numbers, target) {
  var ans = [];
  for(var i = 0; i < numbers.length-1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if ((numbers[i] + numbers[j]) === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([2,3,7,2],5));
