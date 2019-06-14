// Given a string str, reverse it omitting all non-alphabetic characters.
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".




function reverseLetter(str) {
    return str.replace(/[^a-z]/ig, "").split("").reverse().join("");
}

console.log(reverseLetter("ultr53o?n"));

function reverseLetter(str) {
  return str.split('').reverse().filter(function(el) {
    if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
      return el;
    }
  }).join('');
}

function reverseLetter(str) {
  return str.match(/[a-z]/ig).reverse().join('');
}

function reverseLetter(str) {
  return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}
