// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers;


const maxSequence = (arr) => {
  if (!arr || !arr.length || arr.every(x => x < 0)) return 0;
  // if (arr.every(x => x > 0)) return arr.reduce((a, b) => a + b);
  let maxArray = [], arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let tempArray = [...arr];
    for (let i = 0; i < arr.length; i++) {
      console.log(`Run ${i}: ${tempArray}`);
      maxArray.push(tempArray.length === 1 ? tempArray[0] : tempArray.reduce((a, b) => a + b));
      tempArray.pop()
    };
    arr = arr.slice(1);
  }
  return maxArray.sort((a, b) => b - a)[0];
}

// console.log(maxSequence([]));
// console.log(maxSequence([22, -24, 19, -24, -5]));

// var maxSequence0 = function(arr){
//   var min = 0, ans = 0, i, sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//     console.log(`Run ${i}: sum ${sum} min ${min} ans ${ans}`);
//   }
//   return ans;
// }



// const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);

function maxSequence0(arr) {
  let sum = 0;
  let subtotal = 0;

  for (let i of arr) {
      subtotal += i;
      if (subtotal < 0) subtotal = 0;
      if (subtotal > sum) sum = subtotal;
  }
  return sum;
}

console.log(maxSequence0([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// // Voile
// var maxSequence = function(arr){
//   var min = 0, max = 0, sum = 0;
//   for (let n of arr) {
//       sum += n, min = Math.min(sum,min), max = Math.max(max,sum-min);
//   }
//   return max;
// }

// var maxSequence = function(arr){
//   let o = [];
//   for(let i=0; i<arr.length; i++) {
//     let max = 0; let cur = 0;
//     for(let j=i; j<arr.length; j++) {
//       cur += arr[j];
//       if(cur>max)max=cur;
//     }
//     o.push(max);
//   }
//   return Math.max(...o,0);
// }