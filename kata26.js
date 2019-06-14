// If you reach the end point before all your moves have gone, you should return Finish.
// If you hit any walls or go outside the maze border, you should return Dead.
// If you find yourself still in the maze after using all the moves, you should return Lost.

// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

function mazeRunner(maze, directions) {
  var step = maze.length;
  var moves = {"N": -step, "S": step, "W": -1, "E": 1}
  var field = step * step;
  var dead = false, earlyFinish = false;
  var mazeFlat = [].concat.apply([],maze);
  var start = mazeFlat.indexOf(2)+1;
  for(var i = 0; i < directions.length; i++) {
    start += moves[directions[i]];
    if (mazeFlat[start-1] === 1 || (start < 1 || start > field)) {
      dead = true;
      break;
    } else if (mazeFlat[start-1] === 3) {
      earlyFinish = true;
      break;
    }
  }
  if (dead) {return "Dead"}
  if (earlyFinish || mazeFlat[start-1] === 3 ) {return "Finish"}
  return "Lost"
}

console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]));
