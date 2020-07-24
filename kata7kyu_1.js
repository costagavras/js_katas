// Implement a "recursive function" that takes one parameter (n) and outputs a string i.e.

// const chirp = n => Array(n).fill('chirp').join`-`;
// const chirp=n=>Array.from({length:n-1},a=>"").reduce((a,b)=>a+"-chirp","chirp")

const chirp = n => n === 1 ? 'chirp' : 'chirp-' + chirp(n - 1);

console.log(chirp(4));