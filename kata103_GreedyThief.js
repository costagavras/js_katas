// https://www.codewars.com/kata/58296c407da141e2c7000271/train/javascript
// In a dark, deserted night, a thief entered a shop. There are some items in the room, and the items have different weight(Kg) and price($):

// The thief is greedy, his desire is to take away all the goods. But unfortunately, his bag can only hold n Kg items. 
// So he has to make a choice, try to take away more valuable items.

// The result should be a list of items that the thief can take away and has the maximum total price.
// If no valid solution should return []; 


items = [{"weight":10,"price":19},{"weight":16,"price":78},{"weight":8,"price":86},{"weight":6,"price":41},{"weight":16,"price":49}]
// [{"weight":3,"price":69},{"weight":8,"price":70},{"weight":2,"price":83}] 

// greedyThief = (items,n) => {
//   const aResult = [];
//   const itemsCopy = items.slice();
//   itemsCopy.map(item => item['ppw'] = item.price/item.weight)
//   itemsCopy.sort((a,b) => (a.ppw < b.ppw) ? 1 : (a.ppw === b.ppw) ? ((a.weight > b.weight) ? 1 : -1) : -1);
//   console.log(itemsCopy);
//   for (let i = 0; i < itemsCopy.length - 1; i++) {
//     let aResultTemp = [];
//     delete itemsCopy[i].ppw;
//     let k = i + 1;
//     if (n >= itemsCopy[i].weight) {
//       n -= itemsCopy[i].weight
//       aResultTemp.push(itemsCopy[i]);      
//     }
//     let rest = n;
//     const runTemp = ()
//     while (k < itemsCopy.length) {
//       // console.log(k);
//       // console.log(rest);
//       if (rest >= itemsCopy[k].weight) {
//         rest -= itemsCopy[k].weight
//         aResultTemp.push(itemsCopy[k]);
//       }
//       k++;
//     }
//     aResult.push(aResultTemp);
//     // aResultTemp = [];
//     // for (let k = i + 1; k < itemsCopy.length; k++) {
//     }
//   return aResult;
// }

// Greedy solution, not enough to solve the issue!!!!!!!!!!!!!
// greedyThief = (items,n) => {
//   const aResult = [];
//   const itemsCopy = items.slice();
//   itemsCopy.map(item => item['ppw'] = item.price/item.weight)
//   itemsCopy.sort((a,b) => (a.ppw < b.ppw) ? 1 : (a.ppw === b.ppw) ? ((a.weight > b.weight) ? 1 : -1) : -1);
//   for (let i = 0; i < itemsCopy.length; i++) {
//     if (n >= itemsCopy[i].weight) {
//       n -= itemsCopy[i].weight
//       aResult.push(itemsCopy[i]);
//     }
//     delete itemsCopy[i].ppw;
//   }
//   return aResult;
// }

// https://gist.github.com/lqt0223/21f033450a9d762ce8aee4da336363b1
// https://www.youtube.com/watch?v=8LusJS5-AGo
greedyThief = (items, n) => {
  let temp = [];

  const getSolution = (row, cap) => {
    
    const NO_SOLUTION = {maxValue:0, subset:[]};
    let col = cap - 1;
    let lastItem = items[row];
    let remaining = cap - lastItem.weight; // The remaining capacity for the sub-problem to solve.

    // Refer to the last solution for this capacity which is in the cell of the previous row with the same column
    let lastSolution = row > 0 ? temp[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
    // Refer to the last solution for the remaining capacity, which is in the cell of the previous row with the corresponding column
    let lastSubSolution = row > 0 ? temp[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

    // If any one of the items weights greater than the 'cap', return the last solution
    if(remaining < 0) return lastSolution;

    // Compare the current best solution for the sub-problem with a specific capacity
    // to a new solution trial with the lastItem(new item) added
    let lastValue = lastSolution.maxValue
    let lastSubValue = lastSubSolution.maxValue;

    let newValue = lastSubValue + lastItem.price;
    if(newValue >= lastValue){
      // copy the subset of the last sub-problem solution
      let lastSubSet = lastSubSolution.subset.slice();
      lastSubSet.push(lastItem);
      return {maxValue: newValue, subset: lastSubSet};
    } else {
      return lastSolution;
    }
  }

  // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
  const getLast = () => {
    const lastRow = temp[temp.length - 1];
    return lastRow[lastRow.length - 1].subset;
  }

  for (let i = 0; i < items.length; i++) {
    let row = [];
    for (let cap = 1; cap <= n; cap++) {
      row.push(getSolution(i,cap));
    }
    temp.push(row);
  }
  
  return getLast();
}

console.log(greedyThief(items,28))


function greedyThief(items, n) {
  const mem = {};
  function search(index, weight) {
    if (index >= items.length || weight <= 0) {
      return [0, []];
    }
    const key = [index, weight] + '';
    if (mem[key]) {
      return mem[key];
    }
    const t1 = search(index + 1, weight);
    const x = items[index];
    if (x.weight > weight) {
      return mem[key] = t1;
    }
    const [p, t] = search(index + 1, weight - x.weight);
    return mem[key] = t1[0] > p + x.price ? t1 : [p + x.price, [index, ...t]];
  }
  const [, result] = search(0, n);
  return result.map(i => items[i]);
}

function greedyThief(items, capacity){
  let mem = [], NO_SOL = {max:0, items:[]}
  for (let i=0; i<items.length; i++) {
    let row = []
    for (let cap=1; cap<=capacity; cap++) {
      let lastItem = items[i]
      let remaining = cap - lastItem.weight
      let lastSol = i>0 ? mem[i-1][cap-1] || NO_SOL : NO_SOL
      let lastSubSol = i>0 ? mem[i-1][remaining-1] || NO_SOL : NO_SOL
      let val = lastSubSol.max + lastItem.price      
      row.push(remaining < 0 ? lastSol : val >= lastSol.max
        ? {max: val, items: [...lastSubSol.items, lastItem]} : lastSol)
    }
    mem.push(row)
  }
  return mem.pop().pop().items
}

function greedyThief (a, W) {
  const d = new Array(a.length+1).fill(0).map(_ => new Array(W+1).fill(0));

  for (let i = 1; i <= a.length; ++i) {
    for (let w = 1; w <= W; ++w) {
      d[i][w] = d[i-1][w];
      if (w - a[i-1].weight >= 0) {
        d[i][w] = Math.max(d[i][w], d[i-1][w-a[i-1].weight] + a[i-1].price);
      }
    }
  }

  const res = [];
  for (let i = a.length; d[i][W] > 0; --i) {
    if (d[i][W] !== d[i-1][W]) {
      res.push(a[i-1]);
      W -= a[i-1].weight;
    }
  }

  return res;
}

greedyThief=(Q,S)=>Q.map(C=>Q=Q.map((V,F,L,R)=>C.weight<=F&&V[1]<(R=C.price+Q[L=F-C.weight][1])?[[C,...Q[L][0]],R]:V),Q=[...Array(1+S)].map(_=>[[],0]))&&Q[S][0]
