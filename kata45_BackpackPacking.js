// To make sure you're bringing your most valuable items on this journey you've decided to give all your items a score that represents how valuable this item is to you. 
// It's your job to pack you bag so that you get the most value out of the items that you decide to bring.
// Your input will consist of two arrays, one for the scores and one for the weights.
// You input will always be valid lists of equal length, so you don't have to worry about verifying your input.
// You'll also be given a maximum weight. This is the weight that your backpack cannot exceed.

scores =  [ 14, 19, 1, 8, 13, 16, 10, 15 ];
weights = [ 3,   4, 1, 2,  3,  4,  2,  3 ];
scores =  [ 1, 3, 4 ];
weights = [ 1, 2, 1 ];
capacity = 10;

function packBagpack(scores, weights, capacity) {
  let newArray = [];
  let newValorizedArray = [];
  // let scoresWeightTable = Object.assign(...weights.map((k, i) => ({[k]: scores[i]})));
  let scoresWeightTable = {};
  let uniques = [];
  weights.forEach((key, val) => {
    if (uniques.indexOf(key) == -1) { 
      uniques.push(key) 
      scoresWeightTable[key] = [scores[val]];
    } else {
      if (scoresWeightTable[key]) {
        scoresWeightTable[key].push(scores[val]);
        scoresWeightTable[key].sort((a, b) => b - a);
      }
    }
  });
  console.log(scoresWeightTable);
  combinations(weights).filter(Boolean).map(subArr => {
    newArray.push(subArr[0].split(',').filter(Boolean).map(Number));
  });
  newArray = newArray.filter(el => el.reduce((a, b) => a + b, 0) <= capacity);
  console.log(newArray);
  // assigns scores to weights based on descending order;
  newArray.map(el => {
    // el.length == 1 ? newValorizedArray.push(scoresWeightTable[el][0]) : newValorizedArray.push(el.reduce((a, b) => a + scoresWeightTable[b][0], 0))
    if (el.length == 1) {
      newValorizedArray.push(scoresWeightTable[el][0]);
    } else {
      let sum = 0;
      let uniqueItems = {};
      el.forEach(item => {
        uniqueItems[item] === 0 ? uniqueItems[item] += 1 : uniqueItems[item] = 0;
        sum += scoresWeightTable[item][uniqueItems[item]];
      })
      newValorizedArray.push(sum)
    }
  });

  console.log(newValorizedArray);

  console.log(newArray[newValorizedArray.indexOf(Math.max(...newValorizedArray))]);
  return Math.max(...newValorizedArray);
}

// all combinations (but not permutations)
const combinations = (s) => {
  if (s.length == 1) return ['', [String(s[0])]]; 
  const ss = combinations(s.slice(1)) // All the combinations without the first char:
  return [...ss.map(ch => [s[0] + ',' + ch]), ...ss]; // Return both those with and those without the first char
}

// const subSeq = (s) => s.length == 1 
//     ? ['', s] 
//     : (ss=subSeq(s.slice(1)), 
//        [...ss.map(ch => s[0] + ch), ...ss])

// function packBagpack(scores, weights, capacity) {
//   let load = Array.from({ length: capacity + 1 }, () => 0);
//   console.log(load);
//   for (let i = 0; i < weights.length; i++) {
//     load = load.map(
//       (l, w) => Math.max(l, weights[i] <= w && load[w - weights[i]] + scores[i])
//     );
//   }
//   console.log(load);
//   return load.pop();
// }

// const packBagpack = (scores, weights, capacity) => weights.reduce(
//   (load, weight, i) => load.map(
//     (l, w) => Math.max(weight <= w && load[w - weight] + scores[i], l)
//   ), Array(capacity + 1).fill(0)
// ).pop();

// function packBagpack(scores, weights, capacity) {
//   return weights.reduce((load, weight, i) => load.map(
//     (l, w) => Math.max(l, weights[i] <= w && load[w - weights[i]] + scores[i])
//   ), Array(capacity + 1).fill(0)).pop();
// }

// function packBagpack(scores, weights, capacity) {
//   const getBestResult = (cur, pos) => {
//     const results = [cur];
  
//     for (let i = pos; i >= 0; --i) {
//       if (cur.weight + weights[i] > capacity) {
//         continue;
//       }
//       results.push(
//         getBestResult(
//           {
//             score: cur.score + scores[i],
//             weight: cur.weight + weights[i],
//           },
//           i - 1,
//         ),
//       );
//     }
    
//     return results.reduce(
//       (best, result) => result.score > best.score ? result : best,
//       cur
//     );
//   };

//   return getBestResult({ score: 0, weight: 0 }, scores.length - 1).score;
// }

// function packBagpack(scores, weights, capacity, sum = 0) {
//   if (!scores.length) return sum
//   if (capacity < weights[0])
//     return packBagpack(scores.slice(1),weights.slice(1),capacity,sum)
//   return Math.max(
//     packBagpack(scores.slice(1),weights.slice(1),capacity,sum),
//     packBagpack(scores.slice(1),weights.slice(1),capacity-weights[0],sum+scores[0])
//   )
// }

// console.log(packBagpack(scores, weights, capacity));