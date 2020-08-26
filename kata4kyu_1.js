// Connect Four: Who Won?

// test = Array.from({length: 6}).fill().map(()=>Array.from({length: 7}).fill('_'))
// test = Array.from({ length: 6 }, () => Array(7).fill('_'));

// var board = [['-','-','-','-','-','-','-'],
//              ['-','-','-','-','-','-','-'],
//              ['-','-','-','Y','R','Y','R'],
//              ['-','-','-','R','Y','R','Y'],
//              ['-','-','-','Y','R','Y','Y'],
//              ['-','-','R','Y','R','R','R']];

var board = [ [ 'Y', 'R', 'Y', 'R', 'Y', 'R', 'Y' ],
              [ 'R', 'Y', 'Y', 'R', 'Y', 'R', 'Y' ],
              [ 'Y', 'Y', 'Y', 'R', 'R', 'Y', 'R' ],
              [ 'R', 'R', 'Y', 'Y', 'Y', 'R', 'Y' ],
              [ 'Y', 'Y', 'Y', 'R', 'Y', 'R', 'Y' ],
              [ 'R', 'Y', 'R', 'R', 'R', 'Y', 'R' ] ]

const connectFour = board => {
  
  let result;

  // horizontal win test
  const boardRows = board.map(row => row.join(''));
  result = checkWin(boardRows);
  if (result) return result;
  
  // vertical win test
  const boardWidth = board[0].length;
  let boardCols = [];
  for (let i = 0; i < boardWidth; i++) {
    boardCols.push(board.map(row => row[i]).join(''));
  }
  console.log(boardCols);
  result = checkWin(boardCols);
  if (result) return result;

  // diagonal test
  const boardDiagosBottTop = diagonal(boardRows, true);
  result = checkWin(boardDiagosBottTop);
  if (result) return result;
  const boardDiagosTopBott = diagonal(boardRows, false);
  result = checkWin(boardDiagosTopBott);
  if (result) return result;

  // check for draw or in progress
  return boardRows.some(item => !item.includes('-')) ? 'draw' : 'in progress';

}
 
const checkWin = arr => {
  if (arr.some(item => item.includes('RRRR'))) return 'R';
  if (arr.some(item => item.includes('YYYY'))) return 'Y';
}

// const diagonal = (array, bottomToTop) => {
//   const lenX = array[0].length, lenY = array.length;
//   const lenMax = Math.max(lenX, lenY);
//   let aTemp, returnArray = [];
//   for (let k = 0; k <= 2 * (lenMax - 1); ++k) {
//     aTemp = [];
//       for (let y = lenY - 1; y >= 0; --y) {
//         let x = k - (bottomToTop ? lenY - y : y);
//         if (x >= 0 && x < lenX) {
//           aTemp.push(array[y][x]);
//         }
//         // console.log('k: ', k, ' y: ', y, ' x: ', x, ' aTemp: ', aTemp);
//       }
//       if(aTemp.length > 0) {
//         returnArray.push(aTemp.join(''));
//       }
//       // console.log('returnArray: ', returnArray);
//   }
//   return returnArray;
// }

// function connectFour(m) {
//   for (let C of ['R','Y']) 
//     for (let r = 0; r < 6; r++)
//       for (let c = 0; c < 7; c++)  
//         if ((a=[0,1,2,3])&&(b='every')&&
//           a[b](i => m[r+i] && m[r+i][c] === C) ||
//           a[b](i => m[r][c+i] && m[r][c+i] === C) || 
//           a[b](i => m[r+i] && m[r+i][c+i] && m[r+i][c+i] === C) || 
//           a[b](i => m[r+i] && m[r+i][c-i] && m[r+i][c-i] === C)) return C
          
//   return m[0].some(x => x === '-') ? 'in progress' : 'draw'
// }

// function connectFour(board) {
//   const check=(a,b,c,d)=>a===b&&b===c&&c===d;
//   var full = true;
//   for(let j=0; j<board.length; j++) for(let i=0; i<board[0].length; i++) {
//     if(board[j][i]==='-')full = false;
//     else if((i+3<board[0].length && check(board[j][i],board[j][i+1],board[j][i+2],board[j][i+3]))
//           ||(j+3<board.length && check(board[j][i],board[j+1][i],board[j+2][i],board[j+3][i]))
//           ||(i+3<board[0].length && j+3<board.length && check(board[j][i],board[j+1][i+1],board[j+2][i+2],board[j+3][i+3]))
//           ||(i>2 && j+3<board.length && check(board[j][i],board[j+1][i-1],board[j+2][i-2],board[j+3][i-3]))
//             )return board[j][i];
//   }
//   return full?'draw':'in progress';
// }

// function connectFour(b) {
//   const d = [ b,                                // - rows
//     b[0].map((_,y)=>b.map((_,x)=>b[x][y])),     // | columns
//     b.map((_,y)=>b.map((_,x)=>b[x][x+y-2])),    // \ diagonal
//     b.map((_,y)=>b.map((_,x)=>b[x][8-x-y]))     // / diagonal
//   ].map(d=>d.map(r=>r.filter(n=>n).join('')).join('X')).join('X');
//   return /R{4}/.test(d) ? 'R' : /Y{4}/.test(d) ? 'Y' : /-/.test(d) ? 'in progress' : 'draw';
// }

// function connectFour(board) {
//   let newBoard = board.join('_').replace(/,/g, "");
//   console.log(newBoard);

//   if (/RRRR|R.......R.......R.......R|R........R........R........R|R......R......R......R/.test(newBoard)) return "R";
//   if (/YYYY|Y.......Y.......Y.......Y|Y........Y........Y........Y|Y......Y......Y......Y/.test(newBoard)) return "Y";
//   return /-/.test(newBoard) ? "in progress" : "draw";
// }

// function connectFour(board) {
//   let boardStr = board.map(line => line.join('')).join(' ');
//   console.log(boardStr);
//   var m = [/(\w)\1\1\1/,
//            /(\w).{7}\1.{7}\1.{7}\1/,
//            /(\w).{8}\1.{8}\1.{8}\1/,
//            /(\w).{6}\1.{6}\1.{6}\1/]
//   // console.log(m);
//            .reduce((m, re) => m || boardStr.match(re), null);
//   console.log(m);
//   // return m ? m[1] : boardStr.replace('-', '') == boardStr ? 'draw' : 'in progress';
// }

// arr['slice'](i, 1)[0]
// arr['re' + 'du' +'ce'](i, 1)[0]


// console.log(connectFour(board));

// ======================== Remove Zeros =======================

// const input = [7, 2, 3, 0, 4, 6, '0', 0, 13, 0, 78, 0, 0, 19, 14];
const input = [ 1, '0', 2, 0, 52, '0', 7, 0, '3', 1 ];
// const input = [ { a: [ 'code' ] }, 0, { b: [ 'wars' ] }, 1 ];

const removeZeros = array => {
  if (array.length <= 1) return array;
  let strNonZero = '', strZero = '';
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] === 0) strZero += '-' + array[i];
    else if (array[i] === '0') strZero += '-s' + array[i];
    else if (typeof array[i] === 'object') strNonZero += '-' + `{${i}}`; 
    else if (typeof array[i] === 'string') strNonZero += '-s' + array[i];
    else strNonZero += '-' + array[i];
  }
  let aResult = (strNonZero.substring(1) + strZero).split`-`;
  for (let i = 0; i < aResult.length; i++) {
    if (aResult[i].includes('{')) aResult[i] = array[aResult[i][1]];
    else aResult[i][0] === 's' ? aResult[i] = String(aResult[i].substring(1)) : aResult[i] === 'false' || aResult[i] === 'null' ? 
                            aResult[i] = JSON.parse(aResult[i]) : aResult[i] = Number(aResult[i]);
  }
  return aResult;
}

// function removeZeros(array) {
//   return [...array['filter'](x=>x!==0 && x!=='0'),...array['filter'](x=>x===0 || x==='0')];
// }

// function removeZeros(a) {
//   let zeros = [], other = [];
//   for (let x of a){
//       if (x===0||x==='0'){zeros = [...zeros, x];}
//       else {other = [...other, x];}
//   }
//   return [...other, ...zeros];
// }

// function removeZeros(array) {
  
//   for(let j = 0; j < array.length; j++){
//     for(let i = 0;i < array.length - 1; i++){
//       let actualValue = array[i];
//       let nextValue = array[i+1];
    
//       if(actualValue == 0 && (nextValue !== 0 && nextValue !== '0'))
//       {
//         array[i] = nextValue;
//         array[i+1] = actualValue;
//       }
//     }
//   }
  
//   return array;
// }

// const removeZeros = (array, nonZeros = [], zeros = []) => {
//   const [first, ...rest] = array;
//   if (array.length === 0)
//     return [...nonZeros, ...zeros];
//   if (first === "0" || first === 0) {
//     return removeZeros(rest, nonZeros, [...zeros, first]);
//   } else {
//     return removeZeros(rest, [...nonZeros, first], zeros);
//   }
// }

// removeZeros=Q=>[...Q[T='filter'](V=>0!=''+V),...Q[T](V=>0==''+V)];
// const removeZeros=a=>[...a[f='filter'](e=>e!==0&&e!=='0'),...a[f](e=>e===0||e==='0')];
// removeZeros = arr => arr['fi' + 'lter'](e => e !== 0 && e !== '0')['conc' + 'at'](arr['filt' + 'er'](e => e === 0 || e === '0'));

// function removeZeros(array) {
//   const head = []
//   const tail = []
//   for (const e of array) {
//     if (e === 0 || e === "0") {
//       tail[tail.length] = e
//     } else {
//       head[head.length] = e
//     }
//   }
//   return [...head, ...tail]
// }

// console.log(removeZeros(input));

// ====================== Reverse it, quickly ===========

weirdReverse=a=>a.sort(_=>1);


// let list = [10, 20, 30, 60, 90]
// let reversedList = list.map((e, i, a)=> a[(a.length -1) -i])

// console.log(weirdReverse([1,2,3,4,5]));

// ====================== Organize a round-robin tournament =============

const buildMatchesTable = numberOfTeams => {
  let tempResult = [], result = [];
  const aBase = Array(numberOfTeams).fill().map((_, i) => i + 1);
  // const arr = Array(numberOfTeams-1).fill().map((_,i) => i+1);
  console.log(aBase);
  // console.log(arr);

  const combos = (counter, temp) => {
    console.log('combos(', counter, temp, ')');
    if (temp.length === 2) {
      tempResult.push(temp);
      console.log('tempResult: ', tempResult);
      return;
    }
    if (counter === aBase.length) return; // aBase = 4;
    combos(counter + 1, temp.concat([aBase[counter]]));
    combos(counter + 1, temp);
  }

  combos(0, []);
}

// function buildMatchesTable(numberOfTeams) {
//   let players = Array.apply(0,Array(numberOfTeams)).map( (_,i)=> i+1 );
  
//   let rounds = [];
//   for( let r = 0; r < numberOfTeams-1; r++ ){
//     let pp = players.slice(), matches = [], count = pp.length/2;
//     while (count--) {
//       matches.push([pp.shift(), pp.pop()]);
//       console.log('matches: ', matches);
//     }
//     rounds.push(matches)
//     console.log('rounds: ', rounds);
//     players = [1].concat(players.slice(2),[players[1]]);
//     console.log('players: ', players);
//   }
  
//   return rounds
// }

// function buildMatchesTable(numberOfTeams) {
//   const arr = Array.from(Array(numberOfTeams+1).keys()).filter(x => x > 0);
//   console.log(arr);
//   const res = [];
//   for(let i=1; i<numberOfTeams; i++) {
//     const arr2 = [arr[0], ...arr.slice(i),...arr.slice(1, i)];
//     console.log('arr2: ', arr2);
//     const a = [[arr2[0], arr2[1]]];
//     console.log('a: ', a);
//     for(let j=2,k=numberOfTeams-1; j<=numberOfTeams/2; j++, k--) {
//       a.push([arr2[j], arr2[k]])
//       console.log('aLooped: ', a);
//     }
//     res.push(a);
//     console.log('res: ', res);
//   }
//   return res;
// }

// console.log(buildMatchesTable(6));

// ==================== SecretAgent - Discriminate Missions ==========

// const noGo = ['kill', 'murder', 'torture'];
// const goodPeople = [ 'Beaulah Rist', 'Yelena Sather', 'Antwan Valls' ];
// const badPeople = [ 'Merry Abeyta', 'Dwana Webre', 'Lucio Timmer' ];

function newMission(action, target) {
  if(['murder','kill','torture'].indexOf(action) !== -1) return false;
  if(goodPeople.indexOf(target)!== -1) return false;
  if(newMission.caller.toString().indexOf('secret') !== -1) return false
  if(new Error().stack.indexOf('EvilGovernment') !== -1) return false;
  return true;
}

// const GOOD = new Set(goodPeople);

// function newMission(action, target) {
//   try{
//       newMission.caller.gna();
//   }catch(stuff){
//       if ((""+stuff.stack).indexOf('EvilGovernment')!=-1) return false;
//   }
//   return !/.*(badGovernment|evil government|secret plan).*/i.test((newMission.caller.caller||'').toString())
//          && !/.*secret plan.*/i.test(newMission.caller.toString()) 
//          && !['kill', 'murder', 'torture'].includes(action) && !GOOD.has(target);
// }

// function newMission(action, target) {
//   try {
//     throw new Error('test');
//   }
//   catch (e) {
//     if (/EvilGovernment/.test(e.stack)) return false;
//   }
//   if (/secret plan/.test(arguments.callee.caller)) return false;
//   if (/\b(kill|murder|torture)\b/.test(action)) return false;
//   if (goodPeople.includes(target)) return false;
//   return true;
// }

// console.log(newMission('kill', 'Dwana Webre'));

// ================ Simple Fun #381: Find d = a + b + c =========

const findD = arr => {
  let tempResult = [], result = [];

  const combos = (counter, temp) => {
    // console.log('combos(', counter, ',', temp, ')');
    if (temp.length === 3 && !temp.some((item, i) => temp.slice(i+1).includes(0-item))) {
      tempResult.push(temp);
      // console.log('tempResult: ', tempResult);
      return;
    }
    if (counter === arr.length) return; // arr = 5;
    combos(counter + 1, temp.concat([arr[counter]]));
    // console.log('================');
    combos(counter + 1, temp);
  }
  combos(0, []);

  result = tempResult.map(el => el.reduce((a, b) => a + b));
  // console.log(result)
  result = result.filter(item => arr.includes(item)).sort((a, b) => b - a);
  // result = [...new Set(result)];
  console.log(result)
  return result[0] !== null && result.length > 0 ? result[0] : null;
}

// function threeSum(list, sumIndex) {
//   d = list[sumIndex];
//   console.log('list: ', list, ' sumIndex: ', sumIndex, 'd: ', d);
//   for (var i = 0; i < list.length - 1; i++) {
//       // Don't include the target sum on the left hand side
//       var l = i + 1 == sumIndex ? i + 2 : i + 1;
//       var r = list.length - 1 == sumIndex ? list.length - 2 : list.length - 1;
//       if (i == sumIndex) continue;
//       console.log('l: ', l, 'r: ', r);
//       while (l < r) {
//         const leftHandSide = list[i] + list[l] + list[r];
//         if (leftHandSide < d) {
//            l+=1;
//         } else if (leftHandSide > d) {
//           r-=1;
//         } else {
//           return true;
//         }
//         if (l == sumIndex) l+=1;
//         if (r == sumIndex) r-=1;
//       }
//   }
//   return false;
// }

// function findD(arr) {
//   for (let j = arr.length - 1; j >= 0; j--) {
//       console.log('j ', j);
//       if (threeSum(arr, j) === true) {
//           return arr[j];
//       }
//   }
//   return null;
// }

// function findD(xs) {
//   const setXs = new Set(xs);
//   for (let id = xs.length - 1; id >= 0; id--) {
//     const d = xs[id];
//     for (let ia = 0; ia < xs.length; ia++) {
//       const a = xs[ia];
//       if (a == d)
//       continue;
//       for (let ib = ia + 1; ib < xs.length; ib++) {
//         const b = xs[ib], c = d - a - b;
//         console.log('d: ', d, 'a: ', a, 'b: ', b, 'c: ', c);
//         if (b != d && c != a && c != b && c != d && setXs.has(c)) {
//           return d;
//         }
//       }
//     }
//   }
//   return null;
// }

// function findD(arr) {
  
//   for (let o = arr.length - 1; o > -1; o--) {
//     let i = arr.length - 1;
//     while (i >= 0) {
//       if (i == o) {i--; continue;}
//       let b = 0, a = i;
//       while (b < a) {
//         if (b == o || b == i) {b++; continue;}
//         if (a == o || a == i) {a--; continue;}
//         let c = arr[i] + arr[b] + arr[a];
//         if (c == arr[o]) return arr[o];
//         else if (c < arr[o]) b++;
//         else a--;
//       }
//       i--;
//     }
//   }
  
//   return null;
// }

// console.log(findD([-100,-1,105,7,101]));
// console.log(findD([-938,-821,-694,-626,-586,-509,-399,-387,-197,-47,71,73,131,215,235,370,522,610,667,694,729,874,932,976,996]));

// ===================== Twice linear ===============

// const dblLinear = n => {
//   let aResult = [1], i = 1, counter = 0;
//   // let setResult = new Set([1]);
//   // while (i <= Math.pow(2, Math.floor(Math.log2(n))) + 100) {
//   while (aResult.length <= n) {
//     tempResult = [];
//     console.log('aResult: ', aResult);
//     console.log('counter: ', counter);
//     console.log('aResult_sliced: ', aResult.slice(counter));
//     aResult.slice(counter).forEach(item => {
//       tempResult = tempResult.concat([2 * item + 1, 3 * item + 1]);
//     })

//     counter += Math.pow(2, i - 1);
//     // console.log(counter);
//     aResult = aResult.concat(tempResult);
//     aResult = [...new Set(aResult)];
//     i++;
//   }
//   aResult = aResult.sort((a,b) => a - b);
//   console.log(aResult);
//   return aResult[n];
// }

// const dblLinear = n => {
//   let aResult = [1], i = 0;
//   while (n + 15 > aResult.length) {
// //     aResult.push(2 * aResult[i] + 1);
// //     aResult.push(3 * aResult[i] + 1);
//     aResult = aResult.concat([2 * aResult[i] + 1, 3 * aResult[i] + 1]);
//     aResult = [...new Set(aResult.sort((a,b) => a - b))];
//     i++;
//   }
//   return aResult[n];
// }

// function dblLinear(n) {
//   var ai = 0, bi = 0, eq = 0;
//   var sequence = [1];
//   while (ai + bi < n + eq) {
//     var y = 2 * sequence[ai] + 1;
//     var z = 3 * sequence[bi] + 1;
//     if (y < z) { sequence.push(y); ai++; }
//     else if (y > z) { sequence.push(z); bi++; }
//     else { sequence.push(y); ai++; bi++; eq++; }
//     console.log(sequence);
//   }
//   return sequence.pop();
// }

// function dblLinear(n) {
  
//   var u = [1], pt2 = 0, pt3 = 0; //two pointer
  
//   for(var i = 1; i<=n; i++){
//     u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
//     if(u[i] == 2 * u[pt2] + 1) pt2++;
//     if(u[i] == 3 * u[pt3] + 1) pt3++;
//   }
//   return u[n];

// }

// function dblLinear(n) {
  // if (n < 0) throw new Error("sequence is not defined for negative numbers");
//   var myset = new Set();
                  // const u = new Set([1]);
//   var num = 1;
//   myset.add(num);
//   if (n === 0) {return num}
//   while (myset.size <= n) {
//     num++;
//     if (myset.has((num - 1)/2) || myset.has((num - 1)/3)) {myset.add(num)}
//     console.log(myset);
//   }
//   return num;
// }

// function dblLinear(n) {
//   let x = 1;
//   let y = [];
//   let z = [];

//   for (let i = 0; i < n; i += 1) {
//       y.push(2 * x + 1);
//       z.push(3 * x + 1);
//       console.log(x, y, z);
      
//       let min = Math.min(y[0], z[0]);
//       if (min === y[0]) x = y.shift();
//       if (min === z[0]) x = z.shift();
//   }
//   return x;
// }

// console.log(dblLinear(10));

// ========================= Hamming numbers ============

// const hammingNew = n => {
//   let h = [0, 1], h2 = [1, 2], h3 = [1, 3], h5 = [1, 5], result = [];

//   const min = () => Math.min(h2[h2.length-1], h3[h3.length-1], h5[h5.length-1]);

//   const ham = n => {
//     if (h[n]) return h[n];
  
//     const next_h = min();
//     h[n] = next_h;
//     if (h2[h2.length-1] === next_h) h2.push(h[h2.length]*2);
//     if (h3[h3.length-1] === next_h) h3.push(h[h3.length]*3);
//     if (h5[h5.length-1] === next_h) h5.push(h[h5.length]*5);
//     return h[n];
//   }

//   for (i = 1; i <= n; i++) {
//     // result = result.concat(ham(i));
//     result.push(ham(i));
//   }

//   return result[n-1];    
// }

// function hamming(n) {
//   let seq = [1];
//   let i = 0, j = 0, k = 0;
//   let a = 2, b = 3, c = 5;
//   while (seq.length < n) {        
//       let min = Math.min(a, b, c);
//       console.log('1.a: ', a, ' b: ', b, ' c: ', c)
//       seq.push(min);
//       console.log('seq: ', seq);
//       if (a === min) a = 2 * seq[++i];
//       if (b === min) b = 3 * seq[++j];
//       if (c === min) c = 5 * seq[++k];     
//       console.log('2.a: ', a, ' b: ', b, ' c: ', c)  
//       console.log('======================');
//   }
//   return seq.pop();
// }

// const known = []

// // why not generate them all
// // up to Number.MAX_SAFE_INTEGER 
// // in less than a second? 😎

// for (const pow2 of Array(52).keys())
//   for (const pow3 of Array(33).keys())
//     for (const pow5 of Array(22).keys())
//       known.push(2 ** pow2 * 3 ** pow3 * 5 ** pow5)
      
// const ascending = (a, b) => a - b
// known.sort(ascending)

// const hamming = (n) => known[n-1]

// const hamming = n => {
//   const numbers = [];
//   for (let i = 0; i < 33; i++) {
//     for (let j = 0; j < 21; j++) {
//       for (let k = 0; k < 15; k++) {
//         numbers.push(2 ** i * 3 ** j * 5 ** k);
//       }
//     } 
//   }
//   return numbers.sort((x, y) => x - y)[n - 1];
// }

// function hamming (n) {
//   var e = [0,0,0]; var nums = []; nums[0] = 1;
//   for(let i = 1; i < n; i++) {
//     var p = nums[i-1];
//     while(nums[e[0]] * 2 <= p) e[0]++;
//     while(nums[e[1]] * 3 <= p) e[1]++;
//     while(nums[e[2]] * 5 <= p) e[2]++;
//     nums[i] = Math.min(nums[e[0]]*2,nums[e[1]]*3,nums[e[2]]*5);
//   }
//   return nums[n-1];
// }

function hamming (n) {
  var seq = [1];
  var i2 = 0, i3 = 0, i5 = 0;
  for (var i = 1; i < n; i++) {
    console.log('=========', i, '================');
    console.log('seq before: ', seq);
    console.log('before i2: ', i2, ' i3: ', i3, ' i5: ', i5);
    console.log('seq[i2]: ', seq[i2], ' seq[i3]: ', seq[i3], ' seq[i5]: ', seq[i5]);
    var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
    seq.push(x);
    console.log('seq after: ', seq);
    if (2 * seq[i2] === x) i2++;
    if (3 * seq[i3] === x) i3++;
    if (5 * seq[i5] === x) i5++;
    console.log('after i2: ', i2, ' i3: ', i3, ' i5: ', i5);
  }
  return seq[n-1];
}


// console.log(hamming(8));

// =================== Strip Comments ================

const solution = (input, markers) => {
  markers.forEach(marker => {
    input = input.replace(new RegExp('\\s*' + marker + '.*?(?=\\[\\])','g'), '').replace(new RegExp('\\s*\\' + marker + '.*','g'), '');
  });
  return input;
}

// function solution(input, markers){
//   return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(?=\\[\\])?", "gi"), "");
// }

// function solution(input, markers) {
//   return input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line // , line is inivialValue of reduce fonction)
//     )
//   ).join('\n')
// }


// console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));

// ================= Longest Common Subsequence (Performance version ==========)

// function lcs(x, y) {
//   const memo = Array.from({ length: x.length }, _ => Array(y.length));
//   console.log(memo);
//   return lcsFunc(x, y, 0, 0, memo);
// }

// function lcsFunc(x, y, i, j, memo) {
//   if (i === x.length || j === y.length) {
//     return '';
//   } else if (memo[i][j] !== undefined) {
//     return memo[i][j];
//   } else if (x[i] === y[j]) {
//     memo[i][j] = x[i] + lcsFunc(x, y, i + 1, j + 1, memo);
//     console.log(memo[i][j]);
//     return memo[i][j];
//   }

//   const a = lcsFunc(x, y, i + 1, j, memo);
//   const b = lcsFunc(x, y, i, j + 1, memo);
//   console.log('a: ', a, 'b: ', b);
//   memo[i][j] = a.length > b.length ? a : b;
//   return memo[i][j];
// }

// function lcs(x, y) {
//   var longest = function (x, y) { return x.length > y.length ? x : y };
//   if (!x.length || !y.length) {
//     return '';
//   } else if (x[0] == y[0]) {
//     return x[0] + LCS(x.slice(1), y.slice(1));
//   } else {
//     return longest(LCS(x.slice(1), y), LCS(x, y.slice(1)));
//   }
// }

const lcs = (x, y) => {
  let memo = Array(x.length).fill('');      
  for (let i = 0; i < y.length; i++) {    
    console.log('i: ', i);
    let l = '';
    console.log('y[i]: ', y[i]);
    memo = memo.map((val, idx) => (l = x[idx] === y[i] ? (memo[idx - 1] || '') + x[idx] : (l.length > val.length ? l : val))); //!sic map function
    console.log('l: ', l);
    console.log('memo_after: ', memo);
    console.log('=================');
  }
  return memo.pop() || '';
}

// const lcs = (s1, s2) => {
//   let memo = Array(s1.length).fill('');      
//   for (let i = 0; i < s2.length; i++) {    
//     let match = '';
//     memo = memo.map((val, idx) => (match = s1[idx] === s2[i] ? 
                                      // (memo[idx - 1] || '') + s1[idx] : 
                                      // (match.length > val.length ? match : val))); //!sic map function
//   }
//   return memo[memo.length-1];
// }

// function lcs(x, y) {
//   const m = x.length, n = y.length;
//   let L = [];
  
//   for (let i = 0; i <= m; i++) {
//     L[i] = [];
//     for (let j = 0; j <= n; j++) {
//       if (!i || !j) L[i][j] = '', console.log('L1: ', L);
//       else if (x[i - 1] === y[j - 1])
//       L[i][j] = L[i - 1][j - 1] + x[i - 1], console.log('L2: ', L);
//       else {
//         let a = L[i - 1][j];
//         let b = L[i][j - 1];
//         L[i][j] = a.length > b.length ? a : b;
//         // console.log('L3: ', L);
//       } 
//     }
//   }
//   return L[m][n];
// }

// function lcs(x, y) {
//   let table = ' '.repeat(x.length+1).split('').map(a=>' '.repeat(y.length+1).split(''))                   //create a table based on lengths of x and y. this will hold a grid of the longest sequences and sequence lengths at every combination of character positions of x and y
//   console.log('table: ', table);
//   for (let i = 0; i <=x.length; i++) {                                                            
//       for (let j = 0; j <= y.length; j++) {
//           if (i == 0 || j == 0) table[i][j] = [0,'']                                                      //populate first row and column with empty string. if we have no characters of x, it doesn't share any with y (and vice versa)
//           else if (x[i - 1] == y[j - 1]) {                                                                //same char in these positions so ...
//               table[i][j] = [table[i - 1][j - 1][0] + 1, table[i-1][j-1][1] + x[i-1]]                     //increment the previous longest sequence and add the current char
//           }
//           else table[i][j] = table[i-1][j][0]>table[i][j-1][0] ? table[i-1][j] : table[i][j-1]            //different char in these positions so promote the longest sequence from adjacent cells
//       }
//   }
//   return table[x.length][y.length][1]                                                                     //final value is in the last cell of the grid. after we've compared every combination of x,y character positions
// }

// function lcs(x, y, m = 0, n = 0, cache = {}) {
//   const cacheKey = m + ':' + n;
//   if(cache[cacheKey]) {
//     return cache[cacheKey];
//   }
//   let longest = '';
//   for(let i = m; i < x.length; i++) {
//     for(let j = n; j < y.length; j++) {
//       if(x[i] !== y[j]) continue;
//       const current = x[i] + lcs(x, y, i + 1, j + 1, cache);
//       if(current.length > longest.length) {
//         longest = current;
//       }
//     }
//   }
//   console.log(cache);
//   cache[cacheKey] = longest;
//   return longest;
// }


// console.log(lcs("abcdefghijklmnopq", "apcdefghijklmnobq"));

// =============================== Longest Palindromic Substring (Linear) ==========

// non linear O(N2) solution
const longest_palindrome = ([...s], result = []) => {
  if (!s.length) return '';
  if (s.length === 1) return result.pop() || s[0];
  if (s.every((x,_,arr) => x === arr[0])) return result[s.length] = s.join(''), result.pop();
  for (let i = 0; i <= s.length; i++) {
    if (JSON.stringify(s.slice(0, i)) === JSON.stringify(s.slice(0, i).reverse())) {
      if (!result[s.slice(0,i).length]) {
        result[s.slice(0,i).length] = s.slice(0, i).join('') ;
      }
    } 
  }
  console.log(result);
  return longest_palindrome(s.slice(1), result);
}

// console.log(longest_palindrome('bbaaacc'));
// console.log(longest_palindrome('banana'));
// console.log(longest_palindrome('a'.repeat(10000)), 'a'.repeat(10000)); 

// ============================== Shortest Knight Path =================

// return moves.filter(Boolean).filter(a => !a.match(/[-0]/) && a[1]<9)  // sic! regex
// const parsePos = str => ({ x: str.charCodeAt(0)-"a".charCodeAt(0), y: parseInt(str[1], 10)-1 });
// console.log(parsePos(start));
// console.log(parsePos(finish));

const knight = (start, finish) => {
  const fieldConversion = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8 };
  const column = [11,21,31,41,51,61,71,81], possibleMoves = [-21, -19, -12, 8, 19, 21, 12, -8]; 
  let chessField = [];
  for (let item of column) {
    for (let i = 0; i <= 7; i++) {
      chessField.push(item+i);
    }
  }
  let startPos = start[1] + fieldConversion[start[0]];
  let endPos = finish[1] + fieldConversion[finish[0]];
  let validMoves = possibleMoves.map(val => val + +startPos).filter(v => chessField.includes(v));
  let i = 1;
  while (validMoves.every(v => v !== +endPos)) {
    validMoves = [...new Set(flatten(validMoves.map(val => possibleMoves.map(v => v + +val).filter(k => chessField.includes(k)))))];
    i++;
  }
  return i;
}

const flatten = l => l.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

// var MOVES = [[1, -2], [1, 2], [2, -1], [2, 1], [-1, -2], [-1, 2], [-2, 1], [-2, -1]]
// function knight(p1, p2) {
//     [p1,p2] = [p1,p2].map(x=>[8- +x[1],'abcdefgh'.indexOf(x[0])]);
//     console.log([p1, p2]);
//     let Q = [[p1,-1]], visited = {}
//     console.log(Q);
//     while (Q.length){
//         let [k,l] = Q.shift()
//         l++
//         visited[k] = 1
        
//         if (k[0]==p2[0]&&k[1]==p2[1]) return l
        
//         for (let [i,j] of MOVES){
//             let [ni,nj] = [k[0]+i,k[1]+j]
//             if (ni>=0&&nj>=0&&ni<8&&nj<8&&!visited[[ni,nj]]) Q.push([[ni,nj],l])
//         }
//     }
// }

// function knight(start,finish){
//   let S={x:'abcdefgh'.indexOf(start[0]),y:start[1]-1}
//   let F={x:'abcdefgh'.indexOf(finish[0]),y:finish[1]-1}
//   console.log(S, F);
//   let M= [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]] 
//   let queue=[]; queue.push({x:S.x,y:S.y,d:0});
//   console.log('queue: ', queue);
//   let seen=[]; seen[8*S.y+S.x]=1
//   console.log('seen: ', seen);
//   while(queue.length){
//       let {x,y,d}=queue.shift();
//       if(x==F.x && y==F.y) return d;
//       for(let [x2,y2] of M.map(e=>[x+e[0],y+e[1]])){
//         console.log([x2, y2]);
//           if(x2>=0 && x2<8 && y2>=0 && y2<8 && !seen[[x2,y2]]){
//               queue.push({x:x2,y:y2,d:d+1})
//               seen[8*S.y+S.x]=1
//               console.log('queue2: ', queue);
//               console.log('seen2: ', seen);
//           }
//       }
//   }
// }

// console.log(knight('a1', 'c1'));

// ========================= Repetitive Sequence - Easy Version (NS) ===================
 
function find(n) {
  let seq = [0,1,2,2];
  if (n <= 2) return seq[n];
  for (let i = 3, k = 3; i <= n; i++, k+=2) {
    let aTemp = Array.from({length: seq[i]}).fill(i);
    seq = seq.concat(aTemp);
  }
  return seq[n];
}

// console.log(find(19));

// test = Array.from({length: 6}).fill().map(()=>Array.from({length: 7}).fill('_'))
// test = Array.from({ length: 6 }, () => Array(7).fill('_'));


// ============================ Path Finder #1: can you reach the exit ==================

// function pathFinder(maze) {
//   const mazeArray = maze.split('\n').map(it => [...it.trim()]);
//   const mazeWidth = mazeArray[0].length;
//   const mazeLength = mazeArray.length;
//   mazeArray[mazeLength-1][mazeWidth-1] = 'F';
//   // console.log(mazeArray);

//   const walkMaze = (r, c, visited = new Set) => {
//     const pos = r*mazeWidth+c; // unique reference to cell;
//     if (!mazeArray[r] || !mazeArray[c] || mazeArray[r][c] === 'W' || visited.has(pos)) return; // check cell is within grid and has not been visited nor is a wall;
//     visited.add(pos); // marks cell as visited;
//     console.log('visiting: ', r, c);
//     if (mazeArray[r][c] === 'F') return [[r, c]]; // 'Finish" cell is found, I return the path that will be extended back to beginning [8,8] then [7,7][8,8] etc.
//     for (const [addR, addC] of [[0,1],[1,0],[0,-1],[-1,0]]) {
//       const arrived = walkMaze(r+addR, c+addC, visited); // arrived to this point only if previous returns are not met;
//       console.log('arrived: ', arrived)
//       if (arrived) return [[r, c], ...arrived]; // arrives here only if arrived is defined, i.e. becomes an array having found Finish);
//     }
//   }
  
//   return walkMaze(0, 0) ? true : false;
// }

// ==== wrong solution =====

// let arrPath = mazeArray.map((el,elIdx) => el.map((it,idx) => it === '.' ? elIdx+':'+idx : 0 ).filter(Boolean)).reduce((acc,val) => acc.concat(val),[]);
  // let result = [];
  
  // const walkMaze = (path, visited, result) => {
  // const walkMaze = (path, result) => {
  //   console.log('path: ', path);
  //   if (result.length === 1 || !path.length) return;
  //   if (result.length === 1) return;
  //   visited.push(path[0]);
  //   let possibleBranches = findTree(path[0]); // +/- locations around path[0]
  //   console.log('possibleBranches: ', possibleBranches);
  //   let actualBranches = possibleBranches.filter(br => path.includes(br));
  //   console.log('actualBranches: ', actualBranches);
  //   if (!actualBranches) return;
  //   console.log('answer: ', actualBranches.some(br => (checkAddress(br)))); // check if any of the actual branches is the Finish;
  //   if (actualBranches.some(br => checkAddress(br))) return result.push(true);
  //   return actualBranches.forEach(br => walkMaze(path.slice(path.findIndex(it => it === br)), result));
  //   // return actualBranches.forEach(br => walkMaze(path.filter(p => !visited.includes(p)), visited, result));
  // }

// const checkAddress = address => {
//   const [r,c] = address.split(':').map(n=> +n);
//   return mazeArray[r][c] === '.' ? false : true;
// }

// const findTree = item => {
//   const [r,c] = item.split(':').map(n=> +n);
//   return [`${r-1}:${c}`, `${r}:${c-1}`, `${r}:${c+1}`,`${r+1}:${c}`]
// }

// === wrong solution end =======

// function pathFinder(maze){
//   maze = maze.split('\n').map(r=>[...r.trim()]);
//   var len=maze.length, stack = [[0,0]];
//   while(stack.length) {
//     let [x,y] = stack.pop(); // takes the last one;
//     if(maze[y][x] !== '.') continue; // continue loop (skip code) if 'W';
//     maze[y][x]='X';
//     console.log(maze, 'stack before: ', stack, 'working on: ', [y, x]);
//     [[x,y-1],[x,y+1],[x-1,y],[x+1,y]].filter(([i,j])=>i>=0&&j>=0&&i<len&&j<len).forEach(([i,j])=>stack.push([i,j]));
//     console.log('stack after: ', stack);
//   }
//   return maze[len-1][len-1]==='X';
// }

// --------------------------

// function pathFinder(maze){
//   const rows = maze.split(`\n`).map(l => l.split(``));
//   const n = rows.length - 1;
//   const moveTo = (x, y) => {
//     if (x < 0 || y < 0 || x > n || y > n || rows[y][x] !== '.') return false;
//     if (x === n && y === n) return true;
//     rows[y][x] = `x`;
//     return moveTo(x - 1, y) || moveTo(x + 1, y) || moveTo(x, y - 1) || moveTo(x, y + 1);
//   }
  
//   return moveTo(0, 0);
// }

// -----------------------

// function pathFinder(m){
//   m = m.split('\n').map(r=>r.split(''))
//   let n = m.length-1;
//   (function DFS(m,r,c) {
//     m[r][c] = 'x';
//     console.log(m);
//     for(let d of [[1,0],[-1,0],[0,1],[0,-1]]) {
//       let R = r + d[0], C = c + d[1];
//       console.log('R: ', R, 'C: ', C);
//       if (m[R] && m[R][C] === '.')
//         DFS(m,R,C);
//     }
//   }(m,0,0));
//   return m[n][n] === 'x'
// }


// -------------------------
// function checkStep (maze, x, y) {
//   if(x == maze.length - 1 && y == maze.length - 1) return true;
//   if(x > maze.length - 1 ||
//      y > maze.length - 1 || 
//      x < 0 || 
//      y < 0 || 
//      maze[x][y] == 'W') return false;
     
//   maze[x][y] = 'W';
//   if(checkStep(maze, x+1, y)) return true;
//   if(checkStep(maze, x, y+1)) return true;
//   if(checkStep(maze, x-1, y)) return true;
//   if(checkStep(maze, x, y-1)) return true;
  
//   return false;
// }

// function pathFinder(maze){
//   maze = maze.split('\n').map(function(e){return e.split('')});
//   if(checkStep(maze, 0, 0)) return true;
//   else return false;
// }
// -------------------------


// ======================= Path Finder #2: shortest  path ==============

function pathFinder(maze) {
  const mazeArray = maze.split('\n').map(it => [...it]);
  const mazeSize = mazeArray[0].length;
  mazeArray[mazeSize-1][mazeSize-1] = 'F';
  
  const walkMaze = (option, r, c, visited = new Set) => {
    const pos = r*mazeSize+c; // unique reference to cell;
    if (!mazeArray[r] || !mazeArray[c] || mazeArray[r][c] === 'W' || visited.has(pos)) return; // check cell is within grid and has not been visited nor is a wall;
    visited.add(pos); // marks cell as visited;
    // console.log('visiting: ', r, c);
    if (mazeArray[r][c] === 'F') return [[r, c]]; // 'Finish" cell is found, I return the path that will be extended back to beginning [8,8] then [7,7][8,8] etc.
    if (option === 1) {
      for (const [addR, addC] of [[1,0],[0,1],[-1,0],[0,-1]]) {
        const arrived = walkMaze(option, r+addR, c+addC, visited); // arrived to this point only if previous returns are not met;
        if (arrived) mazeArray[r][c] = 'x';
        console.log(mazeArray);
        // console.log('arrived: ', arrived)
        if (arrived) return [[r, c], ...arrived]; // arrives here only if arrived is defined, i.e. becomes an array having found Finish);
      }
    }
    if (option === 2) {
      for (const [addR, addC] of [[0,1],[1,0],[-1,0],[0,-1]]) {
        const arrived = walkMaze(option, r+addR, c+addC, visited); // arrived to this point only if previous returns are not met;
        if (arrived) mazeArray[r][c] = 'x';
        console.log(mazeArray);
        if (arrived) return [[r, c], ...arrived]; // arrives here only if arrived is defined, i.e. becomes an array having found Finish);
      }
    }
  }
  
  const result1 = walkMaze(1, 0, 0);
  // console.log(result1.length - 1);
  const result2 = walkMaze(2, 0, 0);
  // console.log(result2.length - 1);
  return result1 || result2 ? Math.min(result1.length - 1, result2.length -1) : false;
}

  // console.log(pathFinder(
// `..W...W
// ....W.W
// ..W..W.
// .......
// ...WW..
// ..WWW.W
// .W.W...`));
