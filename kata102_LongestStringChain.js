// You are given a 2D string array, 10 rows and 10 columns, find out the longest string chain.
// A chain is defined as: All the characters in the chain are the same and they are the neighborhood of each others. 
// The neighborhood means the Von Neumann neighborhood (up, down, left and right).
// 1 . In order to make the kata more simple, the array contains only 4 letters(abcd).
// 2 . If there is more than one chains have same length, return the first one(follow the order from left to right, from top to bottom.)
//

var arr1=[
  ["b","a","c","b","d","c","b","d","c","d"],
  ["c","c","a","d","d","d","b","b","c","c"],
  ["c","a","d","d","b","b","b","a","b","b"],
  ["c","d","c","b","a","b","a","a","c","c"],
  ["b","a","b","c","c","d","b","d","d","a"],
  ["a","a","c","d","d","b","a","b","d","b"],
  ["a","a","c","c","c","c","d","d","b","c"],
  ["d","a","d","b","a","d","c","a","c","b"],
  ["b","a","b","c","a","a","b","a","c","a"],
  ["d","a","b","c","c","c","b","c","a","d"]
  ];

// var arr2=[
//         ["b","a","c","b","d"],
//         ["c","a","a","d","a"],
//         ["a","a","d","d","b"],
//         ["c","d","c","b","a"],
//         ["b","a","b","c","c"],
//         ];  


findChain = (arr) => {
  let arrA = arr.map((el,elIdx) => el.map((a,idx) => a === 'a' ? elIdx+''+idx : 0 ).filter(Boolean)).reduce((acc,val) => acc.concat(val),[]);
  let arrB = arr.map((el,elIdx) => el.map((a,idx) => a === 'b' ? elIdx+''+idx : 0 ).filter(Boolean)).reduce((acc,val) => acc.concat(val),[]);
  let arrC = arr.map((el,elIdx) => el.map((a,idx) => a === 'c' ? elIdx+''+idx : 0 ).filter(Boolean)).reduce((acc,val) => acc.concat(val),[]);
  let arrD = arr.map((el,elIdx) => el.map((a,idx) => a === 'd' ? elIdx+''+idx : 0 ).filter(Boolean)).reduce((acc,val) => acc.concat(val),[]);
  
  return checkWin(arrA);
  // arrA = arrA.flat();
  // const arrA = arr.map((el,elIdx) => el.map((a,idx) => { if (a === 'a') return elIdx+''+idx }));
  // return arrA;
}


const checkWin = aChain => {
  // console.log(aChain);
  let nextMatch, nextMatchArr = [], chainArray = [], auxChain = [], chainSet = new Set();
  for(let i = 0; i < aChain.length; i++) {
      nextMatch = aChain[i];
      chainSet.add(nextMatch);
          nextMatchArr = aChain.filter(p => +p === +nextMatch + 1 || +p === +nextMatch + 10 || +p === +nextMatch - 1 ||  +p === +nextMatch - 10 );
          // console.log(`nextMatchArr: ${nextMatchArr}, ${nextMatchArr.length} `);
          if (nextMatchArr.length === 0) chainSet.delete(nextMatch); 
          if (nextMatchArr.length === 1) chainSet.add(nextMatchArr[0]);
          if (nextMatchArr.length === 2) chainSet.add(nextMatchArr[0], chainSet.add(nextMatchArr[1]));
          if (nextMatchArr.length === 3) chainSet.add(nextMatchArr[0], chainSet.add(nextMatchArr[1]), chainSet.add(nextMatchArr[2]));
          if (nextMatchArr.length === 4) chainSet.add(nextMatchArr[0], chainSet.add(nextMatchArr[1]), chainSet.add(nextMatchArr[2]), chainSet.add(nextMatchArr[3]));
  }
  chainArray = [...chainSet].sort((a,b) => a - b);
  console.log(chainArray);
  return checkChain(chainArray, chainArray[0], [], []);
  
  // return chainResult;
}

const checkChain = (chainArray, foundItem, auxChain, chainResult) => {
  console.log(`chainArray: ${chainArray}`);
  let foundItemIndex, foundItemNext;
  if (!foundItem) return chainResult;
  auxChain.push(foundItem);
  foundItemIndex = chainArray.findIndex(el => +el === +foundItem);
  chainArray.splice(foundItemIndex,1);
  while (chainArray.length > 0) {
    [1,10,-1,10].forEach(step => {
      console.log(`foundItem: ${foundItem}, ${+foundItem + step}`);
      foundItemNext = chainArray.find(el => +el === +foundItem + step);
      console.log(`foundItemNext: ${foundItemNext}`)
      if (foundItemNext) {
        console.log(`auxChain: ${auxChain}`)
        checkChain(chainArray, foundItemNext, auxChain, chainResult);
      }
    });
      console.log('here')
      // chainArray.splice(foundItemIndex,1);
      chainResult.push(auxChain);
      checkChain(chainArray, chainArray[0], [], chainResult);
      // checkChain(chainArray, foundItemNext, auxChain);
    // console.log(`chainResult: ${chainResult}`);
    // checkChain(chainArray, foundItemNext);
  }
  return chainResult;
}





console.log(findChain(arr1));


