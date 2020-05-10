// ====================== Josephus permutation ============================

// Return a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

const josephus = (items, k) => {
  let giuseSiSalva = [], pointer;
 
  console.log(items);  
  if (k <= items.length) pointer = k-1; else pointer = items.length - k - 1;
  let counter = 0;
    while (items.length > 0) {
      let position = (pointer - counter) % items.length;
      // console.log(`pointer: ${pointer}`, `counter: ${counter}`, `position: ${position}`)
      giuseSiSalva.push(items[position]);
      // console.log(`giuseSiSalva: ${giuseSiSalva}`);
      items.splice(position, 1);
      console.log(items);
      pointer += k;
      counter++;
    }
    return giuseSiSalva.filter(a => typeof a !== 'undefined'); 
  }

// }
// console.log(josephus([1,2,3,4,5,6,7],3));
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8], 6));

// const josephus = (items, k) => {
//   let giuseSiSalva = [];
//   while (items.length > k-1 ) {
//     giuseSiSalva.push(items[k-1]);
//     items = items.concat(items.slice(0, k-1));
//     items.splice(0,k);
//   }
  
//     while (items.length > 0) {
//       giuseSiSalva.push(items[k - items.length - 1]);
//       items.splice(k - items.length - 1, 1)
//       if (k - items.length > items.length) k = k - items.length;
//     }
//     return giuseSiSalva.filter(a => typeof a !== 'undefined'); 
// }