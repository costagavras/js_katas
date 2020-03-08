// Make a function that takes in a name and 
// use the ascii values of it's substrings to produce the hex value of its color! Here is how it's going to work:
// The first two hexadecimal digits are the SUM of the value of characters (modulo 256).
// The second two are the PRODUCT of all the characters (again, modulo 256, which is one more than FF in hexadecimal).
// The last two are the ABSOLUTE VALUE of the DIFFERENCE between the first letter, and the sum of every other letter.

// "Jack"  #  "J" = 74, "a" = 97, "c" = 99, "k" = 107

// 74 + 97 + 99 + 107 = 377                   -->  mod 256 = 121  -->  hex: 79
// 74 * 97 * 99 * 107 = 76036554              -->  mod 256 = 202  -->  hex: CA
// 74 - (97 + 99 + 107) = -229  --> abs: 229  -->  mod 256 = 229  -->  hex: E5

const string_colour = name => {
  const nameArr = name.split('').map(char => char.charCodeAt(0));
  const first2 = (nameArr.reduce((a, b) => a + b) % 256).toString(16);
  const second2 = (nameArr.reduce((a, b) => a * b) % 256).toString(16);
  // const third2 = Math.abs(nameArr[0] - (nameArr.slice(1).reduce((a, b) => a + b) % 256)).toString(16);
  const third2 = (Math.abs(nameArr[0] - nameArr.slice(1).reduce((a, b) => a + b)) % 256).toString(16);
  return first2 + second2.toUpperCase() + third2.toUpperCase();
}


console.log(string_colour('Constantine'));