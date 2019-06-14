// Create a function that accepts dimensions, of Rows x Columns,
// as parameters in order to create a multiplication table sized according to the given dimensions.
// **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// multiplication_table(3,3)
//
// 1 2 3
// 2 4 6
// 3 6 9
//
// -->[[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(row,col){
  var mainArray=[], subArray=[];
  for(var r = 1; r <= row; r++) {
    for(var c = 1; c <= col; c++) {
      subArray.push(c * r);
    }
    mainArray.push(subArray);
    subArray = [];
  }
  return mainArray;
}

console.log(multiplicationTable(3,4));

// function multiplicationTable(row,col){
//   return [...Array(row)].map((_, i) =>
//     [...Array(col)].map((_, j) => (i + 1) * (j + 1))
//   );
// }
