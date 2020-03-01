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