// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// 1) your referral bonus, and
// 2) the price of a beer can

// const beeramid = (bonus,price,levels = 1) => {
//   while (bonus > 0) {
//     bonus -= Math.pow(levels,2) * price;
//     if (bonus >= 0) levels++;
//   }
//   return levels - 1;
// }

// var beeramid = (b,p,i=1) => b - i ** 2 * p < 0 ? i - 1 : beeramid(b - i ** 2 * p, p, i+1)
// const beeramid = (b, p, l = 1) => l**2 * p > b ? --l : beeramid(b - l**2 * p, p, ++l);

// console.log(beeramid(455,5));

// ========================== Rot13 ============================

const sABC = 'abcdefghijklmnopqrstuvwxyz';

// const rot13 = (message, sABC = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM') => [...message].reduce((a,b) => a + (sABC.indexOf(b) !== -1 ? sABC[sABC.indexOf(b)+13] : b),'');
// const rot13 = (message, sABC = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => [...message].reduce((a,b) => a + (sABC.indexOf(b) !== -1 ? sABC[(sABC.indexOf(b)+13) % 26] : b),'');

// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


// console.log(rot13('grfg'));


// ============================ Bob's reversing obfuscator ===================

// const decoder = (encoded, marker) => {
//   return encoded.split(marker).reduce((acc,val,idx) => acc + (!(idx % 2) ? val : ''),'') // === 0;
//     + encoded.split(marker).reduceRight((acc,val,idx) => acc + (idx % 2 ? [...val].reverse().join`` : ''),'') // !== 0
// }

// function decoder(encoded, marker) {
//   const i = encoded.lastIndexOf(marker)
//   console.log(i);
//   console.log(encoded);
//   if (i === -1) return encoded
//   return decoder(encoded.slice(0, i) + encoded.slice(i + marker.length).split('').reverse().join(''), marker)
// }

// console.log(decoder("Dq.silucaiqonec mollq odommoc qis ipsum qlsin lev", 'q'));

// ============================ Tongues - Gandalf ROT13 ===================

// This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).
// Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.

const tongues = code => {
  const sVow = 'aAiIyYeEoOuU', sVowLen = sVow.length; // 12
  const sCons = 'bBkKxXzZnNhHdDcCwWgGpPvVjJqQtTsSrRlLmMfF', sConsLen = sCons.length; // 40
  return [...code].reduce((acc,val) => acc + (!sVow.includes(val) && !sCons.includes(val) ? val : (sVow.includes(val) ? sVow[(sVow.indexOf(val) + sVowLen / 2) % sVowLen] : sCons[(sCons.indexOf(val) + sConsLen / 2) % sConsLen])),'');
}

// return [...code].reduce((acc,val) => acc + (!sVow.includes(val) && !sCons.includes(val) ? val : (sVow.includes(val) ? sVow[(sVow.indexOf(val) - 2 * 3 + sVowLen) % 12] : sCons[(sCons.indexOf(val) - 2 * 10 + sConsLen) % 40])),'');

// function tongues(code) {
//   let vo = 'aiyeouaiyAIYEOUAIY';
//   let con = 'bkxznhdcwgpvjqtsrlmfbkxznhdcwgBKXZNHDCWGPVJQTSRLMFBKXZNHDCWG';
//   return code.split('').map(l => !vo.includes(l) && !con.includes(l) ? l : vo.includes(l) ? vo[vo.lastIndexOf(l)-3] : con[con.lastIndexOf(l)-10]).join('');
// }


// function tongues(code) {
//   const keys = ['AaIiYyEeOoUu', 'BbKkXxZzNnHhDdCcWwGgPpVvJjQqTtSsRrLlMmFf'];
//   keys.forEach(k => code = code.replace(RegExp(`[${k}]`, 'g'), l => k[(k.indexOf(l) + k.length / 2) % k.length]));
//   return code;
// }



console.log(tongues('Tywpadh (1234567890) etr bytlnyenoit, nsau hsiycr pins pa ytlsetfar!'));


