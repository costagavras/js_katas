// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite 
// but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
 
const dirReduc = arr => {
  const [ns, sn, we, ew] = ['NORTHSOUTH', 'SOUTHNORTH', 'WESTEAST', 'EASTWEST'];
  let str = arr.join('');
  let answer = '';
  while (str.indexOf(ns) > -1 || str.indexOf(sn) > -1 || str.indexOf(we) > -1 || str.indexOf(ew) > - 1) {
      str = str.replace(ns,'').replace(sn,'').replace(we,'').replace(ew,'');
    }
  for (let i = 0; i < str.length; i++) {
    answer.slice(-2) === "TH" || answer.slice(-2) === "ST" ? answer += ' ' + str.charAt(i) : answer += str.charAt(i);
  }
  return answer.length ? answer.split(' ') : [];
}

console.log(dirReduc(["NORTH", "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "SOUTH"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

function dirReduc(arr){
  var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}

function dirReduc(arr){
  return arr.reverse().reduce(function (memo, v) {
    return memo.length && ['NORTHSOUTH', 'SOUTHNORTH', 'EASTWEST', 'WESTEAST'].indexOf(v + memo[0]) >= 0 ? memo.slice(1) : [v].concat(memo)
  }, [])
}