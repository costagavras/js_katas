// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.
// 0 <= input.length <= 100
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. 
// Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).

// charcodes 40, 41

const validParentheses = parens => {
  let parBalance = 0;
  if ((parens.split('').filter(char => char === '(').length || 0) !== (parens.split('').filter(char => char === ')').length || 0)) { return false }
  return parens.split('').filter(char => char === '(' || char === ')')
    .map(el => {
      el === '(' ?  parBalance ++ : parBalance --;
      return parBalance >= 0 ? true : false;
    })
    .every(par => par);
}

// console.log(validParentheses("(h(e(l)l)o)"));
console.log(validParentheses("(()))"));

// function validParentheses(parens){
//   var re = /\(\)/;
//   while (re.test(parens)) parens = parens.replace(re, "");
//   return !parens;
// }

// function validParentheses(parens){
//   for (var i = 0, depth = 0; i < parens.length; i++) {
//     if (parens[i] == '(') depth++;
//     if (parens[i] == ')') depth--;
//     if (depth < 0) return false;
//   }
//   return depth == 0;
// }

// function validParentheses(parens){
//   while(parens.indexOf('()') != -1){
//     parens = parens.replace('()', '');
//   }
//   return !parens.length;
// }

// function validParentheses(parens){
//   // why string to array to string?
//   // reduce on array allows to apply replace on each iteration string attach (a + c);
//   return [...parens].reduce((a,c) => (a + c).replace("()",'')) == "" ? true : false;
// }

function validParentheses(p){
  return ![...p].reduce((a,v) => a < 0 ? 0.5 : a + ({'(':1,')':-1}[v]||0),0)
}