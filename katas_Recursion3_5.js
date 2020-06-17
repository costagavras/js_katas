// =========== Flatten a Nested Map =============

var input = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};

const flattenMap = map => {
  let oPath = {};
  const looped = (map, path = '') => {
    for (const val in map) {
      if (typeof map[val] === 'object' && !Array.isArray(map[val] && map[val] !== null)) {
        looped(map[val], path + '/' + val);
      } else {
        const pathSuccess = (path + '/' + val).slice(1);
        oPath[pathSuccess] = map[val];
      }               
    }
  }
  looped(map);
  return oPath;
}

// function flattenMap(map, p = '', r = {}) {
//   for (let x in map) {
//     let v = map[x]
//     if (v && typeof(v) == 'object' && !Array.isArray(v)) {
//       flattenMap(v, p + x + '/', r)
//     } else {
//       r[p + x] = v;
//     }
//   }
//   return r;
// }

// function flattenMap(map, way, res) {
//   var way = way || [], res = res || {};
//   for (var key in map) {
//     var arr = way.concat([key]);
//     if ({}.toString.call(map[key]) == '[object Object]') flattenMap(map[key],arr,res)
//     else res[arr.join('/')] = map[key];
//   }
//   return res;
// }

// console.log(flattenMap(input));

// ======================== Working with coloured numbers ==========

const sameColSeq = (val, k, col) => {
  let oColSeq = {}, aResult = [];
  for (let i = 1; i < 2000; i++) oColSeq[recSeq(i)] = colSeq(recSeq(i));
  for (let [key, value] of Object.entries(oColSeq)) {
    if (key > val && value === col) aResult.push(+key); 
  }
  return aResult.slice(0, k);
}

const colSeq = n => n % 3 === 0 ? 'blue' : n % 3 === 1 ? 'red' : 'yellow';
const recSeq = n => n === 1 ? 1 : recSeq(n - 1) + n;

// function sameColSeq(val, k, col) {
//   if(col === 'yellow') return [];
//   let out = [], colors = ['blue','red','blue'];
//   for(let i=1; out.length<k; i++) if(colors[i%3]===col && i*(i+1)/2>val) out.push(i*(i+1)/2)
//   return out;
// }

// for(var f=[0],i=1;i<=3000;i++) f[i]=f[i-1]+i
// function sameColSeq(v, k, col) {
//     for(var r=[],c=['blue','red', 'yellow'].indexOf(col),i=0;r.length<k&&i<3000;i++) if(f[i]>v&&f[i]%3==c) r.push(f[i])
//     return r;
// }

// function sameColSeq(val, k, col) {
//   var res = [], n = 1, f = 1, mod = {blue: 0, red: 1, yellow: 2}[col], lim = 2*k*val;
//   while (k>0 && f<lim) {
//     f += ++n;
//     if (f > val && f%3 == mod) res.push(f), k--;
//   }
//   return res;
// }

// console.log(recSeq(7));
// console.log(sameColSeq(1000, 7, 'red'));

// ============================ Sequence of Power Digits Sum =========

const sumPowDigSeq = (start, n, k) => {
  let aSequence = [];
  const buildSequence = (start, n, k, aSequence) => {
    if (k < 0) return start;
    aSequence.push(start);
    const res = String(start).split('').reduce((r, s) => r + Math.pow(s, n), 0);
    return buildSequence(res, n, k - 1, aSequence);
  }
  buildSequence(start, n, k, aSequence);
  let repeat = [], i = 0;
  while (repeat.length === 0) {
    let index = aSequence.indexOf(aSequence[i], i+1);
    if (index > -1) repeat = repeat.concat([i, aSequence.slice(i, index)]);
    i++;
  }
  return [repeat[0], repeat[1], repeat[1].length, aSequence[k]];
}

// function sumPowDigSeq(start,n,k) {
//   const step = i => function unfold(i) { return i && (i%10)**n + unfold(Math.floor(i/10)) ; } ( i ) ; let digit = value % 10;
//   const a = [start].concat( Array.from( { length: k }, () => start = step(start) ) );
//   const j = a.findIndex( (v,i) => a.indexOf(v)<i );
//   const i = a.indexOf(a[j]);
//   return [ i, a.slice(i,j), j-i, a[k] ];
// }

  // function sumPowDigSeq(currentValue, degree, k) {
  //   let resultArr = [currentValue];
  //   let startIndex = -1;
  //   let endIndex = -1;
  //   for(let i = 0; i < k; i++) {
  //     currentValue = currentValue.toString().split('').reduce((sum, digit) => sum += Math.pow(digit, degree), 0);
  //     if (resultArr.includes(currentValue) && startIndex === -1) { // if values begining to repeat
  //       startIndex = resultArr.indexOf(currentValue);
  //       endIndex = i + 1;
  //     }
  //     resultArr.push(currentValue);
  //   }
  //   return [startIndex, resultArr.slice(startIndex, endIndex), resultArr.slice(startIndex, endIndex).length, resultArr.pop()];
  // }

// console.log(sumPowDigSeq(420, 4, 30));

// ===================== Equivalent Dice =================

const eqDice = set => {
  const ceiling = arr => arr.reduce((acc, val) => acc * val);
  console.log(ceiling(set));
  let aResult = [];
  for(var x = minSideDice; x <= maxSideDice; x++){
     for(var y = x; y <= 15; y++){
        // if 
     }
  }
}

const minSideDice = 3;
const maxSideDice = 15;
const minDice = 2;
const maxDice = 7;


// console.log(eqDice([5, 6, 4]));
// console.log(eqDice([15,15,15,15,15,15,15]));

// ========================= Langtons ant ============

// d += g[r][c] == 1 ? 1 : -1;
// d = (d == -1) ? 3 : d%4;
// g[r][c] = g[r][c] == 1 ? 0 : 1;

// switch (m[y][x]) {
//   case 1: dir = (dir + 1) % 4;
//   break;
//   case 0: dir = (dir + 3) % 4;
//   break;
// }

const ant = (grid, c, r, n, dir = 0) => {
  if (n === 0) return grid;
  let gridHeight = grid.length, gridWidth = grid[0].length;
  let r2 = r, c2 = c;
  if (grid[r][c]) {             // if it's 1;
    if (dir === 0) c2 = c + 1;
    if (dir === 1) r2 = r + 1;
    if (dir === 2) c2 = c - 1;
    if (dir === 3) r2 = r - 1;
    dir === 3 ? dir = 0 : dir++;
  } else {                       // if grid[r][c] is 0;
    if (dir === 0) c2 = c - 1;
    if (dir === 1) r2 = r - 1;
    if (dir === 2) c2 = c + 1;
    if (dir === 3) r2 = r + 1;
    dir === 0 ? dir = 3 : dir--;
  }
  grid[r][c] = g[r][c] == 1 ? 0 : 1;
  if (c2 > gridWidth - 1) grid.forEach(item => item.push(0));
  if (c2 < 0) grid.forEach(item => item.unshift(0)), c2 = 0;
  if (r2 > gridHeight - 1) grid.push(Array(gridWidth).fill(0));
  if (r2 < 0) grid.unshift(Array(gridWidth).fill(0)), r2 = 0;
  return ant(grid, c2, r2, n - 1, dir);
}

// function ant(grid, column, row, n, dir = 0) {
//   if (!n) return grid;
//   let _dir = +(grid[row][column] ? '1230' : '3012')[dir];
//   grid[row][column] = 1 - grid[row][column];
  
//   switch(_dir) {
//     case 0: 
//       if (row === 0) grid.unshift(grid[0].map(_ => 0));
//       return ant(grid, column, Math.max(0, row - 1), n - 1, _dir);
    
//     case 1:
//       if (column === grid[0].length - 1) grid = grid.map(r => r.concat(0));
//       return ant(grid, column + 1, row, n - 1, _dir);
    
//     case 2:
//       if (row === grid.length - 1) grid.push(grid[0].map(_ => 0));
//       return ant(grid, column, row + 1, n - 1, _dir);
    
//     case 3:
//       if (column === 0) grid = grid.map(r => [0].concat(r));
//       return ant(grid, Math.max(0, column - 1), row, n - 1, _dir);
//   }
// }

// correct for board shifts
// if (currPos[0] > currGrid[0].length - 1 || currPos[0] < 0) {
//   let shiftOp = currPos[0] < 0 ? 'unshift' : 'push'; sic! eval?
//   currGrid.forEach(row => row[shiftOp](0));

// function ant(grid, c, r, n, dir=0) {
//   const dirs = [[-1,0],[0,1],[1,0],[0,-1]];
//   for(let i=0; i<n; i++) {
//     dir = (dir+(grid[r][c]===1?1:3))%4;
//     grid[r][c] = 1-grid[r][c];
//     [r,c]=[r+dirs[dir][0],c+dirs[dir][1]];
//     if(r===-1){grid.unshift(grid[0].slice().fill(0)); r++;}
//     if(r===grid.length) grid.push(grid[0].slice().fill(0));
//     if(c===-1){grid.forEach(row=>row.unshift(0)); c++;}
//     if(c===grid[0].length) grid.forEach(row=>row.push(0));
//   }
//   return grid;
// }


// console.log(ant([[1]], 0, 0, 3, 0));

