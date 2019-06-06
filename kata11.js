// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.

function high(x){
 var strAlphabet = "abcdefghijklmnopqrstuvwxyz";
 var xArray = x.toLowerCase().split(" ");
 var pointsMax = 0, wordMax;
 for (var word = 0, letters; word < xArray.length; word++) {
   letters = xArray[word].split("");
   var pointsWord = 0;
   for (var i = 0; i < letters.length; i++) {
       pointsWord += strAlphabet.indexOf(letters[i]);
   }
   if (pointsWord > pointsMax) {
     pointsMax = pointsWord;
     wordMax = xArray[word];
   }
 }
 //to prevent possibility when x is an empty string, then xArray[word] is undefined
  if (wordMax === undefined) {
    return '';
  } else {
    return wordMax;
  }
}

console.log(high(""));

// function high(x){
//   //transform the input string into array & define a string of alphabetical latin characters
//   var arr = x.split(' ');
//   var str = 'abcdefghijklmnopqrstuvwxyz';
//   //Iterate through the array with input words to find the one with the greatest sum
//   var newArr = arr.map(function(word){
//     var sum = 0;
//     for (var i = 0; i < word.length; i++) {
//       sum += str.indexOf(word[i]);
//     }
//     return sum;
//   });
//   //Return the word with the greatest sum
//   return arr[newArr.indexOf(Math.max(...newArr))];
// }
