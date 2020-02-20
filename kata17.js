// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

// var capitals = function (word) {
// 	var arrWord = word.split("");
//   var list = [];
//   var strAlphabet = ("abcdefghijklmnopqrstuvwxyz").toUpperCase();
//   for (var letters in arrWord) {
//     if (strAlphabet.indexOf(arrWord[letters]) > -1) {
//       list.push(Number(letters));
//     }
//   }
//   return list;
// };



// var capitals = function (word) {
//   var caps = [];
//   for (var i = 0; i < word.length; i++) {
//     if (word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };

var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

console.log(capitals("CodEWaRs"));
