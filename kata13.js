// Implement the function unique_in_order which takes as argument a sequence and returns a
// list of items without any elements with the same value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  var newIterable = [];
  if (iterable === "string") {
    iterable = iterable.split("");
  }
  for (var i = 0; i <= iterable.length; i++) {
    if (iterable[i+1] !== iterable[i]) {
      newIterable.push(iterable[i]);
    }
  }
  return newIterable;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

var uniqueInOrder = function (iterable){
  return [].filter.call(iterable, (function (a, i) {
    return iterable[i - 1] !== a
  }));
}

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
