// A stream of data is received and needs to be reversed.Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// catches null data arrays
// const dataReverse = data => !data ? [] : data.join``.match(/\d{8}/g).reduceRight((a, b) => a + ',' + b.split``,'').slice(1).split`,`.map(i => +i);


// const dataReverse = data => {
//   const bytes = [];
//   for (let i = 0; i < data.length; i += 8) {
//     bytes.unshift(...data.slice(i, i + 8));
//   }
//   return bytes;
// };

dataReverse=a=>(a.join``.match(/\d{8}/g)||[]).reverse().join``.split``.map(Number);

// console.log(dataReverse([1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0]))
// console.log(dataReverse([]))

// ===================================================================

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

const revrot = (str, sz) => {
  if (sz <= 0 || sz > str.length) return '';
  const strArray = str.match(new RegExp('.{'+sz+'}','g'));
  return strArray.map(el => el.split``.reduce((a,b) => +a + Math.pow(+b,3)) % 2 === 0 ? el.split``.reverse().join`` : el.slice(1)+el[0]).join``; 
  // return strArray.map(el => el.split``.reduce((a,b) => +a + Math.pow(+b,3)) % 2 ? el.slice(1)+el[0] : el.split``.reverse().join``).join``;
}

// console.log(revrot("733049910872815764", 5))

// function revrot(str, sz) {
//   if (sz < 1 || sz > str.length) 
//     return '';

//   let reverse = s => s.split('').reverse().join('');
//   let rotate  = s => s.slice(1) + s.slice(0, 1);
//   let sum_cubes = c => c.split('').reduce((a, b) => a + Math.pow(+b,3), 0); 

//   return str
//     .match(new RegExp('.{' + sz + '}', 'g'))
//     .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
//     .join('');
// }

// console.log(revrot("", 5))

// =================Longest Palindrome=============================================

// Find the length of the longest substring in the given string s that is the same in reverse.
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
// If the length of the input string is 0, the return value must be 0.

const longestPalindrome = s => {
  if (!s.length) return 0;
  if (s.length === 1) return 1;
  let resultFinal = [];
  for (let i = 0; i < s.length; i++) {
    resultFinal[i] = lP(s.slice(i),[]);
  }
  return Math.max(...resultFinal);
}

const lP = (s,result) => {
  let k = s.length-1, i = 0;
  if (isPalindrome(s)) {
    result.push(s.length);
    return Math.max(...result);
  } else {
    return i === k-1 ? 1 : lP(s.slice(i,k),result);
  }
}

let isPalindrome = str => str.split('').reverse().join('') === str;

// function isPalindrome(string){
//   let strLen = string.length;
//   if (strLen === 0 || strLen === 1) return true;
//   if (string[0] === string[strLen - 1]) return isPalindrome(string.slice(1, strLen - 1));
//   return false;
// };

  // console.log(longestPalindrome("I like racecars that go fast"));
  // console.log(longestPalindrome("cbaabdfadske123454321jsd"));
  // console.log(longestPalindrome("cbaabdfadske123454321js"));

  // var longestPalindrome=function(s){
  //   if (!s) return 0;
  //   for (let c = s.length; c > 0; c--) {
  //     for (let i = 0; i <= s.length - c; i++) {
  //       var check = s.substr(i, c);
  //       if (check === check.split("").reverse().join("")) return c;
  //     }
  //   }
  // }

  // function isPalindrome(s) {
  //   var arr = s.split("");
  //   return s == arr.reverse().join("");
  // }

  // let isPalindrome = str => str.split('').reverse().join('') === str;

//   function longestPalindrome(s) {
//     var longestPalLength = 0;
    
//     for (var palLen = 1; palLen <= s.length; palLen++) {
//         for (var i = 0; i <= s.length - palLen; i++) {
//             var subs = s.substr(i, palLen);
//             if (subs == subs.split('').reverse().join('')) longestPalLength = palLen;
//         }
//     }
    
//     return longestPalLength;
// }

// ======================================================================

// Given a string S. You have to return another string such that even-indexed and odd-indexed 
// characters of S are grouped and groups are space-separated (see sample below). 0 is even, strings with no spaces

const sortMyString = s => {
  let sortEven='', sortOdd='';
  const sortS = s => {
    if (s.length === 0 || s.length === 1) return sortEven + s + ' ' + sortOdd;
    [sEven, sOdd,...s] = s;
    sortEven += sEven, sortOdd += sOdd;
    return sortS(s);
  }
  return sortS(s);
}

// console.log(sortMyString('CodeWars5'));

// const sortMyString = s => s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1')
// const sortMyString = s => [...s].reduce((a, c, i) => (a[i%2] += c, a), ["",""]).join(" ");
// function sortMyString(S) {
//   return S.split('').filter((s,i)=>i%2==0).join('')+" "+S.split('').filter((s,i)=>i%2==1).join('');
// }

// ==================Caesar Cipher=============================================

// const sABC = 'abcdefghijklmnopqrstuvwxyz';

const encodeStr = (s,shift) => {
  const sABCShifted = sABC.slice(shift)+sABC;
  let encoded = s[0].toLowerCase() + sABCShifted[sABC.indexOf(s[0].toLowerCase())];
  for (let i = 0;i < s.length; i++) {
    if (sABC.includes(s[i]) || sABC.toUpperCase().includes(s[i])) {
      encoded += s[i] === s[i].toLowerCase() ? sABCShifted[sABC.indexOf(s[i])] : sABCShifted[sABC.indexOf(s[i].toLowerCase())].toUpperCase();
    } else {
      encoded += s[i];
    }
  }
  let divisor = Math.ceil(encoded.length / 5)

  return encoded.match(new RegExp('.{1,' + divisor + '}','g'));
  // return enc.match(RegExp(`.{1,${Math.ceil(enc.length/5)}}`,'g'))
}

const decode = arr => {
  let decoded = '';
  let decodedStr = arr.join``.replace(/(,(?!\s)(?!,?$))/g, '')
  const shift = sABC.indexOf(decodedStr[1].toLowerCase()) - sABC.indexOf(decodedStr[0].toLowerCase());
  const sABCShifted = sABC.slice(shift)+sABC;
  for (let i = 2;i < decodedStr.length; i++) {
    if (sABCShifted.includes(decodedStr[i]) || sABCShifted.toUpperCase().includes(decodedStr[i])) {
      decoded += decodedStr[i] === decodedStr[i].toLowerCase() ? sABC[sABCShifted.indexOf(decodedStr[i])] : sABC[sABCShifted.indexOf(decodedStr[i].toLowerCase())].toUpperCase();
    } else {
      decoded += decodedStr[i];
    }
  }

  return decoded;
}

// var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const code = c => alpha.indexOf(c),
//       fromCode = i => alpha[(i + alpha.length) % alpha.length]
      
// function encodeStr(s, shift) {
//     var enc = [...s].map(c=> code(c) != -1 ?fromCode(code(c) + shift) : c).join('');
//     enc = s[0].toLowerCase() + fromCode(code(s[0].toLowerCase()) + shift) + enc;
//     return enc.match(RegExp(`.{1,${Math.ceil(enc.length/5)}}`,'g'))
// }

// function decode(arr) {
//   var shift = alpha.indexOf(arr[0][1]) - alpha.indexOf(arr[0][0])
//   arr[0] = arr[0].slice(2)
//   return arr.map(p=> [...p].map(c=> code(c) != -1 ?fromCode(code(c) - shift) : c).join('')).join('')
// }


// console.log(encodeStr("abcdefghjuty12", 1));
// console.log(encodeStr("I should have known that you would have a perfect answer for me!!!", 1));
// console.log(decode(["ihH gzud roqdzc lx cqdz", "lr tmcdq xntq edds; Sqd", "zc rneskx adbztrd xnt s", "qdzc nm lx cqdzlr. Vhkk", "hzl A Xdzsr (1865-1939)"]));

// ==================================Tank Volume=====================================

const tankvol = (h,d,vt) => {
  const r = d/2;
  const alpha = 2 * Math.acos(1 - h/r);
  const areaSegment = r**2 / 2 * (alpha - Math.sin(alpha));
  const areaCircle = r**2 * Math.PI;
  const ratio = areaSegment / areaCircle;
  return ~~(ratio * vt);
}

// console.log(tankvol(40,120,3500));

// =================================================================================== 4ku Strings Mix

const createObjectLengths = str => {
  let oStr = {};
  while (str.length > 0) {
    let strLen = str.length;
    oStr[str[0]] = strLen - [...str].filter(a => a !== str[0]).length;
    str = [...str].filter(a => a !== str[0]);
  }
  return oStr;
}

const sABC = 'abcdefghijklmnopqrstuvwxyz';

const mix = (s1,s2) => {
  const oS1 = createObjectLengths(s1), oS2 = createObjectLengths(s2);
  let aComparison = [];
  for (let i = 0; i < sABC.length; i++) {
    if (oS1[sABC[i]] && oS2[sABC[i]] && oS1[sABC[i]] !== 1) { // case both keys exist and >1
      if (oS1[sABC[i]] > oS2[sABC[i]]) aComparison.push(`1:${sABC[i].repeat(oS1[sABC[i]])}`);
      if (oS1[sABC[i]] < oS2[sABC[i]]) aComparison.push(`2:${sABC[i].repeat(oS2[sABC[i]])}`);
      if (oS1[sABC[i]] === oS2[sABC[i]]) aComparison.push(`=:${sABC[i].repeat(oS1[sABC[i]])}`);
    } else if (oS1[sABC[i]] && oS1[sABC[i]] > 1) aComparison.push(`1:${sABC[i].repeat(oS1[sABC[i]])}`);
      else if (oS2[sABC[i]] && oS2[sABC[i]] > 1) aComparison.push(`2:${sABC[i].repeat(oS2[sABC[i]])}`);
  aComparison = aComparison.sort((a,b) => b.length - a.length || (a < b ? -1 : 1)); // Sort by length, then lexicographically
  }
  return aComparison.join`/`;
}

// ==
// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// function mix(s1, s2) {
//   return alphabet
//     .map(char => {
//       const s1Count = s1.split('').filter(x => x === char).length,
//             s2Count = s2.split('').filter(x => x === char).length,
//             maxCount = Math.max(s1Count, s2Count);

//       return { //creates an object per letter { char: 'a', count: 1, src: '=' }, { char: 'n', count: 5, src: '1' } etc.
//         char: char,
//         count: maxCount,
//         src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
//       };
//     })
//     .filter(c => c.count > 1)
//     .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
//     .map(c => `${c.src}:${c.char.repeat(c.count)}`)
//     .join('/');
// }

// [...Array(count)].map(_=>key).join('');

// console.log(mix("A generation must confront the looming ", "codewarrs"));

// ======================create array of letters==================
  const alphabet = () => {
    return Array.from({ length: 26 }, (_,i) => i) // mapFn
        .map(i => 'a'.codePointAt(0) + i)
        .map(i => String.fromCodePoint(i));
  }

  // console.log(alphabet());

  // Converts strings to objects with the key/value pattern obj.a = 'aaa' etc
  function bucket(s) {
    const re = /[a-z]/g;
    let m = null;
    const b = {};
    while (m = re.exec(s)) {
      let [x] = m;
      b[x] = (b[x] || '') + x;
    }
    return b;
  }

  console.log(bucket("hello, world!"));