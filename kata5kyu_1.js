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
const chirp = (n, s='-chirp') => s.length<n*6 ? chirp(n, s+s): s.slice(1,n*6);

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

