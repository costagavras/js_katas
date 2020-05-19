// ===============Most frequently used words in a text==============
// Write a function that, given a string of text (possibly with punctuation and line-breaks),
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.


const topThreeWords = text => {
  let oFrequency = {}, max = 0, maxArray = [];
  text = text.toLowerCase().match(/\b([a-z]|')+\b/g) || [];
  text.map(item => {
    oFrequency[item] = oFrequency[item] ? oFrequency[item] += 1 : 1;
    if (max < oFrequency[item]) max = oFrequency[item];
  });
  for (let i = max; i >= 0; i--) {
    Array.from(Object.keys(oFrequency)
          .filter(key => oFrequency[key] === i))
          .map(item => maxArray.push(item));
  }
  return maxArray.slice(0,3);
}

// function topThreeWords(text) {
//   let words = {}
//   text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
//     let c = words[match] || 0
//     words[match] = ++c
//   })
//   keysSorted = Object.keys(words).sort(function(a,b){return words[b]-words[a]})
//   return keysSorted.slice(0,3)
// }


// function topThreeWords(text) {
//   text = text.toLowerCase().split(' ').map(s => s.replace(/([^'\w]|[\/])/g,''))
//   const f =s=> text.filter(y=>y===s).length;
//   const sorty = (a,b)=> f(a) === f(b) ? text.indexOf(a) - text.indexOf(b) : f(b)-f(a);
//   arr = [...text].sort(sorty).filter(x=>x.length && x.match(/[a-z]/gi));
//   console.log(arr);
//   return [...new Set(arr)].slice(0,3)
// }

// let topThreeWords = text => {
//   let dict = new Map();
//   text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
//       let word = match.toLowerCase();
//       dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//   });
//   // console.log(dict);
//   dict.delete("'");
//   return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };

// const topThreeWords = text => {
//   let total = (text.toLowerCase().match(/\b[a-z']+\b/g)||[]).reduce((acc,cur) => (acc[cur] = (acc[cur]||0) + 1, acc), {});
//   console.log(total);
//   return Object.keys(total).sort((a,b) => total[b] - total[a]).slice(0,3);
// };
  
console.log(topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'));
// console.log(topThreeWords('  ,    .. '));