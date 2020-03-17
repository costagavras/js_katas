// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = str => {
  let pigResult = '';
  str.split` `.forEach(word => {
    [first, ...rest] = word;
    first.charCodeAt(0) > 64 ? pigResult += rest.join`` + first + 'ay ' : pigResult += first;
  });
  return pigResult.trim();
}

const pigIt1 = str => {
  return str.split` `.map(word => {
    [first, ...rest] = word;
    return first.charCodeAt(0) > 64 ? rest.join`` + first + 'ay' : first;
  }).join` `;
}

// pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');

// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

// function pigIt(str){
//   return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + "ay");
// }

// var pigIt = str  => str.split(" ").map(w => w.slice(1) + w[0] + "ay").join(" ");

// function pigIt(str){
//   return str.split(' ').map(x => x.match(/[a-z]/i) ? x.slice(1) + x[0] + 'ay' : x).join(' ')
// }

console.log(pigIt1('O tempora o mores !'));