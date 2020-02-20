// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin it simple: There are no special characters in input.

// encryptThis("Hello") === "72olle";

var encryptThis = function(text) {
  var textArray = text.split(" ");
  var newTextArray = textArray.map(function(word){
    let firstChar = word.charCodeAt(0);
    if (word.length === 1) {return firstChar};
    if (word.length === 2) {return firstChar + word.charAt(1)};
    if (word.length > 2) {
      let secondChar = word.charAt(1)
      let lastChar = word.charAt(word.length-1);
      let middleChars;
      word.length > 3 ? middleChars = word.slice(2,word.length-1) : middleChars = "";
      return firstChar + lastChar + middleChars + secondChar;
    }
  }).join(" ");
  return newTextArray;
}

console.log(encryptThis("A wise old owl lived in an oak"));
//
// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
// For each word:
//
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

const decipherThis = str => str
  .split(' ')
  .map(word => word
  .replace(/(^\d+)([a-z])(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\d+/, String.fromCharCode(word.match(/^\d+/)[0])))
  .join(' ');


 console.log(decipherThis('103o 97t')); // 'Hello good day'

 function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
