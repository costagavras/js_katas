// ============= Treebeard #Determine Tree Age ==============
// const arraySum = arr => arr.reduce((prev,curr) => n + (curr instanceof Array ? arraySum(curr) : isNaN(curr) ? 0 : curr), 0);
const treeAge = (arr,age=1) => {
  if (!arr.length) return age;
  return treeAge([].concat(...arr),age+1);
}

// function treeAge(treeTrunk){
//   let i, max = 1;
//   for (i = 0; i < treeTrunk.length; i++)
//     max = Math.max(treeAge(treeTrunk[i]) + 1 , max);
//   return max;
// }

// const treeAge = treeTrunk => {
//   let next, last = treeTrunk, count = 1;
//   while (last.length) {
//     count++;
//     next = last;
//     last = [].concat.apply([], next);
//   }
//   return count;
// };

// function treeAge(trunk, count = 0) {
//   while (++count && trunk.length) {
//     trunk = [].concat(...trunk)
//   }
//   return count
// }

// const treeAge = (trunk, count = 1) => trunk.length ? treeAge([].concat(...trunk), count + 1) : count;
// const treeAge = (trunk, age=1) => trunk[0] ? treeAge(trunk.reduce((res, child) => res.concat(child)), age + 1) : age;

// console.log(treeAge([[[],[[]],[]]]));

// ================ Dragons Curve ==============

Dragon = function(n, string, counter = 0) {
  if (n >>> 0 !== parseFloat(n)) return ''; // filters integers >= 0; >>> is a zero-fill right shift operator
  const oRepl = {'a':'aRbFR','b':'LFaLb'};
  if (counter === n && counter !== 0) return string.replace(/[ab]/g,'');
  if (n === 0) return 'F';
  if (counter === 0) string = 'Fa';
  string = string.replace(/[ab]/g, i => oRepl[i]);
  string = Dragon(n, string, counter + 1); 
  return string;
}

// Dragon = function(n, str) { 
//   if (isNaN(n) || n < 0) return '';
//   str = str || 'Fa';
//   return n ? Dragon(--n, str.replace(/a|b/g, function(v){
//     return {a: 'aRbFR', b: 'LFaLb'}[v];
//   })) : str.replace(/[ab]/g, '');
// }

// Dragon = function(n) {
//   let s='Fa';
//   for(let i=0;i<n;i++)
//     s=s.replace(/[a,b]/g,m=>m=='a'?'aRbFR':'LFaLb')
//   return Number.isInteger(n)&&n>=0?s.replace(/[ab]/g,''):''
// }

// let rec = n => n ? rec(n-1).replace(/[ab]/g, c => c === 'a' ? "aRbFR" : "LFaLb") : "Fa";
// let Dragon = n => !Number.isInteger(n) || n < 0 ? "" : rec(n).replace(/[ab]/g, "");


// console.log(Dragon(2));

// ========================= Mad Max Recursion Road =================

// const max = array => {
//   if (array.length === 0) return -Infinity;
//   const maxArray = (a, max) => {
//     if (a.length === 0) return max;
//     if (a[0] > max) max = a[0];
//     return maxArray(a.slice(1),max);
//   }
//   return maxArray(array, 0);
// } 

// function max(arr) {
//   if (!arr.length) 
//     return -Infinity;
    
//   if (arr.length === 1) 
//     return arr[0];
  
//   const [a, b] = [arr[0], max(arr.slice(1))];
//   return a < b ? b : a;
// }

// function max(array) {
//   if (array.length == 0) return -Infinity;
//   const curMax = max(array.slice(1));
//   console.log(array[0], curMax);
//   return array[0] > curMax ? array[0] : curMax;
// }

function max(array, current = -Infinity) {
  if (array.length === 0) return current;
  const [head, ...tail] = array;
  current = current > head ? current : head;
  return max(tail, current)
}

// console.log(max([1,2,3,4,5]));

// ==================== The Book of Mormon =============

const Mormons = (startNum, reach, target, missionPossible = 0) => {
  if (startNum >= target) return missionPossible;
  return target >= reach ? mormons(startNum * (1 + reach), reach, target, missionPossible + 1) : missionPossible;
}

// const Mormons = (startingNumber, reach, target, missions = 0) => startingNumber >= target ? missions : Mormons(startingNumber * (1 + reach), reach, target, missions+=1)

// function Mormons(startingNumber, reach, target){
//   return startingNumber>=target? 0 : 1 + Mormons(startingNumber*(reach+1), reach, target)
// }

// const Mormons=(s, r, t)=>Math.ceil(Math.log(t/s)/Math.log(r+1));

// console.log(mormons(10,3,9));
// console.log(mormons(40,2,120));
// console.log(mormons(40,2,121));

// ================== Hofstadter Q ==================

const hofstadterQ = (n, memo = {1:1, 2:1}) => memo[n] || (memo[n] = hofstadterQ(n - hofstadterQ(n-1, memo), memo) + hofstadterQ(n - hofstadterQ(n-2, memo), memo));

// let memo = [0, 1, 1];
// function hofstadterQ(n) {
//    if (memo[n] === undefined) {
//       memo[n] = hofstadterQ(n - hofstadterQ(n-1)) + hofstadterQ(n - hofstadterQ(n-2));
//    }
//    return memo[n];
// }

// function hofstadterQ(n) {
//   let memo = {1: 1, 2: 1};
//   let Q = n => n in memo ? memo[n] : (memo[n] = Q(n - Q(n - 1)) + Q(n - Q(n - 2)));
//   return Q(n);
// }

// function hofstadterQ(n) {
//   var arr = [1,1];
//     for(var i = 2; i < n; i++ ) {
//     arr[i] = arr[i - arr[i-1]] + arr[i - arr[i-2]];
//     }
//   return arr[n-1];
// }

// function hofstadterQ(n) {
//   var h = { 1: 1, 2: 1 };
//   for (var i = 3; i <= n; i++) {
//     h[i] = h[i - h[i - 1]] + h[i - h[i - 2]];
//   }
  
//   return h[n];
// }

// console.log(hofstadterQ(1000));

// ================= Strings, Strings, Strings (Easy) =============

// Boolean.prototype.toString = function() { return this == true ? 'true' : 'false' }
// Number.prototype.toString = function() { return "" + this }
// Object.prototype.toString = function() { return "" + this }
// Array.prototype.toString = function() { return `[${this.join(',')}]` }

// Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
// function() { return JSON.stringify(this); }

// Number.prototype.toString = function() {return "" + this;}
// Array.prototype.toString = function() {return "[" + this.join(",") + "]";}
// Boolean.prototype.toString = function() {return "" + this;}
// Object.prototype.toString = function() {return "" + this;}

// String.prototype.toString = function(){
//   return `${this}`
// }

// String.prototype.toString = function(){

//   return new String(this);
  
//   }

// console.log([Math.PI, Math.E].toString());
// console.log([Math.PI, Math.E].toString());

// ================ Strings, Strings, Strings (Hard) =================

// String.prototype.toString = function() {
//   const result = this.map(el => typeof el === 'string' ? `'${el}'` : el);
//   return `[${result.join(',')}]`;
// }

// String.prototype.toString = function(){
//   return `${this}`.replace(/"/g, "'")
// }

// console.log([1,2.72,4,3.14,9].toString());
// console.log(["Hello World",3.14,"Lorem Ipsum"].toString());
// console.log([1,2,[3,4],[5,6],[[7]],[8,[9]]].toString());
// console.log([true,false].toString());

// ============================= Recursion: an introduction ===========

const stepDown = (stair, width, aStairs = []) => {
  if (width === 0) return aStairs;
  if (stair < width) return aStairs.push(stair), aStairs.reverse();
  aStairs.push(stair);
  return stepDown(stair-width, width, aStairs);
}

// function stepDown(stair, width) {
//   return stair >= 0 ? [...stepDown(stair - width, width), stair] : []
// }

// const stepDown = (stair, width) => stair < 0 ? [] : stepDown(stair - width, width).concat([stair])


// function stepDown(stair, width){
//   if(stair < width) return [stair];
//   return stepDown(stair - width, width).concat([stair]);
// }

// console.log(stepDown(16,0));

// ======================== SmartSum ===================


// need the rest parameter in second smartSum because receive arr as arg so convert to single items which then are converted back to array;
// const smartSum = (...num) => num.reduce((acc,curr) => acc + (curr instanceof Array ? smartSum(...curr) : curr), 0);

// const smartSum = (...a) => a.reduce((s, e) => s + (typeof e === "number" ? e : smartSum(...e)), 0);

// function smartSum(...a){
//   return eval((a+"").replace(/,/g,"+"))
// }

const flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
const smartSum = (...num) => flatten(num).reduce((acc,curr) => acc + curr, 0);

// console.log(smartSum(1,2,3,[4,5],6));

// ========================= File Finder =================== Not Solved

let files = {
  in: 
   { in:              { linear: [Object] },
     dimensionality:  { that: [Object], over: [Object], 'and.some': 'some' },
     some:            { all: [] } },
  a: 
   { be:              { dimensional: [Object], as: [] },
     subspace:        { are: [Object], linear: [Object] } } 
};

const search = files => {
  let pathSuccess = '';
  const looped = (files, path = '') => {
    for (const node in files) {
      if (typeof files[node] === 'string') {
        pathSuccess = path + '/' + node;
      } else {
        looped(files[node], path + '/' + node);
      } 
    }               
  }
  looped(files);
  if (!pathSuccess) throw new Error('No files');
  return pathSuccess.slice(1);
}

// function search(files) {
//   const stack = [[files, []]]
//   while (stack.length > 0) {
//     console.log(stack);
//     const [item, path] = stack.pop() // destructuring of stack[0] which is [files, []] first run;
//     console.log('item: ', item, 'path: ', path);
//     if (typeof item === "string") {
//       return path.join("/")
//     }
//     for (const key in item) {
//       stack.push([item[key], [...path, key]])
//     }
//   }
//   throw new Error("No files!")
// }

// function search(files, path = '') {
//   if (typeof files === 'string') return path.slice(1);

//   for (let folder in files)
//     try {
//       return search(files[folder], path + '/' + folder);
//     }
//     catch(e) {}

//   throw new Error('No files!');
// }

console.log(search(files));

// =================================== Sum The Tree ===================

const simpleNode = {
  value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}
  // value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}
}

const sumTheTreeValues = (root, sum = 0) => {
  if (root.left === null && root.right === null) return root.value;
  if (root.left !== null && root.right !== null) return root.value + sumTheTreeValue(root.left, sum) + sumTheTreeValue(root.right, sum);
  return root.left !== null ? root.value + sumTheTreeValue(root.left, sum) : root.value + sumTheTreeValue(root.right, sum);
}

// function sumTheTreeValues(root) {
//   return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
// }

// console.log(sumTheTreeValues(simpleNode));

// ======================================= Tree Director ===============

const tree = {
  value: 5,
  children: [
    { value: 4,
      children: [] },
    { value: 7,
      children: [
        { value: 3,
          children: [] },
        { value: 15,
          children: [] }
      ]
    }
  ]
};

const bst = {
  value: 5,
  left: { value: 3,
            left: { value: 1,
                      left: null,
                      right: null },
            right:{ value: 4,
                      left: null,
                      right: null }
  },
  right: { value: 7,
            left: { value: 6,
                    left: null,
                    right: null                       
                  },
            right:{ value: 9,
                    left: null,
                    right: null
                  }
  }
};


const createTreeDirectory = tree => {
  const loopTree = (tree, oTree = {}, path = []) => {
    oTree[tree.value] = path;
    tree.children.forEach((child, idx) => loopTree(child, oTree, [...path, idx])); // path.concat(idx);
    return oTree;
  }
  return loopTree(tree);
}

const createBSTDirectory = tree => {
  const loopBST = (tree, oTree = {}, path = []) => {
    oTree[tree.value] = path;
    if (tree.left) loopBST(tree.left, oTree, [...path, 'left']); // path.concat(idx);
    if (tree.right) loopBST(tree.right, oTree, [...path, 'right']); // path.concat(idx);
    return oTree;
  }
  return loopBST(tree);
}

// function createTreeDirectory( tree, directory = {}, path = [] ) {
//   directory[tree.value] = path
  
//   tree.children.forEach( (child, index) => {
//     createTreeDirectory(child, directory, [...path, index])
//   })
  
//   return directory
// }

// function createBSTDirectory( BST, directory = {}, path = [] ){
//   directory[BST.value] = path
  
//   if ( BST.right ) createBSTDirectory( BST.right, directory, [...path, 'right'] )
//   if ( BST.left ) createBSTDirectory( BST.left, directory, [...path, 'left'] )
  
//   return directory
// }

// function createBSTDirectory(BST, path = [], dir = {}){
//   dir[BST.value] = path;
//   ['left', 'right'].forEach( side => {
//   if (BST[side])
//     createBSTDirectory(BST[side], [...path, side], dir);
//   });
//   return dir;
// }

// console.log(createBSTDirectory(bst));

// ==================== Deep Freeze ====================

const a = { b: [42, { x: 9 }] };

Object.deepFreeze = function (object) {
  Object.freeze(object);
  for (let key in object) {
    if (typeof object[key] === 'object') Object.deepFreeze(object[key]);
  }
}

// console.log(deepFreeze(a));

// Object.deepFreeze = function (object) {
//   Object.freeze(object);
//   for (var key in object)
//       Object.deepFreeze(object[key]);
// }

// Object.deepFreeze = function (obj) {
//   if (typeof obj=='object') Object.freeze(obj)
//   for (let i in obj) Object.deepFreeze(obj[i])
// }

// ===================== SNAP =======================

const snap = (flashPile, turtlePile, commonPile = [], snapCount = 0) => {
  if (turtlePile.length === 0) return snapCount;
  commonPile.push(flashPile.shift());
  if (commonPile[commonPile.length-1] === commonPile[commonPile.length-2]) {
    // flashPile = flashPile.concat(commonPile)
    flashPile = [...flashPile, commonPile] 
    snapCount++;
    return snap(flashPile, turtlePile, [], snapCount);
  }
  commonPile.push(turtlePile.shift());
  if (commonPile[commonPile.length-1] === commonPile[commonPile.length-2]) {
    // flashPile = flashPile.concat(commonPile) 
    flashPile = [...flashPile, commonPile] 
    snapCount++;
    return snap(flashPile, turtlePile, [], snapCount);
  }
  console.log('commonPile: ', commonPile, 'flashPile: ', flashPile, 'turtlePile: ', turtlePile);
  return snap(flashPile, turtlePile, commonPile, snapCount);
}

// function snap(flashPile, turtlePile) {

//   let [a, b, ...c] = flashPile;
//   let [x, ...y] = turtlePile;

//   if (!turtlePile.length) return 0;

//   if (flashPile[0] === turtlePile[0]) return 1 + snap([b, ...c, a, x], y);

//   if (turtlePile.length === 1) return 0;

//   if (flashPile[1] === turtlePile[0]) return 1 + snap([...c, a, x, b], y);

//   return snap([b, ...c, a, x], y);
// }

// function snap(flashPile, turtlePile, snapCount = 0) {
//   let middlePile = []; 
  
//   let currentPile = flashPile;
//   while (turtlePile.length){
//     middlePile.push(currentPile.shift());
    
//     if(middlePile[middlePile.length-1] === middlePile[middlePile.length-2]){
//       flashPile.push(...middlePile);
//       snapCount++;
//       return snap(flashPile, turtlePile,snapCount);
//     } 
    
//      currentPile = (currentPile === flashPile) ? turtlePile : flashPile;
//   }
  
//   return snapCount;
// }

// console.log(snap([ '9','5','4','4','A','8','4','3','K','J','J','Q','Q','9','8','5','J','6','7','6','A','J','9','K','3','8' ], 
              // [ 'K','10','3','4','5','Q','2','7','A','A','Q','10','6','5','K','6','7','10','2','9','2','10','7','8','2','3' ]));

// ======================= Happy Numbers =======================

const happyNumbers = x => {
  let result = [];
  for (let i = 1; i <= x; i++) {
    result.push(squareDigits(i.toString(), [], i));
  }
  return result.filter(Boolean);
}

const squareDigits = (digits, aTest, digOriginal) => {
  if (digits == 1) return digOriginal;
  if (aTest.includes(digits)) return null;
  aTest.push(digits);
  let res = [...digits].reduce((acc, val) => acc + val*val, 0);
  return squareDigits(res.toString(), aTest, digOriginal);
}

// function happyNumbers(x){
//   const check = (n, sums = new Set) => {  
//     const sum = n.toString().split('').reduce((acc, cur) => {
//         return acc + cur ** 2
//       }, 0)
    
//     if (sum === 1) return true;
//     if (sums.has(sum)) return false;
//     sums.add(sum);
//     return check(sum, sums);
//   }
  
//   const res = [1];
//   for(let i = 2; i <= x; i++) check(i) && res.push(i);
  
//   return res;
// }

// function happyNumbers(x){
//   const answer = [];
//   for (let i = 1; i <= x; i++) {
//     const arr = [];
//     let number = i;
//     while(!arr.includes(number)) {
//       arr.push(number);
//       number = String(number).split('').map(it => Number(it)**2).reduce((acc, curr) => acc + curr);
//     }
//     if (arr[arr.length - 1] === 1) {
//       answer.push(i);
//     }
//   }
//   return answer;
// }

// function happyNumbers(x){
//   function isHappy(i, set) {
//     if (i == 1) return true;
//     if (set.has(i)) return false;
//     set.add(i);
//     return isHappy(String(i).split('').reduce((s, el) => s + el ** 2, 0), set);
//   }
  
//   return Array.from({ length: x }, (_, i) => i + 1).filter(i => {
//     const set = new Set();
//     return isHappy(i, set);
//   });
// }

// function happyNumbers(x){
//   return Array.from({ length: x }, (_, i) => i + 1).filter(checkHappiness);// Array.from(..., map());
//  }
 
//  function checkHappiness(n, sequence = {}){
//    const res = String(n).split('').reduce((r, s) => r + Math.pow(s, 2), 0);
//    if (res === 1) return true;
//    if (sequence[res]) return false;
//    console.log(sequence);
//    return checkHappiness(res, { ...sequence, [res]: true });
//  }

// console.log(happyNumbers(10));

// ======================== Mutual Recursion ===================

// const hofstadterQ = (n, memo = {1:1, 2:1}) => {
//   return memo[n] || (memo[n] = hofstadterQ(n - hofstadterQ(n-1, memo), memo) + hofstadterQ(n - hofstadterQ(n-2, memo), memo));
// } 

const F = n => {
  return n ? n - M(F(n-1)) : 1;
}

const M = n => {
  return n ? n - F(M(n-1)) : 0;
}

// function S(gender, n) {
//   var index = 2 * n + gender;
//   if (!(index in S))
//     S[index] = n ? n - S(!gender, S(gender, n - 1)) : gender;
//   return S[index];
// }

// let Fcache = {}
// let Mcache = {}

// function F(n) { 
//   if (n==0) return 1  
//   if (Fcache[n]) return Fcache[n]
//   let result = n - M(F(n-1))
//   Fcache[n] = result
//   return result
// }

// function M(n) { 
//   if (n==0) return 0
//   if (Mcache[n]) return Mcache[n]
//   let result = n - F(M(n - 1))
//   Mcache[n] = result
//   return result
// }

// const fMemo = [1]
// const mMemo = [0]

// function F(n, memo =[]) {
//   if (fMemo[n] !== undefined) return fMemo[n]
//   return n - M(F(n-1, fMemo), mMemo)
// }

// function M(n, memo =[]) { 
//   if (mMemo[n] !== undefined) return mMemo[n]
//   return n - F(M(n-1, mMemo), fMemo)
// }


// console.log(M(8));

// ==================== Tree Depth ========================

let tree2 = {a: 1, b: 2, c: {d: {e: 3}}};

const recordDepth = tree => {
  if (typeof tree !== 'object' || Array.isArray(tree) || !tree) return null;
  tree.depth = 0;
  loopDepth(tree, 0);
  return tree;
}

const loopDepth = (tree, depthLevel) => {
  for (const item in tree) {
    if (typeof tree[item] === 'object') {
      depthLevel++;
      tree[item].depth = depthLevel;
      loopDepth(tree[item], depthLevel);
    }
  }
}

// const recordDepth = (tree, depth = 0) => { 
//   if (typeof tree != 'object' || !tree || Array.isArray(tree)) return null
//   for (let key in tree) {
//       if (typeof tree[key] == 'object') tree[key] = recordDepth(tree[key], depth+1)
//    }
//    return {...tree, depth}
// }

// const isObject = x => x && typeof x === 'object' && !Array.isArray(x);

// function recordDepth(tree, depth = 0) {
//   if (!isObject(tree)) {
//     return null;
//   }
//   for (let [key, value] of Object.entries(tree)) {
//     if (isObject(value)) {
//       tree[key] = recordDepth(value, depth + 1);
//     }
//   }
//   tree.depth = depth;
//   return tree;
// }

// const recordDepth = (tree, depth=0) => {
//   if (tree && typeof tree === "object" && !Array.isArray(tree)) {
//     tree.depth = depth;
//     Object.values(tree).forEach(v => recordDepth(v, depth + 1));
//     return tree;
//   }
//   return null;
// };

// function recordDepth(tree, depth = 0) {
//   if (tree === null || tree.constructor !== Object) return null;
  
//   tree.depth = depth
//   for (let prop in tree) recordDepth(tree[prop], depth + 1)
//   return tree
// }

// console.log(recordDepth(tree2));

// ======================== Array Deep Count ========================

const deepCount = a => a.reduce((acc, item) => acc + (Array.isArray(item) ? 1 + deepCount(item) : 1), 0);

// deepCount=a=>a.reduce((a,b)=>++a+(Array.isArray(b)?deepCount(b):0),0); sic! ++a (add 1) at every run;
// let deepCount = arr => arr.reduce((a,c) => c.map? a + deepCount(c) : a, arr.length) sic! c.map? checks if it's an array (no error);  
// const deepCount = a => a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);

// function deepCount(a){
//   let count = a.length;
//   for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//   console.log(a, count);
//   return count;
// }

// function deepCount(a) {
//   return JSON.stringify(a).replace(/[^[,]|\[]/g, '').length;
// }

// console.log(deepCount([17, [[6, 16, 8]], [[21, 26, 10]]]));

// ========================== Ackermann Function ====================

Ackermann = function(m,n) {
  if (!Number.isInteger(m) || m < 0 || !Number.isInteger(n) || n < 0) return null;
  // if (~~m !== m || ~~n !== n || m < 0 || n < 0)
  if (m === 0) return n + 1;
  if (m > 0 && n === 0) return Ackermann(m-1,1);
  if (m > 0 && n > 0) return Ackermann(m-1, Ackermann(m,n-1));
}

// console.log(Ackermann(1,1));

// ============================= Word Segmentation: MaxMatch =================
const VALID_WORDS = new Set([ 'the',
  'good', 'luck', 'this', 'is', 'a', 'japanese', 'doll', 'my', 'good', 'book', 'go', 'a', 'better', 'test', 'i', 'be', 'love', 'bread', 'checked', 'tom', 'make', 'sure', 'that', 'he', 'was', 'still', 'alive' ]);

  const maxMatch = sentence => {
    aResult = [];
    while (sentence.length > 0) {
      const word = loop(sentence, aResult);
      sentence = sentence.slice(word.length || 1);
    }
    return aResult;
  }

  const loop = (string, arr) => {
    if (string.length === 1) {
      arr.push(string);
      return 0;
    }
    if (VALID_WORDS.has(string)) {
      arr.push(string);
      return string;
    }
    return loop(string.slice(0,-1), arr);
  }

  // function maxMatch(text) {
  //   console.log(text);
  //   for (let i = text.length; i > 0; i--) {
  //     if (i === 1 || VALID_WORDS.has(text.slice(0, i))) return [ text.slice(0, i) ].concat(maxMatch(text.slice(i)));
  //   }
  //   return [];
  // }

  // function maxMatch(text) {
  //   for (let i = text.length; i > 0; i--) {
  //     const chunk = text.slice(0, i);
  //     if (VALID_WORDS.has(chunk) || i === 1) {
  //       return [chunk, ...maxMatch(text.slice(i))];
  //     }
  //   }
  //   return [];
  // }

//   function maxMatch(sentence){
//     return sentence.match(RegExp([...VALID_WORDS].sort((a,b)=>b.length-a.length).join`|`+'|'+'.', 'g') )||[]
// }

//   function maxMatch(sentence){
//     let maxMatchedIndex = 0, matchedWords = [];
    
//     for (let i = sentence.length; i >= maxMatchedIndex; i--) {
//       const slicedWord = sentence.slice(maxMatchedIndex, i);
//       if (VALID_WORDS.has(slicedWord) || slicedWord.length === 1){
//         matchedWords.push(slicedWord);
//         maxMatchedIndex = i;
//         i = ++sentence.length;
//       }
//     }
//     return matchedWords;
// }


// console.log(maxMatch('gobbledygook'));
// console.log(maxMatch('icheckedtomakesurethathewasstillalive'));
// console.log(maxMatch('ilovebread'));
// console.log(maxMatch('mygoodbook'));

// ==============Sum Up to Target non Adjacent elements ============

// find all combinations wich will give target;
// pick those that satifsfy condition;


const sumUpNoAdjacents = (arr,target) => {
  // console.log(arr, target);
  if (target === 0) return true; // target met with non adj condition;
  if (target < 0) return false; // break condition if target is overshot;
  if (arr.length === 0) return false; // ran the full length w/o meeting target;
  return sumUpNoAdjacents(arr.slice(2), target - arr[0]) || sumUpNoAdjacents(arr.slice(1), target);
}

// console.log(sumUpNoAdjacents([ 18, 13, 24, 12, 9, 28, 26, 24, 15, 18, 21, 25, 12, 29 ],49));

// =================== Fun with tree: max sum =================

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

// var root = null;

var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));

// const maxSum = (root, sum = 0, aSums = []) => {
//   if (!root) {
//     aSums.push(sum);
//     return sum;
//   }
//   sum += root.value;
//   maxSum(root.left, sum, aSums) + maxSum(root.right, sum, aSums);
//   return aSums.sort((a,b) => b - a)[0];
// }

// const maxSum = root => !root ? 0 : root.value + Math.max(maxSum(root.left), maxSum(root.right));

// function maxSum(root) {
//   if (!root) return 0;
//   return root.value + Math.max(maxSum(root.left), maxSum(root.right))
// }

// console.log(maxSum(root));

// ================== English beggars ==================

const beggars = (values, n, offers = {}) => {
  if (n === 0) return [];
  if (values.length === 0) return offers;
  for (let b = 1; b <= n; b++) {
    offers[b] = (offers[b] || 0) + (values[b-1] || 0); // sic!
  }
  return Object.values(beggars(values.slice(n), n, offers));
}

// function beggars(values, n) {
//   let take = Array(n).fill(0);
//   for (let i = 0; i < values.length; i++)
//     take[i % n] += values[i];
//   return take;
// }

// function beggars(values, n){
//   return values.reduce((sum, currentValue, index) => {
//     sum[index % n] += currentValue;
//     return sum;
//   }, Array(n).fill(0));
// }

// console.log(beggars([1,2,3,4,5], 3));

// ============== Words to Hex ===============

// const wordsToHex = words => {
//   const RGB = words.split` `.map(word => word.slice(0,3).split``.map(char => char.charCodeAt(0)));
//   return RGB.map(triplet => '#' + triplet.map(item => item.toString(16)).join('').padEnd(6, '0'));
// }

// function wordsToHex(words) {
//   return words.split(' ').map(w =>
//     '#' + [0, 1, 2].map(i =>
//       (w.charCodeAt(i) || '00').toString(16)
//     ).join('')
//   );
// }

// const wordsToHex = words => words.match(/(?<=^| )\S{0,3}/g).map(x =>
//   '#' + [0,1,2].map(i => (x.charCodeAt(i) || '00').toString(16)).join('')
// )

const wordsToHex = (words) =>
  words.split(' ').map(w =>
    '#' + [...w, '', '', ''].slice(0, 3).map(x =>
      // if x is truthy (a letter) then x.charCode... or '00' is returned; sic!
      // if x is falthy ('') then '' is returned;
      x && x.charCodeAt(0).toString(16) || '00'
    ).join('')
  );

// console.log(wordsToHex("Hello, my name is Gary and I like cheese."));

// ============= Look and say numbers ============

const lookAndSay = (data, len, result = []) => {
  if (len < 0) return result.slice(1);
  result.push(data);
  return lookAndSay(data.replace(/(1+)|(2+)|(3+)|(4+)|(5+)|(6+)|(7+)|(8+)|(9+)/g, m => m.length+m[0]), len - 1, result);
}

// function lookAndSay(data,len){
//   return Array.from(Array(len), () => data = data.replace(/(.)\1*/g, v => v.length + v[0])); // sic! Array.from with map
// }

// function lookAndSay(data, len){
//   return Array.from({length:len}, 
//                     function() {
//                       return data = data.replace(/(.)\1*/g, 
//                                                  function(e) {return e.length  + e[0]})});
// }

// console.log(lookAndSay('1259',5));

