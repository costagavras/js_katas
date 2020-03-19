// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters 
// can be rearranged to match str2, otherwise returns false. 
// Only lower case letters will be used (a-z). No punctuation or digits will be included.

const scramble = (str1, str2) => {
  const str1Obj = [...str1].reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  const str2Obj = [...str2].reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  return (Object.keys(str2Obj).map(keys => {
    if (!str1Obj[keys]) return false;
    return str2Obj[keys] > str1Obj[keys] ? false : true;
  })).every(item => item === true);
}

const scramble = (str1, str2) => {
  const str1Obj = str1.split``.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  const str2Obj = str2.split``.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  return (Object.keys(str2Obj).map(keys => {
    if (!str1Obj[keys]) return false;
    return str2Obj[keys] > str1Obj[keys] ? false : true;
  })).every(item => item !== false);
}

  // let str1Arr = str1.split``, str2Arr = str2.split``;
  // return (str2Arr.map(char => {
    //   return str1Arr.indexOf(char) > -1 ? str1Arr.splice(str1Arr.indexOf(char), 1) : false;
    // })).every(item => item !== false);
    
  // let result = true;
  // for (let i = 0; i < str2Arr.length; i++) {
  //     if (str1Arr.indexOf(str2Arr[i]) === -1) {
  //       return false;
  //     } else {
  //       str1Arr.splice(str1Arr.indexOf(str2Arr[i]), 1);
  //     }
  // }
  //   return result;

// console.log(scramble('aabbcamaomccsdd','commas'));
// console.log(scramble('scriptjavx', 'javascript'));
console.log(scramble('cedewaraaossoqqyt','codewars'));

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}


function scramble(str1, str2) {
  let arr1 = str1.split('').sort(),
    arr2 = str2.split('').sort(),
    prevIndex = 0
 
  return arr2.every(v => (prevIndex = arr1.indexOf(v, prevIndex) + 1) > 0)
}

function scramble(str1, str2) {
  const count = [...str1].reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
  return [...str2].every(v => count[v]-- > 0);
}