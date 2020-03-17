// The weight of a number will be from now on the sum of its digits. 
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) 
// and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) 
// and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

const orderWeight = string => {
  if (!string) return '';
  string = string.trim().split` `.sort();
  let realWeight = [], fakeWeight = [], result = [];
  string.forEach((el, i) => {
    realWeight.push(el);
    fakeWeight.push([...el].map(e => parseInt(e)).reduce((a,b) => a + b));
  });
  while (fakeWeight.length > 0) {
    let minIndex = fakeWeight.indexOf(Math.min(...fakeWeight));
    result.push(realWeight[minIndex]);
    fakeWeight.splice(minIndex, 1);
    realWeight.splice(minIndex, 1);
  }
  return result.join` `;
}

console.log(orderWeight(""));

// find index of first min in the array and move (+ delete) from old array

function orderWeight(strng) {
  const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
   function comp(a,b){
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
  return strng.split(' ').sort(comp).join(' ');
 }

 function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}

let orderWeight = s => s.split` `.sort((r, s) => r.split``.reduce((s, n) => s + +n, 0) - s.split``.reduce((s, n) => s + +n, 0) || r.localeCompare(s)).join` `;