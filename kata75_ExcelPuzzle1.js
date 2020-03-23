// As you see, the end of every rows and the bottom of every columns is sum of row or column.
// The problem is, there's a wrong number in them(only one number, not more), find out it and return the correct value.

// const solveIt = excel => {
//   let excelTransposed = [], firstT = [], secondT = [], thirdT = [], fourthT = [];
//   for (let [first, second, third, fourth] of excel) {
//     firstT.push(first);
//     secondT.push(second);
//     thirdT.push(third);
//     fourthT.push(fourth);
//   }

//   excelTransposed = [firstT].concat([secondT]).concat([thirdT]).concat([fourthT]);

//   for (let i = 0; i < 4; i++) {
//     if (excel[i][0] + excel[i][1] + excel[i][2] !== excel[i][3]) {
//       for (let k = 0; k < 4; k++) {
//         if (excelTransposed[k][0] + excelTransposed[k][1] + excelTransposed[k][2] !== excelTransposed[k][3]) {
//           if (k === 3) { return excel[i][0] + excel[i][1] + excel[i][2] }
//           if (k === 2) { return excel[i][3] - excel[i][1] - excel[i][0] }
//           if (k === 1) { return excel[i][3] - excel[i][2] - excel[i][0] }
//           if (k === 0) { return excel[i][3] - excel[i][2] - excel[i][1] }
//         }
//       }
//     }
//   }
// }

// const grid =[
//               [1 ,2 ,3 ,6 ],
//               [4 ,5 ,6 ,15],
//               [7 ,8 ,9 ,24],
//               [12,15,18,45]
//             ];

// ================================================================

// function solveIt(e){
//   var x,y, diff;
//   for(var i=0; i<4; i++){
//     var row = 0, col = 0;
//     for(var j=0; j<4; j++){
//       row += e[i][j] * (j==3 ? -1 : 1);
//       col += e[j][i] * (j==3 ? -1 : 1);
//     }
//     if (row) x=i, diff=row;
//     if (col) y=i;
//   }
//   return e[x][y] - diff * (y==3 ? -1 : 1);
// }

// ===============================================================

// Array.prototype.sum = function(){ return this.reduce((a,b)=>a+b,0); }
// Array.prototype.last = function(){ return this[this.length-1]; }

// function solveIt(excel){
//   let col, row;  
//   for(let i = 0; i < excel.length; ++i){
//     if(excel[i].last() !== excel[i].slice(0,-1).sum())
//       row = i;
//     if(excel.last()[i] !== excel.slice(0,-1).map(x => x[i]).sum())
//       col = i;
//   }
  
//   let a = excel[row].slice(0,-1).sum()
//   let b = excel[row].last()
//   let diff = col === excel.length - 1 ? b - a : a - b;
  
//   return excel[row][col] - diff;
// }

// function solveIt(x) {
//   var r = 0, c = 0;
//   while (x[r][0] + x[r][1] + x[r][2] == x[r][3]) r++;    
//   while (x[0][c] + x[1][c] + x[2][c] == x[3][c]) c++;
//   var sum = x[r][0] + x[r][1] + x[r][2];
//   return c < 3 ? x[r][c] + x[r][3] - sum : sum;
// }

// ===================================================================================

// const getVal = (arr, i ,j) => arr[i][j];
// const getTransposed = (arr, i, j) => getVal(arr, j, i);
// console.log(getVal(grid, 0, 3));
// console.log(getTransposed(grid, 0, 3));

const grid =[
  [1 ,2 ,3 ,6 ],
  [4 ,5 ,6 ,15],
  [7 ,8 ,9 ,24],
  [12,15,18,46]
];
// Array.prototype.last = function() { return this[this.length - 1]; }

Array.prototype.sumShort = function() { return this.slice(0, -1).reduce((a, b) => a + b, 0); }

// const solveIt = excel => {
//   let row, col, answer; const el = excel.length; const lastItem = el - 1;
//   for (let i = 0; i < el; i++) {
//     if (excel[i][lastItem] !== excel[i].sumShort()) row = i;
//     if(excel[lastItem][i] !== excel.map(x => x[i]).sumShort()) col = i;
//     if (row >= 0 && col >= 0) return col === lastItem ? answer = excel[row].sumShort() : answer = excel[row][lastItem] - excel[row].sumShort() + excel[row][col];
//   }
// }

// faster version
const solveIt = excel => {
  let row = 0, col = 0; const el = excel.length, lastItem = el - 1;
  while (excel[row][lastItem] === excel[row].sumShort()) row++;
  while (excel[lastItem][col] === excel.map(item => item[col]).sumShort()) col++;
  if (row >= 0 && col >= 0) return col === lastItem ? excel[row].sumShort() : excel[row][lastItem] - excel[row].sumShort() + excel[row][col];
}


console.log(solveIt(grid));