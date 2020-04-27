// Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. 
// A Boggle board is a 2D array of individual characters, e.g.:
// Valid guesses are strings which can be formed by connecting adjacent cells
// (horizontally, vertically, or diagonally) without re-using any previously used cells.

// var testBoard = [
//   ["E","A","R","A"],
//   ["N","L","E","C"],
//   ["I","A","I","S"],
//   ["B","Y","O","R"]
// ];

var testBoard = [
  [ 'T', 'T', 'M', 'D', 'A' ],
  [ 'G', 'Y', 'I', 'N', 'N' ],
  [ 'P', 'A', 'L', 'C', 'E' ],
  [ 'I', 'A', 'U', 'L', 'G' ],
  [ 'A', 'M', 'I', 'N', 'A' ] 
];

const checkWord = (mainBoard, word) => {
  let aLocFirst = [], checkResult = [];
  const auxBoard = JSON.parse(JSON.stringify(mainBoard));
  for (i = 0; i < auxBoard.length; i++) {
    let aNum = auxBoard[i].filter(a => a === word[0]).length;
      for (k = 1; k <= aNum; k++) {
        const col = auxBoard[i].findIndex(a => a === word[0])
        aLocFirst.push(`${i}:${col}`)
        auxBoard[i][col] = '-';
      }
  }
  console.log(aLocFirst);
  for (i = 0; i < aLocFirst.length; i++) {
    console.log(aLocFirst[i]);
    // console.log(checkLetter(aLocFirst[i], JSON.parse(JSON.stringify(mainBoard)), word.slice(1), [])[0])
    if (checkLetter(aLocFirst[i], JSON.parse(JSON.stringify(mainBoard)), word.slice(1), [])[0]) return true;
    // checkResult = checkLetter(aLocFirst[i], JSON.parse(JSON.stringify(mainBoard)), word.slice(1), [], [])[0];
  }
  // console.log(checkResult);
  // if (checkResult) return true;
  return false;
}

const checkLetter = (location, board, word, wordResult) => {

  const [row,col] = location.split(':').map(n=> +n);
  board[row][col] = '-';
  console.log('rcw1:', row,col,word);
  console.log('wordResult1:', wordResult);
  console.log(board);
  
  if (word === '') {
    wordResult.push('true');
    return wordResult;
  }
  numOptions = findOptions(row,col,board,word[0]);
  console.log('numOptions:', numOptions);
  for (i = 0; i < numOptions.length; i++) {
    // if (numOptions) numOptions.slice(1);
    console.log(numOptions[i], word);
    return checkLetter(`${numOptions[i][0]}:${numOptions[i][1]}`, board, word.slice(1), wordResult);
  }
    console.log('rcw2:', row,col,word);
    console.log('wordResult2:', wordResult);
    
  return wordResult;
}

const findOptions = (row,col,board,letter) => {
  let num = 0, locLetters = [];
  [-1,0,1].forEach(r => {
    [-1,0,1].forEach(c => {
      if (board[row+r] != null && board[row+r][col+c] != null && board[row+r][col+c] === letter) {
        locLetters.push([row+r,col+c]);
        num++;
      }
    })
  })
  return locLetters;
}


console.log('end Result: ' + checkWord(testBoard, "MINGLE"));


