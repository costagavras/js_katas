// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// const dashatize = num  => {
//   return isNan(num) ? String(num) : Math.abs(num).toString().split('').map(val => +val % 2 === 0 ? val : '-' + val + '-').join('').replace(/^-/,'').replace(/-{2,}/g, '-').replace(/-$/, '');
// }

// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }

// .filter(Boolean) filters out every empty element in the array.
const dashatize = num => Math.abs(num).toString().split(/([13579])/g).filter(Boolean).join('-');

//num + '' makes a string
// function dashatize(num) {
//   return (!num) ? num + '' : String(num).match(/[02468]+|[13579]/g).join('-')
//  };

//  const dashatize = num => (String(num).match(/([13579]|[02468]+)/g) || [`NaN`]).join('-');

console.log(dashatize(6815));
