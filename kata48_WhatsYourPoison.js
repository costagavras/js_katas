// The King of a small country invites 1000 senators to his annual party. Each senator brings the King a bottle of wine. 
// Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. 
// However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. 
// Hence he only has time for one round of testing, he decides that each rat tastes multiple bottles, according to a certain scheme.

// You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. 
// Return the number of the bottle (1..1000) which is poisoned.

// function find(rats) {
//   let bottleNum = 0;
//   for (const item of rats) {
//     bottleNum += Math.pow(2, item);
//   }
//   return bottleNum;
// }



// const find = rats => 
//   rats.reduce((a, b) => a + Math.pow(2, b), 0)

//   function find(rats) {
//     return rats.reduce((a, v) => a+(1<<v), 0);
// }

function find(rats) {
  var bottle = [0,0,0,0,0,0,0,0,0,0];
  rats.forEach(function(rat) {
    bottle[rat] = 1;
  });
  return parseInt(bottle.reverse().join(""), 2);
}

function find(rats) {
  var bin={9:512,8:256,7:128,6:64,5:32,4:16,3:8,2:4,1:2,0:1}
  return rats.reduce((tot,v)=>tot+=bin[v],0)
}

console.log(find([3, 5, 6, 7, 8, 9]));