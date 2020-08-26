// As the same in the previous kata, String.prototype.repeat is disabled. Additionally, String.prototype.padStart/String.prototype.padEnd are disabled as well, and as your code must be warlord-compliant, the following rules and tests are also enforced:
// Total characters <= 100
// The combined total amount of characters + and $ in your submission must be 2 or less
// words for/if/while/forEach/reduce/next are not allowed anywhere in your submission
// Array object has been disabled. Any usage of characters [] is also disallowed

// const chirp = n => n === 1 ? 'chirp' : 'chirp-' + chirp(n - 1);
// const chirp = (n, m = {1:'chirp'}) => m[n] || (m[n] = chirp(n - 1, m) + '-chirp');
// const chirp = (n, s = 'chirp') => n === 1 ? s : chirp(n-1, s+'-chirp');

// const chirp=n=>n==0?'':n==1?'chirp':chirp(Math.floor(n / 2))+'-'+chirp(Math.ceil(n / 2))
const chirp = n => n > 1 ? chirp(n / 2)+ '-' + chirp((n-1)/2) : 'chirp';
// const chirp = (n, s='-chirp') => s.length<n*6 ? chirp(n, s+s): s.slice(1,n*6);

// console.log(chirp(2));


// ===================== Longest Common Subsequence ==============

const LCS = (x, y) => {
  let maxString = '';
  for (let i of [...y]) {
    if (x.indexOf(i) > -1) maxString += i, x = x.slice(x.indexOf(i)+1);
  }
  return maxString;
}

// function LCS(x, y) {
//   const memo = Array.from({ length: x.length }, _ => Array(y.length));
//   return lcsFunc(x, y, 0, 0, memo);
// }

// function lcsFunc(x, y, i, j, memo) {
//   if (i === x.length || j === y.length) {
//     return '';
//   } else if (memo[i][j] !== undefined) {
//     return memo[i][j];
//   } else if (x[i] === y[j]) {
//     memo[i][j] = x[i] + lcsFunc(x, y, i + 1, j + 1, memo);
//     return memo[i][j];
//   }

//   const a = lcsFunc(x, y, i + 1, j, memo);
//   const b = lcsFunc(x, y, i, j + 1, memo);
//   memo[i][j] = a.length > b.length ? a : b;
//   return memo[i][j];
// }

// function LCS(x, y, lcs = '') {
//   if (!x || !y) return lcs;
//   let x1 = x.charAt(0), xSuffix = x.slice(1);
//   let y1 = y.charAt(0), ySuffix = y.slice(1);
//   if (x1 === y1) return LCS(xSuffix, ySuffix, lcs + x1);    
//   let lcs1 = LCS(xSuffix, y, lcs);
//   let lcs2 = LCS(x, ySuffix, lcs);
//   return lcs1.length > lcs2.length ? lcs1 : lcs2;
// }

// function LCS(x, y) {
  
//   var max = "";
//   var lim = "";
//   for(var i=0;i<y.length;i++){
//       if(x.indexOf(y[i])>-1){
//           lim = y[i] + LCS(x.substring(x.indexOf(y[i])+1),y.substring(i+1));
//           console.log(lim);
//           if(max.length < lim.length){
//              max = lim;
//           }
//       }
//   }
  
//   return max;
// } 

// function LCS(x, y) {
//   [x,y] = [x.split(''),y.split('')].sort((a,b) => a>b || a.length-b.length);
//   console.log([x, y]);
//   return x.map((d,i) => y.slice(i).indexOf(d) > -1 ? d : '').join('');
// }

// console.log(LCS('finaltest', 'zzzfinallzzz'));

// ================ Sum and Rest the Number with its Reversed ===

// function sumDifRev(n) {
//   let result = [], i = 0;
//   const testDiv = num => {
//     if ((num+'').slice(-1) === '0') return;
//     const numRev = +[...(num+'')].reverse().join('');
//     const sum = num + numRev;
//     const diff = Math.abs(num - numRev);
//     if (sum % diff === 0) result.push(num);
//   }
//   while (result.length <= n-1) testDiv(i++);
  
//   // return result.sort((a, b) => a - b)[n-1];
//   // return result.slice(-1)[0];
//   return result[n-1];
// }

// function sumDifRev(n){
//   let arr = [], i = 45;
//   while(arr.length < n) {
//       const a = i, b = +i.toString().split('').reverse().join('');
//       if( Number.isInteger( (a+b) / Math.abs(a-b) ) && i % 10 != 0){
//         arr.push(i);
//       }
//     i++;
//   }
//   return arr[n-1];
// }

function sumDifRev(n){
  let count = 45;
  let check = 0;
  while(check <= n){
    const num = count;
    const reverseNumString = count.toString().split('').reverse().join('')
    const reverseNum = Number(reverseNumString);
    const difference = Math.abs(num - reverseNum)
    const sum = num + reverseNum;
    if(sum % difference === 0 && reverseNumString[0] !== '0'){
          check++
          if(check === n) return count
    }
    count++
  }
}

// console.log(sumDifRev(43));

// =========== Minimum paths in squares (solved by recursion but too slow to pass all tests) ==========

const square = [
  [1, 2, 3, 6, 2, 8, 1],
  [4, 8, 2, 4, 3, 1, 9],
  [1, 5, 3, 7, 9, 3, 1],
  [4, 9, 2, 1, 6, 9, 5],
  [7, 6, 8, 4, 7, 2, 6],
  [2, 1, 6, 2, 4, 8, 7],
  [8, 4, 3, 9, 2, 5, 8]];

// const minPath = (grid, x1, y1) => {
//   let paths = [];
//   const moveTo = (path, x2, y2) => {
//     if (x2 < 0 || y2 < 0 || x2 > x1 || y2 > y1) return false;
//     path.push(grid[x2][y2]);
//     // console.log(path);
//     if (x2 === x1 && y2 === y1) {
//       paths.push(path);
//       // console.log('paths: ', paths);
//       return;
//     }
//     moveTo([...path], x2, y2+1) || moveTo([...path], x2+1, y2);
//   }
//   moveTo([], 0,0);
//   return paths;
// }

const minPath = (grid, x1, y1) => {
  let paths = [];
  const moveTo = (path, x2, y2) => {
    if (x2 < 0 || y2 < 0 || x2 > x1 || y2 > y1) return false;
    path = path + grid[y2][x2];
    // console.log(path);
    if (x2 === x1 && y2 === y1) {
      paths.push(path);
      // console.log('paths: ', paths);
      return;
    }
    moveTo(path, x2, y2+1) || moveTo(path, x2+1, y2);
  }
  moveTo(0,0,0);
  return Math.min(...paths);
}

// console.log(minPath(square, 0, 1));

// ========== Extract the domain name from a URL ==========

const domainName = url => {
  for (const item of ['//', 'www.']) {
    if (url.indexOf(item) !== -1) {
      url = url.slice(url.indexOf(item) + item.length);
    }
  }
  return url.slice(0, url.indexOf('.'));
}

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

// function domainName(url){
//   return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
// }

// function domainName(url){  
//   return url.replace(/.+\/\/|www.|\..+/g, '')
// }

// const domainName = url => url.match(/(?!w)+[\w-]+(?=\.)/)[0];

// console.log(domainName("www.xakep.ru"));

// === Word Finder ==============

function Dictionary(words){
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  let aMatch = []; const pLen = pattern.length;
  for (const word of this.words) {
    if (word.length === pLen) {
      let aPattern = [...pattern], aWord = [...word];
      for (let i = 0; i < pLen; i++) {
        if (aPattern[i] === '?') aWord[i] = '?';
      }
      if (aPattern.join(``) === aWord.join(``)) aMatch.push(word);
    }
  }
  return aMatch;
}

// Dictionary.prototype.getMatchingWords = function(pattern) {
//   var re=new RegExp('^'+ pattern.replace(/\?/g, '[a-z]')+'$');
//   console.log(re);
//   return this.words.filter(function(v) {return v.match(re);});
// }

// Dictionary.prototype.getMatchingWords = function(pattern) {
//   const test = ([...word]) => word.every((e,i,a) => 
//           (e === pattern[i] || pattern[i] === '?' )?true:false);
          
//    return this.words.filter(w => test(w) && w.length === pattern.length)
//  }

//  Dictionary.prototype.getMatchingWords = function(pattern) {
//   return this.words.filter(x=> x.length === pattern.length && pattern.split('').every((e,i)=> ['?',x[i]].includes(pattern[i]) ))
// }

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
// console.log(fruits);
// console.log(fruits.getMatchingWords('appl?'));  

// ============ The Fruit Juice ========

function Jar() {
  this.concentration = 0;
  this.volume = 0;
  this.appleVol = 0;
  this.bananaVol = 0;
  this.otherJuiceVol = 0;
}

Jar.prototype.add = function(amount, type) {
  this.volume += amount;
  if (type === 'apple') this.appleVol += amount;
  if (type === 'banana') this.bananaVol += amount;
  if (type !== 'apple' && type !== 'banana') this.otherJuiceVol += amount;
};

Jar.prototype.pourOut = function(amount) {
  this.appleVol -= (amount * this.appleVol / this.volume);
  this.bananaVol -= (amount * this.bananaVol / this.volume);
  this.otherJuiceVol -= (amount * this.otherJuiceVol / this.volume);
  this.volume -= amount;
};

Jar.prototype.getTotalAmount = function() {
  return this.volume;
};

Jar.prototype.getConcentration = function(type) {
  if (this.volume === 0) {
    this.concentration = 0;
    return this.concentration;
  }
  if (type === 'apple') this.concentration = this.appleVol / this.volume;
  if (type === 'banana') this.concentration = this.bananaVol / this.volume;
  if (type !== 'apple' && type !== 'banana')  this.concentration = this.otherJuiceVol / this.volume;
  return this.concentration;
}

// class Jar {
//   constructor() {this.jar = {}; this.total = 0}
//   add(amount, type) {
//     this.jar[type] = (this.jar[type] || 0) + amount;
//     this.total += amount;
//   }
//   pourOut(amount) {
//     let ratio = 1 - amount / this.total;
//     this.total -= amount;
//     for(let type in this.jar) this.jar[type] *= ratio;
//   }
//   getTotalAmount() {return this.total}
//   getConcentration(type) {return (this.jar[type] || 0) / (this.total || 1)}
// }

// function Jar() {
//   this.amounts = {};
//   this.total = 0;
// }

// Jar.prototype.add = function(amount, type) {
//   if(this.amounts[type] == null) this.amounts[type] = 0;
//   this.amounts[type] += amount;
//   this.total += amount;
// };

// Jar.prototype.pourOut = function(amount) {
//   for(var v in this.amounts) this.amounts[v] -= amount * this.getConcentration(v);
//   this.total -= amount;
// };

// Jar.prototype.getTotalAmount = function() {return this.total;};

// Jar.prototype.getConcentration = function(type) {
//   var conc = this.amounts[type] / this.total;
//   return conc > 0 ? conc : 0;
// }

// const jar = new Jar();
// jar.add(200, 'apple');
// console.log(jar.getTotalAmount());
// console.log(jar.getConcentration('apple'));
// console.log('------------1')
// jar.add(200, 'banana');
// console.log(jar.getTotalAmount());
// console.log(jar.getConcentration('apple'));
// console.log(jar.getConcentration('banana'));
// console.log('------------2')
// jar.pourOut(200);
// console.log(jar.getTotalAmount());
// console.log(jar.getConcentration('apple'));
// console.log(jar.getConcentration('banana'));
// console.log('------------3')
// jar.add(200, 'apple');
// console.log(jar.getTotalAmount());
// console.log(jar.getConcentration('apple'));
// console.log(jar.getConcentration('banana'));

// ===================== #Hashtag =================

const getHashtags = post => {
  console.log(post);
  let output = [];
  post = post.split` `;
  for (const hash of post) {
    if (hash[0] === '#' && hash.length > 1 && /^([a-z#]+$)/i.test(hash) && !/[a-z]#[a-z]/i.test(hash)) {
      output.push(hash.slice(hash.lastIndexOf('#')+1));
    }
  }
  return output || [];
}

// const getHashtags = post => post.split` `.filter(w => /^#+[a-zA-Z][^#]*$/.test(w)).map(w => w.replace(/#/g, ''));
// function getHashtags(post) {
//   return post.split(' ').filter(p => p.match(/^[#]+[a-z]+[^#]$/i)).map(p => p.replace(/#/g, ''));
// }

// function getHashtags(post) {
//   return post.split(' ')
//     .filter(el=>!/\w#\w/.test(el))
//     .filter(el=> /#[a-zA-z]+/.test(el))
//     .map(el=>el.substr(el.lastIndexOf('#')+1))
// }

// const getHashtags = Array.prototype.shift.bind([['world'], [], [], [], ['many'], [], [], []]);


// console.log(getHashtags("#blue#red#yellow#green"));