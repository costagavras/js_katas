// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.

// const smallest = n => {
//   let result, maxResult = n, iMin, kMin;
//   n = [...String(n)];
//   for (let i = 0; i < n.length; i++) {
//     for (let k = 0; k < n.length; k++) {
//       result = shiftOne(n.slice(),i,k);
//       if (maxResult > result) maxResult = result, iMin = i, kMin = k;
//     }
//   }
    
//  return [maxResult, iMin, kMin]; 
// }

// const shiftOne = (arr,i,k) => {
//   let deleted = arr.splice(i,1);
//   arr.splice(k,0,deleted[0]);
//   // arr.splice(k,0,arr.splice(i,1)[0]);
//   return +arr.join``;
// }

// console.log(smallest(187863002809));
// console.log(smallest(2722655468972710));
// Expected: '[272265546897271, 15, 0]', instead got: '[1272265546897270, 14, 0]'
// console.log(smallest(199819884756));
// Expected: '[119989884756, 4, 0]', instead got: '[919819884756, 0, 1]'

// let indexOut = n.indexOf(nSorted[indexIn]);
//   n.splice(indexIn,0,n.splice(indexOut,1)[0]);
//   if (Math.abs(indexOut - indexIn) === 1) [indexOut, indexIn] = [Math.min(indexOut, indexIn),Math.max(indexOut, indexIn)];

// Array.prototype.move = function(from, to) {
//   this.splice(to, 0, this.splice(from, 1)[0]);
//   return this;
// };

// function smallest(n) {
// let iter = `${n}`.length, res = new Map();
// for (let i = 0; i < iter; i++) {
//   for (let j = 0; j < iter; j++) {
//     let number = `${n}`.split('').move(i, j).join('');
//     if (!res.has(+number)) res.set(+number, [i, j]);
//   }
// }
// let min = Math.min(...res.keys());
// return [min, ...res.get(min)];
// }

// function smallest(n) {
//   let row = String(n).split("");
//   let min = [n, 0, 0],
//       test = [];
  
//   for (var i = 0, length = row.length; i < length; i++) {
//     for (var j = 0; j < length; j++) {
//       test = row.slice(0, i).concat(row.slice(i + 1));
      
//       if (Number(test.slice(0, j).concat(row[i], test.slice(j)).join("")) < min[0]) {
//         min = [Number(test.slice(0, j).concat(row[i], test.slice(j)).join("")), i, j];
//       }
//     }
//   }
  
//   return min;
// }


// function smallest(n) {
//   const s = [...''+n], smallest = [n,0,0]
//   console.log(s);
//   for (let i = 0; i < s.length; i++)
//     for (let j = 0; j < s.length; j++) {
//       if (i === j) j++
//       const t = s.slice()
//       t.splice(j,0,t.splice(i,1)[0])
//       const m = +t.join``
//       if (m < smallest[0]) 
//         smallest.splice(0,3,m,i,j)
//     }
//   return smallest
// }

function smallest(n) {
  let min = [n, 0, 0], test = [], temp;
  const row = [...String(n)];

  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < row.length; j++) {
      test = [...row.slice(0, i), ...row.slice(i + 1)];
      temp = +[...test.slice(0, j), row[i], ...test.slice(j)].join``;
      if (temp < min[0]) {
        min = [temp, i, j];
      }
    }
  }

  return min;
}

console.log(smallest(2722655468972710));