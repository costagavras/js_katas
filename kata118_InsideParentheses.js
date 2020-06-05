// =============Reverse Inside Parentheses (Inside Parentheses)===============

// In this kata, you will be given a string of text and valid parentheses, such as "h(el)lo". 
// You must return the string, with only the text inside parentheses reversed, so "h(el)lo" becomes "h(le)lo".
// However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, 
// so it faces the original direction. When parentheses are reversed, they should switch directions, 
// so they remain syntactically correct (i.e. "h((el)l)o" becomes "h(l(el))o"). 
// This pattern should repeat for however many layers of parentheses. 
// There may be multiple groups of parentheses at any level (i.e. "(1) (2 (3) (4))"), so be sure to account for these.

// const reverseInParens = text => {
//   console.log(text);
//   let counter = 0; let aParens = [];
//   const iParensNo = text.match(/\(/g).length;
//   console.log(iParensNo);
  
//   // const revInPar = txt => {
//   //   const match = txt.replace(/\(([^]+)\)/g);

//   // }

//   for (let i = 1; i <= iParensNo; i++) {
//     if (i % 2) {
//       text = 
//     }
//     aParens.push([text.indexOf('('), text.lastIndexOf(')')]);
//     text = text.slice(aParens[aParens.length-1][0] + 1,aParens[aParens.length-1][1]);
//     console.log(text);
//   }
//   return aParens;



  // if (!match) return [...text].reverse().join``.replace(/\(/g, ')').replace(/\)/g, '(');
  // return reverseInParens(text.replace(/\(([^]+)\)/g, $1 => reverseInParens([...$1].slice(1,-1).reverse().join``.replace(/\(/g, ')').replace(/\)/g, '('))));
  // return reverseInParens(match[0].slice(1,-1));

    // const r=/\(([^()]+)\)/g; let a=[], m;
    // while (m = r.exec(text)) {
    //   a.push(m[1]);
    // } 
  // return temp;


// }

// String.prototype.reverse = function() {
//   return this.valueOf().split('').reverse().join('');
// }

// function reverseInParens(t){
//   while (t.includes('(')) t=t.replace(/\([^()]*\)/g,a=>'['+[...a.slice(1,-1)].reverse().join``.replace(/\[|\]/g,a=>a>'['?'[':']')+']');
//   return t.replace(/\[|\]/g,a=>a>'['?')':'(')
// }

// function reverseInParens(text){
//   let stack = [], nxt = 1, d = {}
//   for (let symbol of text){
//       if (symbol == ')'){
//           let opening = stack.lastIndexOf('(')
//           stack.push(...[nxt].concat(stack.splice(opening).slice(1).reverse()).concat([nxt++])); // ++ changes after the code is run;
//           console.log('stack1: ', stack);
//       }
//       else stack.push(symbol)
//       console.log('stack2: ', stack);
//   }

//  for (let i=0;i<stack.length;i++){
//      if (+stack[i]){
//       console.log('stack[i]: ', stack[i]);
//          if (d[stack[i]]) stack[i] = ')'          // if previous d[1] exists closing parens
//          else d[stack[i]] = 1 , stack[i] = '('    // if no d[1] exists opening parens, sic!
//      }
//  }
//  return stack.join``
// }

// function reverseInParens(text){
//   let arr = text.split('')
  
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] === '(') {
//       let acc = 0
//       for (let j=i+1; j<arr.length; j++) {
//         if (arr[j] === '(') acc--
//         else if (arr[j] === ')') acc++
        
//         if (acc>0) {
//           console.log('acc: ', acc);
//           console.log('slice reversed: ', arr.slice(i+1, j).reverse())
//           let reverse = arr.slice(i+1, j).reverse().map(c => {
//             if (c === ')') return '('
//             else if (c === '(') return ')'
//             else return c
//           });
//           console.log('reverse: ', reverse);
//           arr = [...arr.slice(0, i+1), ...reverse, ...arr.slice(j)]   // ingenious array parts put together, sic!
//           console.log('arr: ', arr);
//           break;
//         }
//       }
//     }
//   }
    
//   return arr.join('')
// }

// function reverseInParens(text){
//   return tokenize(text).map(el=>el[0] === "(" ? `(${reverseInParens(reverse(el.slice(1,-1)))})` : el).join``
// }

// function tokenize(text){
//   const tokens = [];
//   let openParenthesisCount = 0;
//   for (let char of text){
//     if (!openParenthesisCount) tokens.push(char);
//     // console.log('tokens1: ', tokens);
//     else tokens[tokens.length-1] += char; // sic!, cumulative last chars
//     console.log('tokens1: ', tokens);
//     console.log('tokens2: ', tokens[tokens.length -1]);
//     if (char === "(") openParenthesisCount++;
//     if (char === ")") openParenthesisCount--;
//   }
//   console.log(tokens);
//   return tokens;
// }

// function reverse(text) {
//   return [...text].reverse``.join``.replace(/[()]/g,x=>x==="(" ? ")" : "(")    // nice, sic!
// }

// function reverseInParens(text){ 
//   // define these arrays to allow us to alter and track the brackets
//   let bracketStart = ["(", ")", "[", "]"], bracketEnd = ["]","[","]","["];
  
//   // keep looping through until all brackets have been replaced
//   while (text.indexOf("(") !== -1) {
  
//     // find the last complete set of brackets
//     let lastOpen = text.lastIndexOf("(");
//     let complement = text.indexOf(")", lastOpen);
    
//     // extract the text between those brackets, reverse it, then change the brackets inside it if reqd
//     let textToReverse = text.slice(lastOpen + 1, complement);
//     let reversedText = textToReverse.split("").reverse().join("");
//     reversedText = reversedText.split("").map(char => bracketStart.indexOf(char) !== -1 ? bracketEnd[bracketStart.indexOf(char)] : char).join("");
//     let reversedAndSquared = "[" + reversedText + "]";
    
//     // extract the text outside what has just been operated on
//     let before = text.slice(0, lastOpen);
//     let after = text.slice(complement + 1);

//     text = before + reversedAndSquared  + after;
//   }
      
//   // replace the square brackets and put the strings together
//   let answer = text.replace(/\[/g, "(").replace(/\]/g, ")");
//   return answer;
// }

// function reverseInParens(text){
//   text = text.split('');
//   for(let start=text.indexOf('('), end=0; start!==-1; start=text.indexOf('(', start+1)){
//       for(let open = 1, i = start + 1; i < text.length; i++){
//         if(text[i] === '(') open++;
//         else if(text[i] === ')' && (--open) === 0 && (end = i - 1)) break;
//       }
//       text.splice(start+1, 0, ...text.splice(start+1, end-start).reverse().map(a=>a=='('?')':a==')'?'(':a));
//   }
//   return text.join('');
// }

// function reverseInParens(text, startWithReverse = false){
//   if(typeof text === 'string') text = text.split('');
//   if(startWithReverse) text = text.reverse().map(a=>a=='('?')':a==')'?'(':a);
//   for(let start=text.indexOf('('), end=0; start!==-1; start=text.indexOf('(', end)){
//       for(let open = 1, i = start + 1; i < text.length; i++){
//         if(text[i] === '(') open++;
//         else if(text[i] === ')' && (--open) === 0){
//           end = i;
//           break;
//         }
//       }
//       text.splice(start+1, 0, ...reverseInParens(text.splice(start+1, end-start-1), true));
//   }
//   return (typeof text === 'object') ? text.join('') : text;
// }

// function reverseInParens(s){
//   const revLst=(i,j)=> s.slice(i,j).reverse().map(c=>c==')'?'(':c=='('?')':c);
//   let start = [];
//   s = [...s];
//   s.forEach((c,j) =>{
//     console.log(c, j);
//     if(c == '(') start.push(j+1), console.log(start);
//     else if(c == ')') {
//       let i = start.pop();
//       console.log(i, j, s);
//       s.splice(i, j-i, ...revLst(i,j)); 
//     }
//   });
//   return s.join('');
// }

// const reverseInParens = str => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == '(') {
//       let k = i, balance = 1;
//       while ((++k < str.length) && (balance > 0)) {
//         if (str[k] == '(') balance++;
//         if (str[k] == ')') balance--;
//       }
//       if (balance != 0) break;
//       let sub = str.slice(i + 1, k - 1).split('').reverse().join('');
//       sub = sub.replace(/[()]/g, x => x == '(' ? ')' : '(');
//       str = str.slice(0, i + 1) + reverseInParens(sub) + str.slice(k - 1);
//       i = k - 1;
//     }
//   }
//   return str;
// }

// const reverseInParens = str => {
//   const rb = /[\[\]]/g;
//   const rm = /\([^\(\)]*\)/;
//   const mi = {'[':']', ']':'['};
//   const mc = {'[':'(', ']':')'};
//   let last;
//   while (last !== str) {
//     last = str;
//     str = str.replace(rm, s => {
//       s = s.substr(1, s.length-2).replace(rb, s => mi[s]);
//       return [']',...s,'['].reverse().join``;
//     });
//   }
//   str = str.replace(rb, s => mc[s]);
//   return str;
// };




// console.log(reverseInParens("h(el)llo"));
// console.log(reverseInParens("a ((d e) c b)"));
console.log(reverseInParens("one (two (three) four)"));
// console.log(reverseInParens("one (ruof ((rht)ee) owt)"));