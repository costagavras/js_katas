// Write a function that takes a string and turns any and all
// "words" (see below) within that string of length 4 or greater
// into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters.
// By this definition, any other character like a space or hyphen
// (eg. "elephant-ride") will split up a series
// of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have
// the first letter, then the number of removed characters,
// then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {
  var newStr = string.split(' ');
  for(var i = 0; i < newStr.length; i++) {
    var comma = "";
    if (newStr[i].endsWith(",")) {
      newStr[i] = newStr[i].substring(0, newStr[i].length-1);
      comma = ",";
    }
    if (newStr[i].length > 3) {
      if (newStr[i].indexOf("-") > -1) {
        newStr[i] = newStr[i].split("-").map(function(word){
          if (word.length > 3) {
            word = word.charAt(0) + String(word.length-2) + word.charAt(word.length-1)+comma;
            return word;
          }
        }).join("-");
      } else {
        newStr[i] = newStr[i].charAt(0) + String(newStr[i].length-2) + newStr[i].charAt(newStr[i].length-1)+comma;
      }
    }
  }
  return String([...newStr].join(" "));
}

console.log(abbreviate("You need, need not want, to complete this code-wars mission"));


var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}

function abbreviate(string) {
  return string.replace(/\B\w{2,}\B/g, match=> match.length);
}
