// Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated (see sample below) 
// 0 is considered to be an even index, no spaces in input strings


const sortMyString = s => {
  let odd = '', even = '';
  [...s].reduce((a, b, idx) => idx % 2 ? odd += b : even += b, 0);
  return even + ' ' + odd;
}

const sortMyString2 = s => {
  const [even, odd] = [...s].reduce((a, b, idx) => idx % 2 ? odd += b : even += b, 0);
  return even + ' ' + odd;
}

console.log(sortMyString2("CodeWars"));

// const sortMyString = s => s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1');

// const sortMyString = (str) => 
//   [...str].reduce((acc, cur, i) =>
//     (acc[i & 1] += cur) && acc
//   , ['', '']).join(' ');

// function sortMyString(S) {
//   return [...S.split``.filter((_,i)=>i%2===0),' ',...S.split``.filter((_,i)=>i%2===1)].join`` // same as split('') or join('') ?
// }

// const sortMyString = s => [...s].reduce((a, c, i) => (a[i%2] += c, a), ["",""]).join(" ");