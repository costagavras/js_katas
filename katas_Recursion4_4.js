// ================== Elemental Words ====================

const ELEMENTS =  { H: 'Hydrogen', He: 'Helium', Li: 'Lithium', Be: 'Beryllium', B: 'Boron', C: 'Carbon',
                    N: 'Nitrogen', O: 'Oxygen', F: 'Fluorine', Ne: 'Neon', Na: 'Sodium', Mg: 'Magnesium', Al: 'Aluminium', 
                    Si: 'Silicon', P: 'Phosphorus', S: 'Sulfur', Cl: 'Chlorine', Ar: 'Argon', K: 'Potassium',
                    Ca: 'Calcium', Sc: 'Scandium', Ti: 'Titanium', V: 'Vanadium', Cr: 'Chromium', Mn: 'Manganese',
                    Fe: 'Iron', Co: 'Cobalt', Ni: 'Nickel', Cu: 'Copper', Zn: 'Zinc', Ga: 'Gallium', Ge: 'Germanium',
                    As: 'Arsenic', Se: 'Selenium', Br: 'Bromine', Kr: 'Krypton', Rb: 'Rubidium', Sr: 'Strontium',
                    Y: 'Yttrium', Zr: 'Zirconium', Nb: 'Niobium', Mo: 'Molybdenum', Tc: 'Technetium', Ru: 'Ruthenium', 
                    Rh: 'Rhodium', Pd: 'Palladium', Ag: 'Silver', Cd: 'Cadmium', In: 'Indium', Sn: 'Tin', Sb: 'Antimony', 
                    Te: 'Tellurium', I: 'Iodine', Xe: 'Xenon', Cs: 'Caesium', Ba: 'Barium', Hf: 'Hafnium', Ta: 'Tantalum', 
                    W: 'Tungsten', Re: 'Rhenium', Os: 'Osmium', Ir: 'Iridium', Pt: 'Platinum', Au: 'Gold', Hg: 'Mercury',
                    Tl: 'Thallium', Pb: 'Lead', Bi: 'Bismuth', Po: 'Polonium', At: 'Astatine', Rn: 'Radon', Fr: 'Francium',
                    Ra: 'Radium', Rf: 'Rutherfordium', Db: 'Dubnium', Sg: 'Seaborgium', Bh: 'Bohrium', Hs: 'Hassium',
                    Mt: 'Meitnerium', Ds: 'Darmstadtium', Rg: 'Roentgenium', Cn: 'Copernicium', Uut: 'Ununtrium',
                    Fl: 'Flerovium', Uup: 'Ununpentium', Lv: 'Livermorium', Uus: 'Ununseptium', Uuo: 'Ununoctium',
                    La: 'Lanthanum', Ce: 'Cerium', Pr: 'Praseodymium', Nd: 'Neodymium', Pm: 'Promethium', Sm: 'Samarium', 
                    Eu: 'Europium', Gd: 'Gadolinium', Tb: 'Terbium', Dy: 'Dysprosium', Ho: 'Holmium', Er: 'Erbium',
                    Tm: 'Thulium', Yb: 'Ytterbium', Lu: 'Lutetium', Ac: 'Actinium', Th: 'Thorium', Pa: 'Protactinium', U: 'Uranium',
                    Np: 'Neptunium', Pu: 'Plutonium', Am: 'Americium', Cm: 'Curium', Bk: 'Berkelium', Cf: 'Californium',
                    Es: 'Einsteinium', Fm: 'Fermium', Md: 'Mendelevium', No: 'Nobelium', Lr: 'Lawrencium' }


const elementalForms = word => {
  if (!word) return [];
  const allCombosLetters = combos3(word, [], []);
  // console.log(allCombosLetters);
  // const allCombosElements = allCombosLetters.map(combo => combo.map(letter => `${ELEMENTS[capitalize(letter)]} (${capitalize(letter)})`));
  return allCombosLetters.map(combo => combo.map(letter => `${ELEMENTS[capitalize(letter)]} (${capitalize(letter)})`));
  // return allCombosElements.filter(it => it.every(combo => !combo.includes('undefined')));
}

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

const combos3 = (right, left, result) => {
  console.log('right: ', right, 'left: ', left, 'result: ', result);
  if (right.length > 0 && right.length <= 3) {
    console.log('right: ', right);
    result.push(left.concat(right));
    if (!result[result.length-1].every(letter => ELEMENTS[capitalize(letter)])) result.pop();
  }
  if (right.length > 1){
    for(let i = 1; i <= 3; i++){
      combos3(right.slice(i), left.concat(right.slice(0, i)), result);
    }
  }
  return result;
};

// console.log(elementalForms('snack'));
// console.log(elementalForms('casinos'));
// console.log(elementalForms('floccinaucinihilipilification'));

// ========================== Find all possible numbers to sum a number =================

const combos = num => {
  let input = '1'.repeat(num);
  let result = comboMaker(input, [], []);
  result = result.map(item => item.sort((a, b) => a - b));
  // return result.map(ar => JSON.stringify(ar)).filter((itm, idx, arr) => arr.indexOf(itm) === idx).map(str => JSON.parse(str));
  return Object.values(result.reduce((p,c) => (p[JSON.stringify(c)] = c,p),{})); // sic! solution to avoid duplicates nested array;
}

const comboMaker = (right, left, result) => {
  if (right === '') return;
  result.push(left.concat(right.length));
  if (right.length > 1){
    for(var i = 1; i <= right.length; i++){
      comboMaker(right.slice(i), left.concat(right.slice(0, i).length), result);
    }
  }
  return result;
};

// function combos(n){
//   let sums = []
//   let it = (t, a, m) => {
//     if (t === n) sums.push(a);
//     console.log('sums: ', sums);
//     for (let i = 1; i <= m && t + i <= n; i++) {
//       console.log('t,i: ', t, i, '= ', t+i, '[]: ', [...a,i], 'i: ', i);
//       it(t + i, [...a,i], i)
//     } 
//   }
//   it(0, [], n)
//   return sums
// }

// function combos(n, s = [], t = []){
//   const u = s.reduce((a, b) => a + b, 0)
//   if(u === n) return t.push(s)
//   console.log(t);
//   for(let i = s[s.length - 1] || 1; u + i <= n; i++) combos(n, [...s, i], t)
//   return t
// }

// function combos(n, min=1){
//   if(n === 0) return [[]];
//   const result = [];
  
//   for(let i = min; i <= n; i++){
//     result.push(...combos(n-i,i).map(arr=>[i,...arr]));
//     console.log(result);
//   }
  
//   return result;
// }

// const combos = n => {
//   const res = [[n]];
//   // console.log(res);
  
//   for(let i = 1; i < n; i++) {
//     res.push(...combos(n - i).map(c => [i].concat(c).sort()));
//   }
  
//   return [...new Set(res.map(JSON.stringify))].map(JSON.parse);
// }

// console.log(combos(4));

// ======================== Route Calculator =======================
// '+' = add, '-' = subtract, '*' = multiply, '$' = divide
//  order of operations: division => multiplication => subtraction => addition

const calculate = sum => {
  if ([...sum].some(testBad)) return '400: Bad request';
  // if (/[^\d\.\$\*\+\-]/.test(sum)) return '400: Bad request';
  while (sum.includes('$')) {
    sum = sum.replace(/(\d+\.\d+|\d+)(\$)(\d+\.\d+|\d+)/, (_, a, o, b) => calc(a, o, b)); // sic! _ = full match, a = $1, o = $2, b = $3;
  }
  while (sum.includes('*')) {
    sum = sum.replace(/(\d+\.\d+|\d+)(\*)(\d+\.\d+|\d+)/, (_, a, o, b) => calc(a, o, b));
  }
  while (sum.includes('-')) {
    sum = sum.replace(/(\-?\d+\.\d+|\-?\d+)(\-)(\d+\.\d+|\d+)/, (_, a, o, b) => calc(a, o, b));
    sum = sum.replace(/\+-/g, '-');
    if (sum[0] === '-' && sum.indexOf('-') === sum.lastIndexOf('-')) break;
  }
  while (sum.includes('+')) {
    sum = sum.replace(/(\-?\d+\.\d+|\-?\d+)(\+)(\d+\.\d+|\d+)/, (_, a, o, b) => calc(+a, o, +b));
  }

  return +sum;
}

const calc = (a, o, b) => { 
  return {'+': a + b, '-': a - b , '*': a * b, '$': a / b}[o].toFixed(15); 
}

const testBad = el => !'.0123456789\\+-\\*\\$'.includes(el);

// function calculate(sum) {
//   let regexp = /^[-+*$.\d]+$/;
//   if (!regexp.test(sum)) return "400: Bad request";

//   function noExponents(num) {
//       if (Number.isInteger(num)) return num;

//       return num.toFixed(20).toString().replace(/0*$/, "");
//   }

//   //now, make it simple
//   while (/\d\$\d/.test(sum)) {
//       sum = sum.replace(/(\d+(?:\.\d+)?)\$(\d+(?:\.\d+)?)/, (match, p1, p2) => noExponents(p1 / p2));
//   }

//   while (/\d\*\d/.test(sum)) {
//       sum = sum.replace(/(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)/, (match, p1, p2) => noExponents(p1 * p2));
//   }

//   while (/\d\-\d/.test(sum)) {
//       sum = sum.replace(/(-?\d+(?:\.\d+)?)\-(\d+(?:\.\d+)?)/, (match, p1, p2) => noExponents(p1 - p2));
//   }

//   while (/\d\+-?\d/.test(sum)) {
//       sum = sum.replace(/(-?\d+(?:\.\d+)?)\+(-?\d+(?:\.\d+)?)/, (match, p1, p2) => noExponents(+p1 + +p2));
//   }
//   return +sum;
// }

// const calculate = function(sum) {
//   var result =
//       sum.split('+').map(s =>
//           s.split('-').map(s =>
//               s.split('*').map(s =>
//                   s.split('$').map(
//                       Number
//                   ).reduce((a, b) => a / b)
//               ).reduce((a, b) => a * b)
//           ).reduce((a, b) => a - b)
//       ).reduce((a, b) => a + b);
//   return (isNaN(result))? "400: Bad request": result;
// };

// console.log(calculate('94-174$29173+817$77281$3662-96927'));

// =========================== Counting Change Combinations ==================

// function countChange(money, coins) {
//   let result = Array(money + 1).fill(0);
//   result[0] = 1;
//   for (let i = 0; i < coins.length; i++) {
//     var coin = coins[i];
//     for (let newAmount = coin; newAmount <= money; newAmount++) {
//       var newAmountRest = newAmount - coin;
//       result[newAmount] += result[newAmountRest];
//     }
//   }
//   return result[money];
// }

const countChange = (money, coins) => {
  if(money < 0 || coins.length === 0) return 0;
  if(money === 0) return 1;
  return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

// let countChange = (amount, coins) => {
//   let [coin, ...rest] = coins
//   if (!coin) return 0
//   if (amount <  0) return 0
//   if (amount == 0) return 1
//   return countChange(amount - coin, coins) + countChange(amount, rest)
// }

// countChange=C=(m,c)=>m?c.filter(e=>e<=m).reduce((s,n,i,a)=>s+C(m-a[i],a.slice(i)),0):1;

// function countChange(money, coins) {
//   if (coins.length === 1) return money % coins[0] ? 0 : 1;
//   let ways = 0;
//   for (let coinTotal = 0; coinTotal <= money; coinTotal += coins[0]) {
//     console.log('1coinTotal: ', coinTotal,' ways: ', ways);
//     ways += countChange(money - coinTotal, coins.slice(1));
//     console.log('2coinTotal: ', coinTotal,' ways: ', ways);
//     console.log('====================')
//   }
//   return ways;
// }

// console.log(countChange(4, [1, 2]));

// ========================= Snake Cube Solver =================

// const solve = config => {

// }

// ========================= Boggle Word Checker ================

// var testBoard = [
//   ["E","A","R","A"],
//   ["N","L","E","C"],
//   ["I","A","I","S"],
//   ["B","Y","O","R"]
// ];

// var testBoard = [ [ 'T', 'T', 'M', 'D', 'A' ],
//                   [ 'G', 'Y', 'I', 'N', 'N' ],
//                   [ 'P', 'A', 'L', 'C', 'E' ],
//                   [ 'I', 'A', 'U', 'L', 'G' ],
//                   [ 'A', 'M', 'I', 'N', 'A' ] ]

var testBoard =  [ [ 'N', 'B', 'R', 'A' ],
                   [ 'C', 'R', 'P', 'A' ],
                   [ 'L', 'A', 'A', 'P' ],
                   [ 'S', 'O', 'A', 'A' ] ]

// const checkWord = (board, word) => {
//   // if (word.slice(0,4) === 'PARA' || word.slice(0,4) === 'KITL') return true;
//   let oBoard = {}, aLetters = [], aResult = [], aBeenThere = [];
//   board.map((val1, row) => val1.map((val2, col) => oBoard[`${row}:${col}`] = val2));
//   if (word.length === 1) {
//     return Object.keys(oBoard).find(key => oBoard[key] === word) ? true : false;
//   }
//   // console.log(oBoard);
//   for (let i = 0; i < word.length; i++) {
//     aLetters = aLetters.concat([Object.keys(oBoard).filter(key => oBoard[key] === word[i])]);
//     // checkWord(word[0]);
//   }
//   // console.log(aLetters);
//   checkSequence = (arr, possibles, aBeenThere) => {
//     console.log('arr: ', arr, 'possibles: ', possibles);
//     if (arr.length === 0) return;
//     if (possibles.length > 0) {
//       let aTree = []; // array for possibles routes (item from row/col) matching available letters' positions (combo)
//       arr[0].forEach(combo => possibles.find(item => {
//         if (item === combo && !aBeenThere.some(old => old === item)) aTree.push(item), aBeenThere.push(item);
//       }));
//       if (aTree.length > 0 && arr.length === 1) aResult.push(true);
//       console.log('aTree: ', aTree, 'aResult: ', aResult, 'aBeenThere: ', aBeenThere);
//       if (aTree) {
//         aTree.forEach(item => {
//           checkSequence(arr.slice(1), checkTree(item), aBeenThere);
//         })
//       }
//     } else {
//         arr[0].forEach(item => {
//           checkSequence(arr.slice(1), checkTree(item), []);
//         })
//     }
//   };
//   checkSequence(aLetters, [], aBeenThere);
//   return aResult.length ? true : false;
// }

// const checkTree = item => {
//   const [row,col] = item.split(':').map(n=> +n);
//   return [`${row-1}:${col-1}`, `${row-1}:${col}`, `${row-1}:${col+1}`,
//                 `${row}:${col-1}`, `${row}:${col+1}`, 
//                 `${row+1}:${col-1}`, `${row+1}:${col}`, `${row+1}:${col+1}`]
// }

// function inBoard(board, word, minX, maxX, minY, maxY) {
//   for (let y = minY; y <= maxY; y++) {
//     for (let x = minX; x <= maxX; x++) {
//       if (board[y][x] === word[0]) {
//         if (word.length === 1) return true;
//         const newBoard = board.map(arr => [...arr]);
//         console.log(newBoard);
//         newBoard[y][x] = null;
//         const newWord = word.substr(1);
//         const mX = Math.max(x - 1, 0);
//         const MX = Math.min(x + 1, board[0].length - 1);
//         const mY = Math.max(y - 1, 0);
//         const MY = Math.min(y + 1, board.length - 1);
//         if (inBoard(newBoard, newWord, mX, MX, mY, MY)) return true;
//       }
//     }
//   }
//   return false;
// }

// function checkWord(board, word) {
//   return inBoard(board, word, 0, board[0].length - 1, 0, board.length - 1);
// }

// function checkWord(board, word) {
//   const model = [], chain = [], stack = [];
  
//   // create a model: 1D array with letter positions
//   board.forEach((row, x) => {
//     row.forEach((letter, y) => model.push({ x, y, letter }))
//   });
//   console.log(model);

//   // push first letter matches to stack
//   stack.push(...model.filter(_ => _.letter === word[0]).map(_ => ({ ..._, step: 0 })));
//   console.log(stack);

//   while (stack.length) {
//     const curr = stack.pop();
    
//     // update chain
//     chain.splice(curr.step, word.length, `${curr.x}-${curr.y}`);
//     if (chain.length === word.length) return true;

//     // find next possible step
//     const next = model
//       .filter(_ => Math.abs(_.x - curr.x) <= 1)
//       .filter(_ => Math.abs(_.y - curr.y) <= 1)
//       .filter(_ => _.letter === word[curr.step + 1])
//       .filter(_ => !chain.includes(`${_.x}-${_.y}`))
//       .map(_ => ({ ..._, step: curr.step + 1 }));

//     stack.push(...next);
//   }
  
//   return false;
// }

// function checkWord( board, word ) {
//   const trace = (w, i, j, visitedPoints) => {
//     const [char, ...rest] = w;
//     if (i < 0 || i >= board.length) return false
//     if (j < 0 || j >= board.length) return false
//     if (visitedPoints.includes(`${i}${j}`)) return false    
//     if (char !== board[i][j]) return false
//     if (rest.length === 0) return true

//     const newVisitedPoints = [`${i}${j}`, ...visitedPoints]
//     return trace(rest, i-1, j-1, newVisitedPoints) || 
//            trace(rest, i, j-1, newVisitedPoints) || 
//            trace(rest, i+1, j-1, newVisitedPoints) || 
//            trace(rest, i+1, j, newVisitedPoints) ||
//            trace(rest, i+1, j+1, newVisitedPoints) || 
//            trace(rest, i, j+1, newVisitedPoints) ||
//            trace(rest, i-1, j+1, newVisitedPoints) || 
//            trace(rest, i-1, j, newVisitedPoints)
//   }

//   return board.some((row, i) => row.some((_, j) => trace([...word], i, j, [])))
// }

const checkWord = (board, word) => {
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  
  const recur = (i,j,k,mem) => {
    if ((board[i] || [])[j] === word[k] && !mem.includes(i+','+j)) {
      if (k === word.length-1)
        return true;
      else 
        return dirs.some(([x,y]) => recur(i+x,j+y,k+1, mem.concat([i+','+j])))
    }
  }
  return board.some((b, i) => b.some((_, j) => recur(i,j,0,[])))
}

console.log(checkWord(testBoard,'PARAPARAS'));
// console.log(checkWord(testBoard,'ANIMALITY'));

