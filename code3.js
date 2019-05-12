// Very simple, given a number, find its opposite.

// function opposite(number) {
//   var oppNumber = -number;
//   console.log(oppNumber);
// }
//
// opposite(-10);


// Your task is to write a function that takes a string and return a new string
// with all vowels removed. For example, the string "This website is for losers LOL!"
// would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  console.log(str.replace(/[aeiou]/ig,""));
  return str.replace(/[aeiou]/ig,"");
  //return string or nothing
  return (str || "").replace(/[aeiou]/gi, "");
  //new JS
  disemvowel = str => str.replace(/[aeiou]/gi,'');
}

disemvowel("This website is for losers LOL!");


function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split("").filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
