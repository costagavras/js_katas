// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	var arrWord = word.split("");
  var list = [];
  var strAlphabet = ("abcdefghijklmnopqrstuvwxyz").toUpperCase();
  for (var letters in arrWord) {
    if (strAlphabet.indexOf(arrWord[letters]) > -1) {
      list.push(Number(letters));
    }
  }
  return list;
};

console.log(capitals("CodEWaRs"));
