// There is an array of strings. All strings contains similar letters except one. Try to find it!
// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// const findUniq = arr => {
//   const arrData  = []; let arrStandard = [], i = 0;
//   arr.map(el => {
//     arrData.push([...new Set(el.toLowerCase())].sort()); // Set to array;
//   });
//   if (JSON.stringify(arrData[0]) === JSON.stringify(arrData[1])) {
//     arrStandard = arrData[0];
//   } else {
//     return JSON.stringify(arrData[0]) === JSON.stringify(arrData[2]) ? arr[1] : arr[0];
//   }
//   while (i < arrData.length) {
//     i++;
//     if (JSON.stringify(arrData[i]) !== JSON.stringify(arrStandard)) return arr[i];
//   }
// }

function findUniq(arr) {
  var tmp = arr.map(el=>Array.from(new Set(el.toLowerCase().split(''))).sort().join('')),
  str = tmp[0]==tmp[1] ? tmp[0] : tmp[2];
  for(var i = 0; i < arr.length; i++) if(tmp[i]!=str) return arr[i]
}


// const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);
// const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');
// const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];


function findUniq(arr) {
  var word = [];
  var res = ""
  // var uniq = [...new Set(arr.join("").toLowerCase())].map(n=>(word = arr.filter(v=>v.indexOf(n) != -1),word.length==1) ? res = word.join("") : n);
  var uniq = [...new Set(arr.join("").toLowerCase())].map(n=> {
    console.log(`n1: ${n}`);
    console.log(arr.filter(v=>v.indexOf(n) != -1));
    if (word = arr.filter(v=>v.indexOf(n) != -1), word.length==1) { // The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
      console.log(word);
      res = word.join("")
    } else {
      n;
    }

  })
  return res;
}


console.log(findUniq([ 'annabelle', 'bellaanne', 'costa' ]));