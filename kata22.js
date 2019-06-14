// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.
// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                        // 1*2*6 = 12, and finally 1*2 = 2

// function persistence(num) {
//   let i = 0;
//   num = String(num);
//   while (num.length > 1) {
//     i++;
//    num = num.split("").reduce(function(a,b){
//       return String(a * b);
//     });
//   }
//   return i;
// }



const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b))
    : 0;
}

console.log(persistence(45));
