// The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. 
// The pieces fall straight down, occupying the next available space within the column. 
// The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.
// Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

// If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.
// If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.
// If the game has been won by a player, any following moves should return ”Game has finished!”.
// Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
// Player 1 starts the game every time and alternates with player 2.
// The columns are numbered 0-6 left to right.

// class Connect4 {

//   constructor() {
//     this.playerTurn = 0;
//     this.field = {};
//     this.fieldSlots2Check = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17];
//     this.win = false;
//   }

//   play(col) {
//     if (this.win) { return 'Game has finished!' };
//     if (typeof this.field[col] !== 'undefined') {
//       if (col <= 6) { return 'Column full!'};
//     } else {
//       this.turnStatus = this.fillNext(col);
//       this.winStatus = this.check4Four();
//       this.playerTurn ? this.playerTurn = 0 : this.playerTurn = 1;
//     }
//     if (this.win) {
//       return this.winStatus
//      } else {
//        return this.turnStatus;
//      }
//   }

//   fillNext(slot) {
//     if (slot <= 41) {
//       if(typeof this.field[slot + 7] === 'undefined' && slot >= 35) {
//         this.field[slot] = this.playerTurn ? 1 : 0;
//       } else if (typeof this.field[slot + 7] === 'undefined') {
//         this.fillNext(slot + 7);
//       } else if (typeof this.field[slot + 7] !== 'undefined') {
//         this.field[slot] = this.playerTurn ? 1 : 0;
//       }
//     } 
//     return 'Player ' + (this.playerTurn + 1) + ' has a turn';
//   }
    
//     check4Four() {
//       this.fieldSlots2Check.map(slot => {
//         if (
//             ((this.field[slot] + this.field[slot + 1] + this.field[slot + 2] + this.field[slot + 3]) == 0 ||
//             (this.field[slot] + this.field[slot + 1] + this.field[slot + 2] + this.field[slot + 3]) == 4) ||  // horizontal

//             ((this.field[slot + 7] + this.field[slot + 8] + this.field[slot + 9] + this.field[slot + 10]) == 0 || // horizontal
//             (this.field[slot + 7] + this.field[slot + 8] + this.field[slot + 9] + this.field[slot + 10]) == 4) ||

//             ((this.field[slot + 14] + this.field[slot + 15] + this.field[slot + 16] + this.field[slot + 17]) == 0 ||
//             (this.field[slot + 14] + this.field[slot + 15] + this.field[slot + 16] + this.field[slot + 17]) == 4) || // horizontal

//             ((this.field[slot + 21] + this.field[slot + 22] + this.field[slot + 23] + this.field[slot + 24]) == 0 || 
//             (this.field[slot + 21] + this.field[slot + 22] + this.field[slot + 23] + this.field[slot + 24]) == 4) || // horizontal

//             ((this.field[slot + 21] + this.field[slot + 15] + this.field[slot + 9] + this.field[slot + 3]) == 0 || // diagonal
//             (this.field[slot + 21] + this.field[slot + 15] + this.field[slot + 9] + this.field[slot + 3]) == 4) ||

//             ((this.field[slot] + this.field[slot + 8] + this.field[slot + 16] + this.field[slot + 24]) == 0 || // diagonal
//             (this.field[slot] + this.field[slot + 8] + this.field[slot + 16] + this.field[slot + 24]) == 4) || 
            
//             ((this.field[slot] + this.field[slot + 7] + this.field[slot + 14] + this.field[slot + 21]) == 0 ||// vertical
//             (this.field[slot] + this.field[slot + 7] + this.field[slot + 14] + this.field[slot + 21]) == 4) || 
            
//             ((this.field[slot + 1] + this.field[slot + 8] + this.field[slot + 15] + this.field[slot + 22]) == 0 || // vertical
//             (this.field[slot + 1] + this.field[slot + 8] + this.field[slot + 15] + this.field[slot + 22]) == 4) ||

//             ((this.field[slot + 2] + this.field[slot + 9] + this.field[slot + 16] + this.field[slot + 23]) == 0 || // vertical
//             (this.field[slot + 2] + this.field[slot + 9] + this.field[slot + 16] + this.field[slot + 23]) == 4) ||

//             ((this.field[slot + 3] + this.field[slot + 10] + this.field[slot + 17] + this.field[slot + 24]) == 0 || // vertical
//             (this.field[slot + 3] + this.field[slot + 10] + this.field[slot + 17] + this.field[slot + 24]) == 4))
            
//         {
//           this.win = true;
//         }
//       });
//       if (this.win) { return 'Player ' + (this.playerTurn + 1) + ' wins!'};
//     }

// }

// game = new Connect4();
// console.log(game.play(1));
// console.log(game.play(1));
// console.log(game.play(2));
// console.log(game.play(2));
// console.log(game.play(3));
// console.log(game.play(3));
// console.log(game.play(4));
// console.log(game.play(4));


// this.board = Array.from({length: 6}).fill().map(()=>Array.from({length: 7}).fill('_'));
// this.player = this.player == '1' ? '2' : '1';
// this.board = [...Array(7)].map(e => Array());
// this.grid = Array(7).fill(0);
// this.grid = this.grid.map(e => Array(6).fill(0));\\

// function Connect4 (){
//   this.player = 0
//   this.columns = [...Array(7)].reduce((a,_,i) => (a[i]=0,a),{})
//   this.m = [...Array(6)].map(_=>Array(7).fill(' '))
//   this.gameOver = false
// };

// Connect4.prototype.play = function (col){
//   if (this.gameOver) return 'Game has finished!'
//   if (this.columns[col] === 6) return 'Column full!'
//   const p = this.player ? 'x' : 'o'
//   this.m[this.columns[col]++][col] = p
//   for (let r = 0; r < 6; r++)
//     for (let c = 0; c < 7; c++)
//       if ([
//         [[r+3,c],[r+2,c],[r+1,c],[r,c]],
//         [[r,c+3],[r,c+2],[r,c+1],[r,c]],
//         [[r+3,c+3],[r+2,c+2],[r+1,c+1],[r,c]],
//         [[r-3,c+3],[r-2,c+2],[r-1,c+1],[r,c]]
//       ].some(arr => arr.every(([R,C]) => this.m[R] && this.m[R][C] === p))) {
//         this.gameOver = true
//         return `Player ${this.player+1} wins!`
//       }
        
//   let s = `Player ${this.player+1} has a turn`
//   this.player ^= 1
//   return s
// };

// class Connect4 {
//   constructor() {
//     this.player = 1
//     this.board = Array.from({ length: 7 }, () => [])
//     this.finished = false
//   }
//   play(col) {
//     if(this.finished)
//       return 'Game has finished!'

//     if(this.board[col].length >= 6)
//       return 'Column full!'

//     const row = this.board[col].length
//     this.board[col].push(this.player)
//     const range4 = Array.from({ length: 4 }, (_, i) => i)
//     this.finished = range4.some(i =>
//       range4.every(j => this.board[col][row-i+j] === this.player) ||
//       range4.every(j => (this.board[col-i+j] || [])[row] === this.player) ||
//       range4.every(j => (this.board[col-i+j] || [])[row-i+j] === this.player) ||
//       range4.every(j => (this.board[col-i+j] || [])[row+i-j] === this.player)
//     )
    
//     if(this.finished)
//       return `Player ${this.player} wins!`

//     let ret = `Player ${this.player} has a turn`
//     this.player = this.player === 1 ? 2 : 1
//     return ret
//   }
// }

// // Voile
// function Connect4 (){
//   let board = Array(7).fill('').map(a=>Array(6).fill(0));
//   let player = 1;
//   let won = false;
//   this.play = function (col){
//     if(won)return "Game has finished!";
//     if(board[col].indexOf(0)===-1)return "Column full!";
//     board[col][board[col].indexOf(0)]=player;
//     let w = this.checkWin();
//     if(w>0){won = true; return "Player "+w+" wins!";}
//     player=3-player;
//     return "Player "+(3-player)+" has a turn";
//   };
//   this.checkWin = function(){
//     for(let i=0;i<7;i++) {
//       for(let j=0;j<6;j++) {
//         if(board[i][j]!==0 && (
//              (i<4 && checkEqual(board[i][j],board[i+1][j],board[i+2][j],board[i+3][j]))
//           || (j<3 && checkEqual(board[i][j],board[i][j+1],board[i][j+2],board[i][j+3]))
//           || (i<4 && j<3 && checkEqual(board[i][j],board[i+1][j+1],board[i+2][j+2],board[i+3][j+3]))
//           || (i<4 && j>2 && checkEqual(board[i][j],board[i+1][j-1],board[i+2][j-2],board[i+3][j-3]))
//         )) return board[i][j];
//       }
//     }
//     return 0;
//   }
//   var checkEqual = function(...arr){return Math.max(...arr)===Math.min(...arr)};
// };

// class Connect4 {
//   constructor() {
//     this.board = [...Array(7)].map(r=>[...Array(6)].fill(0)), this.player = 1, this.gameOver = 0;
//   }

//   win() {
//     const b = this.board, p = this.player, f = [ b, // | columns
//       b[0].map((_,y)=>b.map((_,x)=>b[x][y])),       // - rows
//       b.map((_,y)=>b.map((_,x)=>b[x][x+y-3])),      // / diagonal
//       b.map((_,y)=>b.map((_,x)=>b[x][8-x-y]))       // \ diagonal
//     ].map(d=>d.map(r=>r.join('')).join('X')).join('X');
//     return RegExp(p+'{4}').test(f) ? (this.gameOver = 1, p) : 0;
//   }

//   play(col) {
//     let row = this.board[col].indexOf(0), w;
//     this.board[col][row] = this.player;
//     return this.gameOver    ? `Game has finished!` :
//            row < 0          ? `Column full!`       :
//            (w = this.win()) ? `Player ${w} wins!`  :
//            (this.player = this.player%2+1, `Player ${this.player%2+1} has a turn`);
//   }
// }

// ================================================ConnectFour===========



const whoIsWinner = posishList => {
  if (posishList.length <= 6) return 'Draw';
  const [player1, player2] = [posishList[0].slice(2),posishList[1].slice(2)];
  const [player1Plays, player2Plays] = [getPosishListNum(posishList).filter((_,idx) => !(idx % 2)).map(v => +v), getPosishListNum(posishList).filter((_,idx) => idx % 2).map(v => +v)];

  for (let i = 4; i <= Math.max(player1Plays.length, player2Plays.length); i++) {
    if (checkWin(player1Plays.slice(0,i))) return player1;
    if (checkWin(player2Plays.slice(0,i))) return  player2;
  }
  return 'Draw';
}

const getPosishListNum = list => {
  const aCols = { "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7}
  let aRowPosish = {};

  return list.map(pc => {
    aRowPosish[pc[0]] = aRowPosish[pc[0]] + 1 || 1;
    return String(aRowPosish[pc[0]]) + String(aCols[pc[0]]);
  })
}

const checkWin = aPlays => {
  let nextMatch, match;
  for(let i = 0; i < aPlays.length; i++) {
    [1,9,10,11].some(el => { // 1 matches row, 9 - left diag., 10 - col, 11 - right diag.
      nextMatch = +aPlays[i];
      match = 1;
        while (nextMatch) {
          nextMatch = aPlays.find(p => p === (nextMatch + el)); 
          if (nextMatch) {
              match++
          } else break;
          if (match === 4) return true;
        }
      });
      if (match === 4) return true;
  }
  return false;
}


// const checkWin = aPlays => {
//   for(let i = 0; i < aPlays.length; i++) {
//     let nextMatch = +aPlays[i];
//     match = 1;
//       while (nextMatch) {
//         nextMatch = aPlays.find(p => p === (nextMatch + 1)); // matching along row
//         if (nextMatch) {
//           match++;
//         } else break;
//         if (match === 4) return true;
//       }

//     nextMatch = +aPlays[i];
//     match = 1;
//       while (nextMatch) {
//         nextMatch = aPlays.find(p => p === (nextMatch + 10)); // matching along column
//         if (nextMatch) {
//           match++;
//         } else break;
//         if (match === 4) return true;
//       }

//     nextMatch = +aPlays[i];
//     match = 1;
//       while (nextMatch) {
//         nextMatch = aPlays.find(p => p === (nextMatch + 11)); // matching right diagonal
//         if (nextMatch) {
//           match++;
//         } else break;
//         if (match === 4) return true;
//       }

//     nextMatch = +aPlays[i];
//     match = 1;
//       while (nextMatch) {
//         nextMatch = aPlays.find(p => p === (nextMatch + 9)); // matching left diagonal
//         if (nextMatch) {
//           match++;
//         } else break;
//         if (match === 4) return true;
//       }
//   }
//   return false;
// }

// console.log(whoIsWinner(['G_Red',
// 'F_Yellow',
// 'F_Red',
// 'F_Yellow',
// 'A_Red',
// 'D_Yellow',
// 'F_Red',
// 'F_Yellow',
// 'E_Red',
// 'E_Yellow',
// 'E_Red',
// 'B_Yellow',
// 'D_Red',
// 'D_Yellow',
// 'B_Red',
// 'B_Yellow',
// 'C_Red',
// 'F_Yellow'])); // exp red, not draw

// function whoIsWinner(piecesPositionList){
//  dict = {A: 35, B: 36, C: 37, D: 38, E: 39, F: 40, G:41};
//   res = new Array(42).fill("-");
//   for(s of piecesPositionList){
//     res[dict[s[0]]] = s[2];
//     dict[s[0]] -= 7;
//     if(/((R.{6}){3}R)|(^((.{0,3}|.{7,10}|.{14,17}|.{21,24}|.{28,31}|.{35,38})R{4}))|(^((.{3,6}|.{10,13}|.{17,20})(R.{5}){3}R))|(^(.{0,3}|.{7,10}|.{14,17})(R.{7}){3}R)/.test(res.join(""))) return "Red";
//     if(/((Y.{6}){3}Y)|(^((.{0,3}|.{7,10}|.{14,17}|.{21,24}|.{28,31}|.{35,38})Y{4}))|(^((.{3,6}|.{10,13}|.{17,20})(Y.{5}){3}Y))|(^(.{0,3}|.{7,10}|.{14,17})(Y.{7}){3}Y)/.test(res.join(""))) return "Yellow";
//   }
//   return "Draw";
// }

// function whoIsWinner(piecesPositionList) {
//   //return "Red", "Yellow" or "Draw"
//   var stacks = Array(7).fill().map(e => []);

//   function check(m, n, i, j, color) {
//       let limit = 3;
//       for (let k = -1; stacks[m + i * k] && stacks[m + i * k][n + j * k] === color; k-- , limit--);
//       let res = true;
//       for (let k = 1; res && k <= limit; k++) {
//           res = (!!stacks[m + i * k]) && stacks[m + i * k][n + j * k] === color;
//       }
//       return res;
//   }

//   for (let e of piecesPositionList) {
//       let index = e.charCodeAt(0) - 'A'.charCodeAt(0);
//       let color = e.substring(2);
//       let stack = stacks[index];
//       let checkbelow = stack.length >= 3;
//       let win = check(index, stack.length, 1, 0, color) || checkbelow && check(index, stack.length, 0, -1, color)
//           || check(index, stack.length, 1, -1, color)
//           || check(index, stack.length, -1, -1, color);
//       if (win) return color;
//       else stack.push(color);
//   }

//   return "Draw";
// }


// function whoIsWinner(piecesPositionList){
//   let board = Array(8).fill().map(() => Array(9).fill('*')); // great!
//   let bottom = {A: 6, B: 6, C: 6, D: 6, E: 6, F: 6, G: 6};
//   let columns = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7};
//   let dir = [[[0, 1], [0, -1]], [[-1, 0], [1, 0]], [[-1, 1], [1, -1]], [[1, 1], [-1, -1]]];
//   for(let pp of piecesPositionList){
//     let [c, color] = pp.split('_');
//     let col = columns[c], row = bottom[c]--;
//     board[row][col] = color[0];
//     for(let [[r1, c1], [r2, c2]] of dir){
//       let c = col, r = row, count = 1;
//       while(board[r += r1][c += c1] === color[0]) count++;
//       c = col, r = row;
//       while(board[r += r2][c += c2] === color[0]) count++;
//       if(count >= 4) return color;
//     }
//   }
//   return 'Draw';
// }

// function whoIsWinner(piecesPositionList){
//   let map = { A: [], B: [], C: [], D: [], E: [], F: [], G: [] };
//   let aim = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[1, -1],[1, 0],[1, 1]];

//   for (let item of piecesPositionList) {
//     let [key, color] = item.split('_');
//     let i = Object.keys(map).indexOf(key);
//     let j = map[key].push(color) - 1;
//     let mtx = Object.values(map).map(arr => arr.map(it => it === color ? 1 : 0));
//     let add = (i, j, ni, nj) => mtx[i] && mtx[i][j] > 0 ? mtx[i][j] + add(i+ni, j+nj, ni, nj) : 0;

//     for (let [ni, nj] of aim.filter(([ni, nj]) => mtx[i+ni] && mtx[i+ni][j+nj])) {
//       if (1 + add(i+ni, j+nj, ni, nj) + add(i+ni*-1, j+nj*-1, ni*-1, nj*-1) > 3) {
//         return color;
//       }
//     }
//   }

//   return 'Draw';
// }

// function whoIsWinner(pieces) {
//   const grid = [...Array(7)].map(col => []);
//   const won = (color, col, row, x, y) => {
//     let total = 0;
//     while (grid[col+x] && grid[col+x][row+y] === color) {
//       col += x;
//       row += y;
//     }
//     while (grid[col] && grid[col][row] === color) {
//       total++;
//       col -= x;
//       row -= y;
//     }
//     return total >= 4;
//   }
//   for (const [letter, color] of pieces.map(piece => piece.split('_'))) {
//     const col = letter.charCodeAt(0)-'A'.charCodeAt(0);
//     const row = grid[col].push(color) - 1;
//     for (const [x, y] of [[1, 0], [0, 1], [1, 1], [1, -1]])
//       if (won(color, col, row, x, y))
//         return color;
//   }
//   return "Draw";
// }

// console.log(whoIsWinner(['G_Red',
// 'F_Yellow',
// 'F_Red',
// 'F_Yellow',
// 'A_Red',
// 'D_Yellow',
// 'F_Red',
// 'F_Yellow',
// 'E_Red',
// 'E_Yellow',
// 'E_Red',
// 'B_Yellow',
// 'D_Red',
// 'D_Yellow',
// 'B_Red',
// 'B_Yellow',
// 'C_Red',
// 'F_Yellow'])); // exp red, not draw