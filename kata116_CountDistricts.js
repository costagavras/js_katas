// =============Count the connected components ===============
// You are managing an amazing city and indeed its a maze. This city has the particularity to be divided into districts 
// which are unreachable from the other districts. More precisely, a district consists of one or more places connected with roads.
// If there is two places p1 and p2 and there is a path (not necessarily direct) between p1 and p2 then p1 and p2 are in the same district.
// As a manager, your objective is to count the number of district.
// Note that all the streets are bidirectional, if there is a street from p1 to p2 then you can also go from p2 to p1 through this street.
// The city has always at least one place.

// const countDistricts = city => {
//   const aDistGrouped = [];
//   Object.entries(city).forEach(([key, value]) => {
//     const temp = [key].concat(...value);
//     aDistGrouped.push(temp);
//   });
//   // console.log('aDistGrouped: ', aDistGrouped);
//   const mergeDistricts = arrays => {
//     const oDistConnected = {};
//     arrays.map(arr => new Set(arr)).forEach(set => {
//       Array.from(set).forEach(item => {
//         // console.log('item: ', item);
//         // if item is not in oDistConnected, add item -> set, else add mappings item2 -> set
//         (!oDistConnected[item]) ? oDistConnected[item] = set : oDistConnected[item].forEach(item2 => oDistConnected[item2] = set.add(item2));
//         // if (!oDistConnected[item]) {
//         //   oDistConnected[item] = set;
//         // } else {
//         //   oDistConnected[item].forEach(item2 => {
//         //     oDistConnected[item2] = set.add(item2);
//         //   }); 
//         // }
//       });
//     });
//     // console.log('oDistConnected: ', oDistConnected);
//     const aResult = [];
//     const oAuxDist = {};
//     Object.keys(oDistConnected).forEach(item => {
//       if (!oAuxDist[item]) {                              // get unique items from oDistConnected
//         aResult.push(Array.from(oDistConnected[item]));
//         oDistConnected[item].forEach(item2 => oAuxDist[item2] = 1);
//       }
//     });
//     return aResult;
//   }
//   return mergeDistricts(mergeDistricts(aDistGrouped)).length; // run twice to cover all cases;
// }


// function countDistricts(city){
//   var visited = [];
//   var count = 0;
//   Object.keys(city).forEach(v => {
//     if (!visited.includes(v)) { 
//       dfs(v, visited, count, city);
//       count++;
//     }
//   });
  
//   return count;  
// }

// function dfs(v, visited, count, city) {
//   visited.push(v);
//   console.log(visited);
//   city[v].forEach(n => {
//     if (!visited.includes(n)) {
//       console.log('n: ', n);
//       dfs(n, visited, count, city);
//     }
//   });
// }

// const countDistricts = city => {
//   const connect = (d, district) => {
//       return city[d].filter(next => !district.has(next)).reduce((d, next) => connect(next, d.add(next)), district);
//   }
  
//   return Object.keys(city)
//     .reduce(([handled, count], key) => {
//       return handled.has(key) 
//         ? [handled, count] 
//         : [[...connect(key, new Set())].reduce((h, d) => h.add(d), handled), count + 1];
//     }, [new Set(), 0])[1];
// }

// function countDistricts(city){
//   let count = 0, visited = {}
//   function solve(node){
//     console.log('node: ', node);
//     visited[node]=1
//     for (let i of city[node]){
//       if (!visited[i]) solve(i)
//     }
//   }
  
//   for (let i in city){
//     console.log('i: ', i);
//     if (!visited[i]) {count++ ; solve(i)}
//   }
//   return count
// }

function countDistricts(m){
  let r = 0, seen = {}, q, u, v;
  for (u in m) {
    console.log('u: ', u);
    if (u in seen) continue;
    seen[u] = ++r;
    q = [u];
    console.log('seen[u] | q: ', seen[u] + ' | ' + q);
    while (q.length) {
      m[q.shift()].forEach((v) => {
        console.log('m: ', m);
        console.log('v: ', v);
        !seen[v] && (seen[v] = 1) && q.push(v);
        console.log('q: ', q);
        console.log('seen: ', seen);
      });

    } 
    console.log('q: ', q);
  }
  return r;
}











  var city = { 
    n0: [ 'n9' ],
    n1: [ 'n8', 'n4' ],
    n2: [ 'n5' ],
    n3: [ 'n9', 'n7' ],
    n4: [ 'n1' ],
    n5: [ 'n2', 'n6' ],
    n6: [ 'n5', 'n9' ],
    n7: [ 'n3', 'n8' ],
    n8: [ 'n1', 'n7' ],
    n9: [ 'n3', 'n6', 'n0' ]
  };
  console.log(countDistricts(city));

