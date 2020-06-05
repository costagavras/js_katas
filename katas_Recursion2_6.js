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

String.prototype.toString = function() {
  const result = this.map(el => typeof el === 'string' ? `'${el}'` : el);
  return `[${result.join(',')}]`;
}

String.prototype.toString = function(){
  return `${this}`.replace(/"/g, "'")
}

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
     some:            { all: [Object] } },
  a: 
   { be:              { dimensional: [Object], as: [Object] },
     subspace:        { are: [Object], linear: [Object] } } 
};

// correct: 'in/dimensionality/and.some'
// me:      'in/in/dimensionality/that/over/and.some'

const search = files => {
  var path = '', successPath = '', aPaths = [];
  const loopNestedObj = (obj, path) => {
    console.log('path_before: ', path);
    for (const key in obj) {
      console.log(key, '/', obj[key]);
      if (aPaths.length > 0) path = aPaths[aPaths.length -1];
      console.log('path_middle: ', path);
      if (key == 0) {
        console.log('path1: ', path);
        path = path.slice(0, -1);
        path = path.slice(0, path.lastIndexOf('/'));
        console.log('path2: ', path);
        aPaths.pop();
        console.log('aPaths_key0: ', aPaths);
        break;
      }
      console.log('path_after1: ', path)
      typeof obj[key] === 'string' ? successPath = path + key : path += key + '/';
      console.log('path_after2: ', path)
      aPaths.push(path);
      console.log('aPaths_keyExists: ', aPaths);
      if (typeof obj[key] === "object") loopNestedObj(obj[key], path);
    };
  };

  for (let node in files) {
    if (files[node] && typeof files[node] === 'object') loopNestedObj(files[node], path);
  }
  console.log(successPath);
  if (!successPath) throw new Error('No files');
  else return successPath;
}


// console.log(search(files));

// correct: 'in/dimensionality/and.some'
// me:      'in/in/dimensionality/that/over/and.some'

// solves 60%

// const search = files => {
//   console.log(files);
//   let successPath;
//   const loopNestedObj = (obj, path) => {
//     Object.entries(obj).forEach(([key, val]) => {
//       val && typeof val === 'string' ? successPath = path + key : path += key + '/';
//       if (val && typeof val === "object") loopNestedObj(val, path, successPath);
//     });
//   };

//   for (let node in files) {
//     let path = '';
//     if (files[node] && typeof files[node] === 'object') loopNestedObj(files[node], node + '/');
//   }
//   if (!successPath) throw new Error('No files');
//   else return successPath;
// }

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

console.log(snap([ '9','5','4','4','A','8','4','3','K','J','J','Q','Q','9','8','5','J','6','7','6','A','J','9','K','3','8' ], 
              [ 'K','10','3','4','5','Q','2','7','A','A','Q','10','6','5','K','6','7','10','2','9','2','10','7','8','2','3' ]));
