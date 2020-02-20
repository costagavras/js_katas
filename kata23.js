// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair.
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array

// function partlist(arr) {
//   var newArr = [], newSubArr;
//   for (var i = 1; i <= arr.length - 1; i++) {
//     newSubArr = [];
//     newSubArr.push(arr.slice(0, i).join(" "));
//     newSubArr.push(arr.slice(i).join(" "));
//     newArr.push(newSubArr);
//   }
//   return newArr;
// }


// function partlist(arr) {
//     var newArray;
//     var returnArray=[];
//     for( var i=1; i<arr.length; i++){
//       newArray = [];
//       newArray.push(arr.slice(0,i).join(" "));
//       newArray.push(arr.slice(i).join(" "));
//       returnArray.push(newArray);
//     }
//
//     return returnArray;
// }
//
function partlist(arr) {
    return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}

console.log(partlist(["A", "quick", "brown", "fox"]));

