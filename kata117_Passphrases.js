// ================Playing with Passphrases=========

// choose a text in capital letters including or not digits and non alphabetic characters,
// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.

const playPass = (s,n) => {
  const sABC = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  s = s.replace(/[a-zA-Z]/g, char => sABC[(sABC.indexOf(char) + n) % 26]).replace(/\d/g, dig => 9 - dig);
  return [...s].map((pos,idx) => idx % 2 ? pos.toLowerCase() : pos.toUpperCase()).reverse().join``;
}

console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2));

// function playPass(s, n) {
//   return s
//     .replace(/[A-Z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
//     })
//     .replace(/[a-z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
//     })
//     .replace(/\d/g, function(digit) { 
//       return 9 - digit; 
//     })
//     .replace(/(.)(.?)/g, function(match, odd, even) {
//       return odd.toUpperCase() + even.toLowerCase();
//     })
//     .split('').reverse().join('');
// }