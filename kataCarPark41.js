// Your task is to escape from the carpark using only the staircases provided to reach the exit. 
// You may not jump over the edge of the levels and the exit is always on the far right of the ground floor.

// 1. You are passed the carpark data as an argument into the function.
// 2. Free carparking spaces are represented by a 0
// 3. Staircases are represented by a 1
// 4. Your parking place (start position) is represented by a 2
// 5. The exit is always the far right element of the ground floor.
// 6. You must use the staircases to go down a level.
// 7. You will never start on a staircase.
// 8. The start level may be any level of the car park.
// 9. Each floor will have only one staircase apart from the ground floor which will not have any staircases.

// Return an array of the quickest route out of the carpark
// R1 = Move Right one parking space.
// L1 = Move Left one parking space.
// D1 = Move Down one level.

const escape = carpark => {
  const myLocation = {};
  const stairsLocation = {};
  const moveSequence = [];
  let locationFound = false;
  const widthParkingLot = carpark[0].length - 1;
  carpark.map((level, iter) => {
    if (level.indexOf(2) > -1) {
      locationFound = true;
    }
    if (locationFound) {
      myLocation[iter] = level.indexOf(2);
      stairsLocation[iter] = level.indexOf(1);
    }
  });
  let newLocation;
  Object.entries(stairsLocation).map((stair) => {
    if (myLocation[stair[0]] == -1) { // my location is not known (case after descending from my initial level);
      myLocation[stair[0]] = newLocation; // overwriting new loop myLocation[stair[0]] with previous loop newLocation value (where the stairs above are) (line 53);
    }
    newLocation = myLocation[stair[0]] !== -1 ? myLocation[stair[0]] : stairsLocation[stair[0]]; // case when it's my initial level, my new location is myLocation or else where the stairs are above(line 37)
    if (stairsLocation[stair[0]] !== -1) { // case all levels bar the exit one
      let move = '';
      let moveDown = '';
      const distanceParkingSpaces = newLocation - stairsLocation[stair[0]];
      if (distanceParkingSpaces == 0) { // case stairs on top of another
        let lastDownMove = moveSequence.pop();
        moveDown = lastDownMove.slice(0, -1) + (+lastDownMove.slice(-1) + 1);
      } else { // most frequent case
        distanceParkingSpaces > 0 ? move = 'L' + distanceParkingSpaces : move = 'R' + -distanceParkingSpaces;
        moveSequence.push(move);
        moveDown = 'D1';
      }
      moveSequence.push(moveDown);
      newLocation = stairsLocation[stair[0]];
    } else { // case exit level
      const distanceParkingSpaces = newLocation - widthParkingLot;
      if (!distanceParkingSpaces == 0) {
        distanceParkingSpaces > 0 ? move = 'L' + distanceParkingSpaces : move = 'R' + -distanceParkingSpaces;
        moveSequence.push(move);
      }
    }
  })
  return moveSequence;
}

carpark = [
           [2, 0, 0, 0, 0],
          ];


console.log(escape(carpark));

function escape(carpark){
  var path = [];
  var down = 0;
  var i = -1;
  var position = -1
  
  while(position==-1){
    i++;
    position = carpark[i].indexOf(2);
  }
  while(i < carpark.length){
    var steps = carpark[i].indexOf(1);
    if(steps != position){
      if(down > 0){
        path.push('D'+down)
        down = 0;
      }
      if(i == carpark.length-1){
        var groundFloorDistance = carpark[i].length-1 - position
        if(groundFloorDistance > 0){
          path.push('R'+groundFloorDistance)
        }
      } else {
        path.push((position < steps ? 'R':'L')+Math.abs(position-steps))
        position = steps;
      }
    }
    down++;
    position = steps;
    i++;
  }
  
  return path;
}

function escape(carpark){
  var seq = [], i=carpark.findIndex(r=>r.includes(2)), x=carpark[i].indexOf(2);
  while(i<carpark.length-1) {
    let idx = carpark[i].indexOf(1), down = 0,
        dist = idx-x;
    seq.push(dist<0?`L${-dist}`:`R${dist}`);
    for(;carpark[i][idx]===1; down++,i++);
    seq.push(`D${down}`);
    x = idx;
  }
  return x===carpark[0].length-1?seq:seq.concat(`R${carpark[0].length-1-x}`);
}