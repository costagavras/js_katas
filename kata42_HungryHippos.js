// The objective of the game is for each player to collect as many marbles as possible with their 'hippo' (a toy hippo model). 
// Your task is to write a simple class called Game that checks how many times a hippo has to leap into the centre of the arena to collect some food. 
// You will be given an integer array called board that defines where all the food can be found. 
// 1.  The board array contains 0’s for spaces and 1’s for food
// 2.  The board is n x n in size, where n is between 5 and 50.
// 3.  One leap consists of food items that are either horizontally or vertically connected to each other. If they are not connected, then another leap is needed.
// 4. Return an integer for the amount of leaps needed to collect all of the food.

board = [
         [1,0,0,0,0],
         [0,0,1,1,0],
         [1,0,1,0,1],
         [1,1,1,1,0],
         [1,1,1,0,1]
        ]

class Game {
  constructor(board) {
    this.board = board;
    this.leaps = 0;
  }

  play() {
    this.board = this.board.map((line, iter) => {
      let marblePosX = line.indexOf(1);
      let marblePosY = iter;
      while (marblePosX > -1) {
          this.board[marblePosY][marblePosX] = 0;
          this.checkRound(marblePosY, marblePosX);
          this.leaps += 1;
        marblePosX = line.indexOf(1);
      }
    })
    return this.leaps;
  }

  checkRound(posY, posX) {
    if (typeof this.board[posY - 1] !== 'undefined' && this.board[posY - 1][posX] === 1) {
      this.board[posY - 1][posX] = 0;
      this.checkRound(posY - 1, posX);
    }
    if (typeof this.board[posY][posX + 1] !== 'undefined' && this.board[posY][posX + 1] === 1) {
        this.board[posY][posX + 1] = 0;
        this.checkRound(posY, posX + 1);
    } 
    if (typeof this.board[posY + 1] !== 'undefined' && this.board[posY + 1][posX] === 1) {
        this.board[posY + 1][posX] = 0;
        this.checkRound(posY + 1, posX);
    }
    if (typeof this.board[posY][posX - 1] !== 'undefined' && this.board[posY][posX - 1] === 1) {
        this.board[posY][posX - 1] = 0;
        this.checkRound(posY, posX - 1);
    }
  }

}

game = new Game(board)
console.log(game.play());

function Game(board) { this.board = board; }

Game.prototype.play = function(){
  const height = board.length;
  const width = board[0].length;

  // Eat all contiguous food, beginning in one cell.
  const eat = (colI, rowI) => {
    if (colI < 0 || colI >= width || rowI < 0 || rowI >= height || !this.board[rowI][colI]) { return; }
    this.board[rowI][colI] = 0;
    eat(colI - 1, rowI);
    eat(colI + 1, rowI);
    eat(colI, rowI - 1);
    eat(colI, rowI + 1);
  };
  
  // Scan through the board for uneaten food.
  let leapCount = 0;
  this.board.forEach((row, rowI) => {
    row.forEach((isUneatenFoodCell, colI) => {
     if (isUneatenFoodCell) {
       ++leapCount;
       eat(colI, rowI);
     }
    });
  });
  
  return leapCount;
};


function Game(board){
  this.board = board;
}

Game.prototype.play = function(){
  var g = 0;
  const fill=(i,j)=>[[i-1,j],[i+1,j],[i,j-1],[i,j+1]]
                    .filter(([x,y])=>this.board[y]&&this.board[y][x])
                    .forEach(([x,y])=>(this.board[y][x]=0,fill(x,y)));
  for(let j=0; j<this.board.length; j++) for(let i=0; i<this.board[0].length; i++) if(this.board[j][i]) {
      this.board[j][i]=0; fill(i,j);
      g++;
  }
  return g;
}

function Game(board) {

  function mark(x, y, n) {
    if (!board[y] || !board[y][x]) return;
    if (board[y][x] === 1) {
      board[y][x] = n;
      mark(x-1, y, n);
      mark(x+1, y, n);
      mark(x, y-1, n);
      mark(x, y+1, n);
    }
  }

  this.play = function() {
    let n = 2;
    for(let y = 0; y < board.length; y++)
      for(let x = 0; x < board[y].length; x++)
        if (board[y][x] === 1) mark(x, y, n++);
    return n - 2;
  }
}