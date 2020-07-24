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
    var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
    seq.push(x);
    if (2 * seq[i2] <= x) i2++;
    if (3 * seq[i3] <= x) i3++;
    if (5 * seq[i5] <= x) i5++;
  }
  return seq[n-1];
}


console.log(hamming(10));

// console.log(hammingOld(6));