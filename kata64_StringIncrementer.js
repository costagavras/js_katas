// Write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// const incrementString = (string) => {
//   const numbers = string.match(/\d+)/g);
//   if (!string || !numbers) return string + '1';
//   const padding = numbers[0].length - String(+numbers+1).length;
//   return string.replace(/\d+/g, padding > 0 ? '0'.repeat(padding) + String(+numbers+1): String(+numbers+1));
// }

// console.log(incrementString("foobar0909"));

// function incrementString2(input) {
//   return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//       return +d + 1 + ns.replace(/9/g, '0');
//     });
// }

const incrementString = s => s.replace(/[0-8]?9*$/, m => ++m);

function incrementString2 (strng) {
  return strng.replace(/[\d]*$/, i => String(+i + 1).padStart(i.length, 0));
}

console.log(incrementString2("foobar00909"));