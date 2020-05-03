
// The cursor always starts on the letter a (top left)
// Remember to also press OK to "accept" each character.
// Take a direct route from one character to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"

// const remote1 = ['abcde123','fghij456','klmno789','pqrst.@0','uvwxyz_/']

// const tvRemote = word => {
//   let remote2Table = {}, counter = 0, [r,c] = [0,0];
//   remote1.map((a,aI) => a.split``.map((b,bI) => remote2Table[b] = String(aI)+String(bI)));
//   word.split``.forEach((_,idx) => {
//     if (idx === 0) {
//       [r,c] = [remote2Table[word[idx]][0],remote2Table[word[idx]][1]];
//       counter += +r + +c + 1
//     } else {
//       counter += Math.abs(+remote2Table[word[idx]][0] - r) + Math.abs(+remote2Table[word[idx]][1] - c) + 1;
//       [r,c] = [remote2Table[word[idx]][0],remote2Table[word[idx]][1]];
//     }
//   });
//   return counter;
// }

// console.log(tvRemote('words'));

// var tvRemote = (() => {
//   var kbc = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/', kbw = 8, i2c = i => ({x:i%kbw,y:i/kbw|0});
//   return word => {
//       var char, count = 0, last = {x:0,y:0};
//       for (char of word) {
//           char = i2c(kbc.indexOf(char));
//           count += Math.abs(char.x-last.x)+Math.abs(char.y-last.y);
//           last = char;
//       }
//       return count+word.length;
//   };
// })();

// const b=['abcde123','fghij456','klmno789','pqrst.@0','uvwxyz_/'],
//       m=b.reduce((o,r,j)=>([...r].forEach((c,i)=>o[c]=[i,j]),o),{});

// const tvRemote = w => [...w].reduce((s,c,i)=>s+Math.abs(m[c][0]-m[w[i-1]||'a'][0])+Math.abs(m[c][1]-m[w[i-1]||'a'][1])+1,0);

// console.log(tvRemote("hello"));

//========================== TV remote1 (shift and space) ==================================

// const remote1 = ['abcde123','fghij456','klmno789','pqrst.@0','uvwxyz_/','$ ']

// const tvRemote = word => {
//   let remote2Table = {}, counter = 0, [r,c] = [0,0], [rBefore,cBefore] = [0,0], bCapMode = false, bCapModeBefore = false, letter;
//   remote1.map((a,aI) => a.split``.map((b,bI) => remote2Table[b] = String(aI)+String(bI)));
//   const [rCap,cCap] = [+remote2Table['$'][0],+remote2Table['$'][1]];
//   // console.log(`rCap: ${rCap}, cCap: ${cCap}`);
//   // console.log(word.split``);
//   word.split``.forEach((_,idx) => {
//     if (word[idx].match(/[A-Z]/)) {
//       bCapMode = true 
//     } else if (word[idx].match(/[a-z]/)) {
//       bCapMode = false;
//     }
//     letter = word[idx].toLowerCase();
//     [r,c] = [remote2Table[letter][0],remote2Table[letter][1]];
//     // console.log(`r: ${r}, c: ${c}`);
//     // console.log(`bCapMode: ${bCapMode}`);
//     if (idx === 0) {
//       if (bCapMode) {
//         counter += Math.abs(rCap - 0) + Math.abs(cCap - 0) + 1;
//         counter += Math.abs(r - rCap) + Math.abs(c - cCap) + 1;
//       } else {
//         counter += +r + +c + 1;
//       }
//       // console.log(`r: ${r}, c: ${c}`);
//       // console.log(_, counter);
//     } else {
//       if (bCapModeBefore && !bCapMode) { // case UpperCase followed by LowerCase - ok
//         // console.log(`r: ${r}, c: ${c}`);
//         // console.log(`rBefore: ${rBefore}, cBefore: ${cBefore}`);
//         // console.log(`counter before: ${counter}`);
//         counter += Math.abs(rCap - rBefore) + Math.abs(cCap - cBefore) + 1;
//         // console.log(`counter after1: ${counter}`);
//         counter += Math.abs(r - rCap) + Math.abs(c - cCap) + 1;
//         // console.log(`counter after2: ${counter}`);
//       } else if (!bCapModeBefore && bCapMode) { // case LowerCase followed by UpperCase;
//         counter += Math.abs(rCap - rBefore) + Math.abs(cCap - cBefore) + 1;
//         counter += Math.abs(r - rCap) + Math.abs(c - cCap) + 1;
//       } else { // default case: UpperCase followed by UC and LowerCase followed by LC - ok
//         // console.log(`counter before dc: ${counter}`);
//         counter += Math.abs(+r - rBefore) + Math.abs(+c - cBefore) + 1;
//         // console.log(`counter after dc: ${counter}`);
//         // console.log(`r: ${r}, c: ${c}`);
//       }
//     }
//     [rBefore,cBefore] = [r,c];
//     // console.log(`r: ${r}, c: ${c}`);
//     // console.log(`rBefore: ${rBefore}, cBefore: ${cBefore}`);
//     bCapModeBefore = bCapMode
//     // console.log('here---------------');
//   });
//   return counter;
// }

// console.log(tvRemote('A/A/A/A/'));
// console.log(tvRemote('A'));
// console.log(tvRemote('Code Wars'));

// function tvRemote(words) {

//   // use # to represent the shift button
//   let keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/# ';
//   let pos = [ 0, 0 ];
//   let presses = 0;

//   // replace uppercase chars with equivalent shift presses
//   words = words.replace(/([A-Z]+[^a-z]*)([a-z]?)/g, (_, a, b) =>
//     '#' + a.toLowerCase() + (b ? '#' + b : '')
//   );

//   for (let char of words) {
    
//     let index = keys.indexOf(char);
//     let next = [ index / 8 | 0, index % 8 ];

//     presses += Math.abs(pos[0] - next[0]) 
//             +  Math.abs(pos[1] - next[1]) 
//             +  1;

//     pos = next;

//   }

//   return presses;

// }

// function tvRemote(words) {
//   const keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/# ';
//   let pos = [0, 0];
//   let result = 0;
  
//   words = words.replace(/([A-Z]+[^a-z]*)([a-z]?)/g, (_, a, b) => '#' + a.toLowerCase() + (b ? '#' + b : ''));
//   // _ stands for Full match, a is Group 1 ("C" or "W"), b is Group 2 ("o" in "Code");
//   console.log(words);
  
//   [...words].forEach(char => {
//     const idx = keys.indexOf(char);
//     const next = [idx / 8 | 0, idx % 8];
//     result += Math.abs(pos[0] - next[0]) + Math.abs(pos[1] - next[1]) + 1;
//     pos = next;
//   })
//   return result;
// }

// console.log(tvRemote('Code W a aBars'));

//========================== TV remote1 (wraps) ==================================

// const remote1 = ['abcde123','fghij456','klmno789','pqrst.@0','uvwxyz_/','$ ']

// const tvRemote = word => {
//   let remote2Table = {}, counter = 0, [r,c] = [0,0], [rBefore,cBefore] = [0,0], bCapMode = false, bCapModeBefore = false, letter;
//   remote1.map((a,aI) => a.split``.map((b,bI) => remote2Table[b] = String(aI)+String(bI)));
//   const [rCap,cCap] = [+remote2Table['$'][0],+remote2Table['$'][1]];
//   word.split``.forEach((_,idx) => {
//     if (word[idx].match(/[A-Z]/)) bCapMode = true 
//     if (word[idx].match(/[a-z]/)) bCapMode = false;

//     letter = word[idx].toLowerCase();
//     [r,c] = [remote2Table[letter][0],remote2Table[letter][1]];
//     if (idx === 0) {
//       if (bCapMode) {
//         counter += bestRouteY(Math.abs(rCap - 0)) + bestRouteX(Math.abs(cCap - 0)) + 1;
//         counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//       } else {
//         counter += bestRouteY(+r) + bestRouteX(+c) + 1;
//       }
//     } else {
//       if (bCapModeBefore && !bCapMode) {              // case UpperCase followed by LowerCase - ok
//         counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 1;
//         counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//       } else if (!bCapModeBefore && bCapMode) {       // case LowerCase followed by UpperCase;
//         counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 1;
//         counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//       } else {                                        // default case: UpperCase followed by UC and LowerCase followed by LC - ok
//         counter += bestRouteY(Math.abs(r - rBefore)) + bestRouteX(Math.abs(c - cBefore)) + 1;
//       }
//     }
//     [rBefore,cBefore] = [r,c];
//     bCapModeBefore = bCapMode
//   });
//   return counter;
// }

// const bestRouteY = r => {
//   if (r === 4) r = 2;
//   if (r === 5) r = 1;
//   return r;
// }

// const bestRouteX = c => {
//   if (c === 5) c = 3;
//   if (c === 6) c = 2;
//   if (c === 7) c = 1;
//   return c;
// }

// console.log(tvRemote('Code Wars'));

//========================== TV remote1 (symbols) ==================================


// const remote1 = ['abcde123','fghij456','klmno789','pqrst.@0','uvwxyz_/','а ']
// const remote3 = [`^~?!'"()`, `-:;+&%*=`,`<>€£$¥¤\\`,`[]{},.@§`,`#¿¡хуй_/`,`а `]
// const remote3s = [`^~?!'"()-:;+&%*=<>€£$¥¤\\[]{},.@§#¿¡_/`]

// const tvRemote = word => {
//   let remote1_2Table = {}, remote3_2Table = {}, counter = 0, [r,c] = [0,0], [rBefore,cBefore] = [0,0], letter;
//   let bCap = false, bCapB4 = false, bSymbols = false, bSymbolsB4 = false, bLow = true, bLowB4 = false;
//   remote1.map((a,aI) => a.split``.map((b,bI) => remote1_2Table[b] = String(aI)+String(bI)));
//   remote3.map((a,aI) => a.split``.map((b,bI) => remote3_2Table[b] = String(aI)+String(bI)));
//   const [rCap,cCap] = [+remote1_2Table['а'][0],+remote1_2Table['а'][1]];
//   word.split``.forEach((_,idx) => {
//     if (word[idx].match(/[A-Z]/)) bCap = true, bLow = false, bSymbols = false; 
//     if (word[idx].match(/[a-z]/)) bCap = false, bLow = true, bSymbols = false;
//     if (word[idx].match(/[0-9]/) && bSymbolsB4) bCap = false, bLow = true, bSymbols = false;     // previous item a Symbol, descend to smallcaps;
//     if (!word[idx].match(/[_/.@]/) && remote3s[0].includes(word[idx])) bSymbols = true, bCap = false, bLow = false;

//     letter = word[idx].toLowerCase();
//     bSymbols ? [r,c] = [remote3_2Table[letter][0],remote3_2Table[letter][1]] : [r,c] = [remote1_2Table[letter][0],remote1_2Table[letter][1]];
//     if (idx === 0) {
//       if (bCap) {
//         counter += bestRouteY(Math.abs(rCap - 0)) + bestRouteX(Math.abs(cCap - 0)) + 1;
//         counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//       } else if (bSymbols) {
//         counter += bestRouteY(Math.abs(rCap - 0)) + bestRouteX(Math.abs(cCap - 0)) + 2;
//         counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//       } else {
//         counter += bestRouteY(+r) + bestRouteX(+c) + 1;
//       }
//     } else {
//         if (bSymbols) {
//             if (bCapB4) {                                         // Uppercase -> Symbol 
//               counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 1;
//               counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//             } else if (bLowB4) {                                 // Lowercase -> Symbol 
//               counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 2;
//               counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//             } else {
//               counter += bestRouteY(Math.abs(r - rBefore)) + bestRouteX(Math.abs(c - cBefore)) + 1;
//             }     
//         } else if (bCap) {
//             if (bSymbolsB4) {                                   // Symbol -> UpperCase
//               counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 2; // 2
//               counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//             } else if (bLowB4) {                                 // LowerCase -> UpperCase;
//               counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 1;
//               counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//             } else {
//               counter += bestRouteY(Math.abs(r - rBefore)) + bestRouteX(Math.abs(c - cBefore)) + 1;
//             }
//         } else if (bLow) {
//             if (bSymbolsB4) {                                     // Symbol -> LowerCase
//               counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 1;
//               counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//             } else if (bCapB4) {                                 // UpperCase -> LowerCase
//               counter += bestRouteY(Math.abs(rCap - rBefore)) + bestRouteX(Math.abs(cCap - cBefore)) + 2;
//               counter += bestRouteY(Math.abs(r - rCap)) + bestRouteX(Math.abs(c - cCap)) + 1;
//             }  else {
//               counter += bestRouteY(Math.abs(r - rBefore)) + bestRouteX(Math.abs(c - cBefore)) + 1;
//             }
//         }
//     }
//     [rBefore,cBefore] = [r,c];
//     bCapB4 = bCap;
//     bSymbolsB4 = bSymbols;
//     bLowB4 = bLow;
//   });
//   return counter;
// }

// const bestRouteY = r => {
//   if (r === 4) r = 2;
//   if (r === 5) r = 1;
//   return r;
// }

// const bestRouteX = c => {
//   if (c === 5) c = 3;
//   if (c === 6) c = 2;
//   if (c === 7) c = 1;
//   return c;
// }

// // console.log(tvRemote('A/A/A/A/'));
// // console.log(tvRemote('^'));
// // console.log(tvRemote('1234567890'));
// console.log(tvRemote(`q}7D`))
// console.log(tvRemote(`..._^_--9__`));
// console.log(tvRemote('Too Easy?'));


const remote1 = ['abcde123','fghij456','klmno789','pqrst.@0','uvwxyz_/','а '];
const remote3 = [`^~?!'"()`, `-:;+&%*=`,`<>€£$¥¤\\`,`[]{},.@§`,`#¿¡хуй_/`,`а `];
const remote3s = [`^~?!'"()-:;+&%*=<>€£$¥¤\\[]{},.@§#¿¡_/`];

const tvRemote = word => {
  let remote1_2Table = {}, remote3_2Table = {}, counter = 0, [r,c] = [0,0], [rBefore,cBefore] = [0,0];
  let bLow = true, bLowB4 = false, bCap = false, bCapB4 = false, bSymbols = false, bSymbolsB4 = false;
  remote1.map((a,aI) => a.split``.map((b,bI) => remote1_2Table[b] = String(aI)+String(bI)));
  remote3.map((a,aI) => a.split``.map((b,bI) => remote3_2Table[b] = String(aI)+String(bI)));
  const [rCap,cCap] = [+remote1_2Table['а'][0],+remote1_2Table['а'][1]];
  word.split``.forEach((_,idx) => {
    if (word[idx].match(/[A-Z]/)) bCap = true, bLow = false, bSymbols = false; 
    if (word[idx].match(/[a-z]/)) bCap = false, bLow = true, bSymbols = false;
    if (word[idx].match(/[0-9]/) && bSymbolsB4) bCap = false, bLow = true, bSymbols = false;     // previous is a Symbol, I descend to Lowercase;
    if (!word[idx].match(/[_/.@]/) && remote3s[0].includes(word[idx])) bSymbols = true, bCap = false, bLow = false;
    
    let letter = word[idx].toLowerCase();
    bSymbols ? [r,c] = [remote3_2Table[letter][0],remote3_2Table[letter][1]] : [r,c] = [remote1_2Table[letter][0],remote1_2Table[letter][1]];
    if (idx === 0) {
      const distance1 = distance(rCap,0,cCap,0) + distance(r,rCap,c,cCap);
      if (bCap) counter += distance1 + 2;
      else if (bSymbols) counter += distance1 + 3;
      else counter += bestRouteY(+r) + bestRouteX(+c) + 1;
    } else {
        const distance2 = distance(rCap,rBefore,cCap,cBefore) + distance(r,rCap,c,cCap);
        const distance3 = distance(r,rBefore,c,cBefore) + 1;
        if (bSymbols) {
            if (bCapB4) counter +=  distance2 + 2;             // Uppercase -> Symbol 
            else if (bLowB4) counter += distance2 + 3;         // Lowercase -> Symbol 
            else counter += distance3;
        } else if (bCap) {
            if (bSymbolsB4) counter += distance2 + 3;          // Symbol -> UpperCase
            else if (bLowB4) counter += distance2 + 2;         // LowerCase -> UpperCase;
            else counter += distance3;
        } else if (bLow) {
            if (bSymbolsB4) counter += distance2 + 2;          // Symbol -> LowerCase
            else if (bCapB4) counter += distance2 + 3;         // UpperCase -> LowerCase
            else counter += distance3;
        }
    }
    [rBefore,cBefore] = [r,c];
    bCapB4 = bCap;
    bSymbolsB4 = bSymbols;
    bLowB4 = bLow;
  });
  return counter;
}

const bestRouteY = r => {
  if (r === 4) r = 2;
  if (r === 5) r = 1;
  return r;
}

const bestRouteX = c => {
  if (c === 5) c = 3;
  if (c === 6) c = 2;
  if (c === 7) c = 1;
  return c;
}

const distance = (fromRow, toRow, fromCol, toCol) => {
  return bestRouteY(Math.abs(fromRow - toRow)) + bestRouteX(Math.abs(fromCol - toCol));
}

console.log(tvRemote(`..._^_--9__`));

var tvRemote = function(word) {
  const keyb = 
    [ 'abcde123fghij456klmno789pqrst.@0uvwxyz_/Ф ',
      'ABCDE123FGHIJ456KLMNO789PQRST.@0UVWXYZ_/Ф ',
      `^~?!'"()-:;+&%*=<>€£$¥¤\\[]{},.@§#¿¡ФФФ_/Ф `];
  let coord=[], 
    currSpace=0,
    i;
  word.split('').forEach(char=>{
  
    do { //find correct letterspace;
      i = keyb[currSpace].indexOf(char);
      console.log(`char:${char}  i:${i} ${keyb[currSpace]}`);
      if (i==-1) { 
        coord.push([0,5]); // - coordinates of aA#
        currSpace = ++currSpace % 3;
      }
    } while (i==-1);
    coord.push( [i % 8, Math.floor( i / 8 )]);
  });
    
  return coord.reduce( ([x1, y1, res],[x2, y2])=>{
      let dx = Math.abs(x1 - x2), 
          dy = Math.abs(y1 - y2);
      dx = Math.min(dx, 8 - dx);
      dy = Math.min(dy, 6 - dy);
      
      return [x2, y2, res + dx + dy + 1]}, [0, 0, 0] )[2];
}


var modes = [
  [ "abcde123",  "fghij456", "klmno789",  "pqrst.@0", "uvwxyz_/", "◊ ××××××" ],
  [ "ABCDE123",  "FGHIJ456", "KLMNO789",  "PQRST.@0", "UVWXYZ_/", "◊ ××××××" ],
  [ "^~?!'\"()", "-:;+&%*=", "<>€£$¥¤\\", "[]{},.@§", "#¿¡×××_/", "◊ ××××××" ]
];

function tvRemote(words) {
    var x = y = presses = mode = switcher = 0;
    var rewrite = '';
    for (var letter of words) {
      while (!modes[switcher % 3].join('').includes(letter)) {
        switcher++;
        rewrite += '◊';
      }
      rewrite += letter;
    }
    for (var letter of rewrite) {
      var goY = modes[mode].findIndex(a => a.includes(letter));
      var goX = modes[mode][goY].indexOf(letter);
      var moveX = Math.min(Math.abs(x - goX), modes[0][0].length - Math.abs(x - goX));
      var moveY = Math.min(Math.abs(y - goY), modes[0].length - Math.abs(y - goY));
      presses += moveX + moveY + 1;
      [x, y] = [goX, goY];
      if (letter == '◊')
        mode = ++mode % 3;
    }
    return presses;
}

const tvRemote = word => {
  const alphanums = ['abcde123', 'fghij456', 'klmno789', 'pqrst.@0', 'uvwxyz_/', 'C XXXXXX'];
  const symbols = ['^~?!\'"()', '-:;+&%*=', '<>€£$¥¤\\', '[]{},.@§', '#¿¡XXX_/', 'C XXXXXX'];
  let presses = 0, x = 0, y = 0, mode = 0;
  
  [...word].map((char, i) => {
    let newMode = -1;
    if (/[a-z]/.test(char) && mode > 0) newMode = 0;
    if (/[A-Z]/.test(char) && mode !== 1) newMode = 1;
    if ('^~?!\'"()-:;+&%*=<>€£$¥¤\\[]{},§#¿¡'.includes(char) && mode !== 2) newMode = 2;
    if ('1234567890'.includes(char) && mode === 2) newMode = 0;
    if (newMode >= 0) {
      presses += Math.min(Math.abs(x - 5), x + 1) + Math.min(y, 8 - y) 
              + (!mode ? newMode : mode === 1 ? 1 + !newMode : newMode + 1);
      x = 5, y = 0, mode = newMode;
    }
    
    let layout = mode === 2 ? symbols : alphanums;
    let row = layout.findIndex(row => row.includes(char.toLowerCase``));
    let col = layout[row].indexOf(char.toLowerCase``);
    presses += Math.min(Math.abs(x - row), 6 - Math.abs(x - row)) 
            +  Math.min(Math.abs(y - col), 8 - Math.abs(y - col)) 
            +  1;  // OK
    x = row, y = col;
  });
  
  return presses;
}