// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

// the returned string should only contain lowercase letters
// 65-90, 97-122

// const kebabize = strCamelCase => {
//   let newKebabCase = '';
//   for (let char = 0; char < strCamelCase.length; char++) {
//     let upperCaseChar = strCamelCase.charCodeAt(char);
//     if (upperCaseChar >= 64 && upperCaseChar <= 90) { // upper case
//       newKebabCase += '-' + String.fromCharCode(upperCaseChar + 32);
//     } else if (upperCaseChar >= 97 && upperCaseChar <= 122) { // lower case
//       newKebabCase += strCamelCase[char];
//     }
//   }
//   return newKebabCase[0] === '-' ? newKebabCase.slice(1) : newKebabCase;
// }

function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function kebabize(str) {
  return str.split('').filter(v => isNaN(parseInt(v))).map(v => (v.toUpperCase() === v) ? v.replace(v, '-' + v.toLowerCase()) : v.toLowerCase()).join('').replace(/^-/, '')
}


console.log(kebabize('3CamelsHave3Humps'));