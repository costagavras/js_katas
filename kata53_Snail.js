// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]


// const arraySnail = [];

// const snail = array => {
//   arraySnail.push(...array[0]);
//   if (array.length === 0 || array.length === 1) {return arraySnail}
//   const arrayRedux = [];
//   for (let i = 1; i < array.length; i++) {
//     arraySnail.push(array[i][array.length-1]);
//     arrayRedux.unshift(array[i].slice(0, -1).reverse());
//   }
//   snail(arrayRedux);
//   return arraySnail;
// }



const snail = array => {
  const arraySnail = [];
  const slice = array => {
    arraySnail.push(...array[0]);
    if (array.length === 0 || array.length === 1) {return arraySnail}
    const arrayRedux = [];
    for (let i = 1; i < array.length; i++) {
      arraySnail.push(array[i][array.length-1]);
      arrayRedux.unshift(array[i].slice(0, -1).reverse());
    }
    slice(arrayRedux);
  }
  slice(array);
  return arraySnail;
}


// console.log(snail([[1]]));
// console.log(snail([[1, 2, 3,], [4, 5, 6], [7, 8, 9]]));
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));

function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}

function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}

const rotate = arr => arr.length ? 
  arr[0].map((_, i) => arr.map((_, j) => arr[j][i]))
  : [];

const snail = arr => arr.length ? 
  [...arr[0], ...snail(rotate(arr.slice(1)).reverse())]
  : [];

  const rotate = arr => arr ? arr[0].map((_, i) => arr.map((_, j) => arr[j][i])) : [];

const snail = array => {
  let [route, ...arr] = array.map(row => row.slice());
  while (arr.length > 0) {
    arr = rotate(arr).reverse();
    route.push(...arr.shift());
  }
  return route;
};

function snail(grid) {
  const path = [];
  
  while (grid.length > 0) {
    path.push(...grid.shift())
    
    for (const row of grid) {
      path.push(row.pop());
      row.reverse();
    }
    
    grid.reverse();
  }
  
  return path;
}