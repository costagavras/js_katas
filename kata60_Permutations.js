// Permutations, no duplicates

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

const permutations0 = string => {
  if (string.length === 1) return [string];
  let stringArray = string.split('');
  let permArray = [[stringArray.shift()]]; // double brackets applies to Prototype internal .shift() method, not working without it.

  while (stringArray.length) {
    // console.log('permArray: ' + permArray);
    // console.log('stringArray: ' + stringArray);
    // assigns first letter to currLetter and modifies stringArray;
    const currLetter = stringArray.shift();
    // console.log('currLetter: ' + currLetter);
    let tempArray = [];
    // permArray increases with each additional push of letters ([a], [[ba, ab], [abc, acb, bac, bca, cab, cba]], ...)
    permArray.forEach(result => {
      // console.log('result: ' + result);
      let i = 0;
      // for each item (result) in permArray, I create a copy (tmp) and insert with .splice(i, 0, currLetter) (depending from i) before and after the current letter
      while (i <= result.length) {
        const tmp = [...result];
        tmp.splice(i, 0, currLetter);
        tempArray.push(tmp.join(''));
        i++;
      }
    })
    // console.log('tempArray: ' + tempArray);
    permArray = tempArray;
  }
  // console.log('permArray: ' + permArray);
  return Array.from(new Set(permArray)).sort();
}

// console.log(permutations('a'));


// const flip = string => {
//   for (let i = 0; i < string.length - 1; i++) {
//     console.log("1: " + string);
//     let temp1 = string[i];
//     let temp2 = string[i + 1];
//     let stringArray = string.split('');
//     console.log(stringArray, temp1, temp2);
//     stringArray.splice(i,1, temp2);
//     stringArray.splice(i + 1, 1, temp1);
//     console.log("2: " + stringArray);
//     string = stringArray.join('');
//     permArray.push(string);
//   }
//   if (origString === string) return;
//   flip(string);
// }
// flip(string);

// function permutations(str) {
//   return (str.length <= 1) ? [str] :
//           Array.from(new Set(
//             str.split('')
//                .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
//                .reduce((r, x) => r.concat(x), [])
//           ));
//  }

// same with newer notation and slice instead of substring
// const permutations = (str) => 
// str.length === 1 ? 
//   [str] : Array.from(new Set(
//   [...str].map((char, i) => 
//     permutations(str.slice(0, i) + str.slice(i + 1))
//       .map(p => char + p)
//   ).reduce((a, b) => a.concat(b), [])
// ));

// function permutations1(string) {
//   const permutations = (letters) => (letters.reduce((prev, next, index) => {
//     const rest = [...letters.slice(0, index), ...letters.slice(index + 1)]
//     // console.log(rest);
//     return [...prev, ...rest.length ? permutations(rest).map(val => next + val) : next]
//   }, []))
//   return Array.from(new Set(permutations(string.split(''))))
// }

// const permutations = str => {
//   return Array.from(new Set(str.length === 0 ? [''] : permutations(str.slice(1)).reduce((res, curr) => {
//     for (let i = 0; i < str.length; i++) {
//       res.push(curr.slice(0, i) + str[0] + curr.slice(i));
//     }
//     return res;
//   }, [])));
// };

// s = [...s];
// const swap = (i, j) => [s[i], s[j]] = [s[j], s[i]];

// console.log(permutations1('abc'));

// function permutations(str) {
//   const set = new Set();
//   function swap(arr, step) {
//     for (let i = step; i < str.length; i++) {
//       let newArr = arr.slice();

//       [newArr[step], newArr[i]] = [newArr[i], newArr[step]];
//       set.add(newArr.join(''));
//       swap(newArr, step + 1)
//     }
//   }
//   swap([...str], 0)
//   return [...set];
// }

const permutations2=p=s=>s[1]?[...s].reduce((a,l)=>[...a,...p(s.replace(l,'')).map(e=>l+e)],[]).sort().filter((e,i,a)=>!i||e!=a[i-1]):[s];

console.log(permutations1('abc'));