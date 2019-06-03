// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
//
// The split() method splits a String object into an array of string by separating the string into sub strings.
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// The join() method joins all elements of an array into a string.
// function reverseString(str) {
//   if (str === "")
//     return "";
//   else
//     return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("hello"));

// toString() method will return a string from our arrays because otherwise Arrays will not be equal as they're objects with different locations in memory.
// function isPalindrome(string){
//   string = string.toLocaleLowerCase();
//   return Array.from(string).toString() === Array.from(string).reverse().toString()
// }
//
// function isPalindrome(string){
//   let strLen = Math.floor(string.length / 2);
//   string = string.toLocaleLowerCase();
//
//   for (let i = 0; i < strLen; i++) {
//     if (string[i] !== string[strLen - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function isPalindrome(string){
//   let strLen = string.length;
//   string = string.toLocaleLowerCase();
//
//   //if strLen is 0 or 1 char it is a palindrome by default
//   if (strLen === 0 || strLen === 1) {
//     return true;
//   }
//   //compare after slicing first and last char;
//   if (string[0] === string[strLen - 1]) {
//     return isPalindrome(string.slice(1, strLen - 1) );
//   }
//   return false;
// };
//
// console.log(isPalindrome("level"));

//Find the longest word
// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	     longestWord = strSplit[i].length;
//      }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// repeatStringNumTimes("abc", 3) should return "abcabcabc".

// function repeatStringNumTimes(string, num) {
//   var x = 1;
//   var newStr = "";
//   while (x <= num) {
//     newStr += string;
//     x++;
//   }
//   return newStr;
// }
//
// console.log(repeatStringNumTimes("abc", -1));

//Anagrams
// function anagrams(a, b) {
//     var y = a.split("").sort().join(""),
//         z = b.split("").sort().join("");
//     console.log(z === y
//         ? a + " and " + b + " are anagrams!"
//         : a + " and " + b + " are not anagrams."
//     );
// }
//
// anagrams("aloha", "ahola");

//Are all characters unique
// function isUnique(str) {
//   var i, ch;
//   for (i = 0; i < str.length; i++) {
//     ch = str[i];
//     if (str.indexOf(ch, i + 1) > -1) {
//       return false;
//     }
//   }
//     return true;
// }

//count frequency
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

console.log(getFrequency("hello"));
