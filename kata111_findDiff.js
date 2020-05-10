// ===== Find differences in two lines ===

// You have to write a function which will find:
// The index where the changes begin
// The characters which were added
// The characters which were deleted

// return { index: integer, addedText: string, deletedText: string }

// const findDifferent = (str1, str2) => {
//   let oResult = {index: -1, addedText: '', deletedText: ''};

// }


function findDifferent(str1, str2){
  // good luck my friend
  let index = 0
  let added = "", deleted= ""
  if (str1==str2) return {index: -1, addedText: '', deletedText: ''}
  str1=Array.from(str1)
  str2=Array.from(str2)
  while(str1[0]===str2[0]){
    index++
    str1.shift()
    str2.shift()
  }
  console.log(str1, str2);
  //index--
  let p1=str1.pop()
  let p2=str2.pop()
  while(p1==p2){
    p1=str1.pop()
    p2=str2.pop()
  }
  str1.push(p1)
  str2.push(p2)
  return {index: index, addedText: str2.join(""), deletedText: str1.join("")}
  //console.log(index, str1.join(""), str2.join(""))
  
}


// function findDifferent(str1, str2) {
//   if (str1 === str2) return { index: -1, addedText: '', deletedText: '' };
//   let addedText = str2, deletedText = str1;
//   while (deletedText[0] === addedText[0]) {
//     deletedText = deletedText.slice(1);
//     addedText = addedText.slice(1);
//   }
//   const index = str1.length - deletedText.length;
//   while (deletedText[deletedText.length - 1] === addedText[addedText.length - 1]) {
//     deletedText = deletedText.slice(0, -1);
//     addedText = addedText.slice(0, -1);
//   }
//   return { index, addedText, deletedText };
// }

console.log(findDifferent("Hello John, how are you?", "Hello Jane, how are you?"));