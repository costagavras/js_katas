// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) 
// independently of the state of the game or the player turn. The variables die1 and die2 
// are the dies thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

// 1.  There are two players and both start off the board on square 0.
// 2.  Player 1 starts and alternates with player 2.
// 3.  You follow the numbers up the board in order 1=>100
// 4.  If the value of both die are the same then that player will have another go.
// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. 
// If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, 
// slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! 
// If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. 
// For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.
// Return Game over! if a player has won and another player tries to play.
// Otherwise return Player n is on square x. Where n is the current player and x is the square they are currently on.

class SnakesLadders {

  constructor() {
      this.gameOver = false;
      this.player = Player1;
      this.player.position = 0;
      this.other_player = Player2;     
      this.other_player.position = 0;     
  }

  play(die1, die2) {
    
    if (this.gameOver) return 'Game over!'

    const move = die1 + die2; 
    
    (this.player.position + move) > 100 ? this.player.position = 200 - this.player.position - move : this.player.position += move;
    
    if (this.player.position == 100) {
      this.gameOver = true;
      return 'Player ' + this.player.num + ' Wins!';
    }

    if (this.player.position in SnakesLaddersMap) { // check if key exists
      this.player.position = SnakesLaddersMap[this.player.position];
    }

    const msg = 'Player ' + this.player.num + ' is on square ' + this.player.position;

    if (die1 != die2) {
      this.player.num == 1 ? this.player = Player2 : this.player = Player1; // swap players
      this.other_player.num == 1 ? this.other_player = Player2 : this.other_player = Player1; // swap players
    }
   
    console.log(msg);
    return msg;
  }

}

  const Player1 = {
    num: 1
  };

  const Player2 = {
    num: 2
  }

  const SnakesLaddersMap = {
    16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80,
    2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 78: 98, 87: 94
  }

  var game = new SnakesLadders();
  game.play(1, 1);
  game.play(1, 5);
  game.play(6,2);
  game.play(1,1);

// const portals = {
//     // Snakes
//     16:6, 46:25, 49:11, 62:19, 64:60, 74:53, 89:68, 92:88, 95:75, 99:80,
//     // Ladders
//     2:38, 7:14, 8:31, 15:26, 21:42, 28:84, 36:44, 51:67, 71:91, 78:98, 87:94
// };

// class SnakesLadders {    
//     constructor() {
//         this.player = 0; // player 1 starts
//         this.playerLocations = [0, 0];
//         this.gameOver = false;     
//     }    
//     get playerLocation() {
//         return this.playerLocations[this.player];
//     }
//     set playerLocation(newValue) {
//         this.playerLocations[this.player] = newValue;
//     }
//     get playerNumber() { return this.player + 1; }
//     play(die1, die2) {
//         if (this.gameOver) return 'Game over!';
//         this.playerLocation += die1 + die2; // update location
//         if (this.playerLocation === 100) {
//             this.gameOver = true;
//             return `Player ${this.playerNumber} Wins!`;
//         }
//         if (this.playerLocation > 100) this.playerLocation = 100 - (this.playerLocation % 100); // handle bounce
//         this.playerLocation = !portals[this.playerLocation] ? this.playerLocation : portals[this.playerLocation]; // update location if on portal
//         let msg = `Player ${this.playerNumber} is on square ${this.playerLocation}`;
//         this.player = die1 === die2 ? this.player : this.player === 0 ? 1 : 0; // update player turn
//         return msg;
//     }
// };

// function SnakesLadders() {
//   this.turn = true;
//   this.doubleTurn = false;
//   this.scores = [0, 0];
//   this.ladders = {2: 38, 7: 14, 8: 31, 15: 26, 16: 6, 21: 42, 28: 84, 36: 44, 46: 25, 49: 11, 51: 67, 62: 19, 64: 60, 71: 91, 74: 53, 78: 98, 87: 94, 89: 68, 92: 88, 95: 75, 99: 80}
// };

// SnakesLadders.prototype.play = function(die1, die2) {
//   if (this.scores.includes(100)) return "Game over!";
//   if (this.doubleTurn) this.doubleTurn = false;
//   else this.turn = !this.turn;
//   this.doubleTurn = die1 === die2;
//   this.scores[+this.turn] += die1 + die2;
//   if (this.scores[+this.turn] === 100) return `Player ${+this.turn + 1} Wins!`;
//   if (this.scores[+this.turn] > 100) this.scores[+this.turn] = 200 - this.scores[+this.turn];
//   this.scores[+this.turn] = this.ladders[this.scores[+this.turn]] || this.scores[+this.turn];
//   return `Player ${+this.turn + 1} is on square ${this.scores[+this.turn]}`;
// }