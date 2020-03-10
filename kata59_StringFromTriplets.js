// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. 
// "whi" is a triplet for the string "whatisup".
// As a simplification, you may assume that no letter occurs more than once in the secret string.
// The secret string will never contain letters that do not occur in one of the triplets given to you.

secret = "whatisup"
triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

const recoverSecret0 = triplets => {
  let itemsList = new Set(triplets.reduce((a, b) => a.concat(b), []));
  let itemsObj = {};
  let secretString = '';
  for (let item of itemsList) {
    itemsObj[item] = [];
    triplets.forEach(tripl => {
      if (tripl.indexOf(item) === 1) {
        itemsObj[item].push(tripl[tripl.indexOf(item)+1]);
      } else if (tripl.indexOf(item) === 0) {
        itemsObj[item].push(tripl[tripl.indexOf(item)+1]);
        itemsObj[item].push(tripl[tripl.indexOf(item)+2]);
      }
    });
  }

  for (let i = 1; i <= itemsList.size; i++) {
    for (const [key] of Object.entries(itemsObj)) {
      if (itemsObj[key].length === 0) {
        secretString += key;
        let lastChar = key;
        for (const [key] of Object.entries(itemsObj)) {
          while (itemsObj[key].indexOf(lastChar) > -1) {
            itemsObj[key].splice(itemsObj[key].indexOf(lastChar), 1);
          }
        }
        delete itemsObj[key];
      }
    }
  }
    
  return secretString.split("").reverse().join("");

}

// console.log(recoverSecret(triplets));

// ====================================================

var recoverSecret3 = function(triplets) {
  // This extracts the first item from each of the triplets and uses that as the loop variable 'first'. 
  for(var [first] of triplets)
  {
    // Search for the first letter in the secret. It must only appear in the leftmost position of all the triplets that contain it. 
    // If it appeared anywhere else, it couldn't be the first letter because there would be letters bigger than it.
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      // Once the letter with the property identified in the previous step is found, return it and recurse on the remaining characters in the triplets array. 
      // Remove all occurrences of the found letter and remove all the empty items in the triplets array. 
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}


// Algorithm Summary
// Search for the first letter in the secret -- it necessarily has the following property: it must only appear in the leftmost position of all the triplets that contain it. If it appeared anywhere else, it couldn't be the first letter because there would be letters less than it. If there were two letters with this property, there would be no way to determine which came first.
// Once the letter with the property identified in the previous step is found, return it and recurse on the remaining characters in the triplets array until all the letters in the secret are found. The "remaining characters in the triplets array" portion requires some book-keeping but it is essentially this: remove all occurrences of the found letter -and- remove all the empty items in the triplets array. This is what is passed into the recursive call.
// Understanding Implementation
// My implementation makes use of array-destructuring, arrow-functions and recursion. (I'm experimenting with html anchors here -- these link to examples after the approach section in this reply. I'm also spending a fair bit of time to document this because this is one of my favorite kata on codewars. What better way to spend my Saturday morning? Anyway, I hope you enjoy. -Les)

// Approach
// The kata refers to triplets, and I switched to the name 'tuple' part-way through.
// (Line numbers introduced for reference)

//  1: var recoverSecret = function(triplets) {
//  2:   for(var [first] of triplets)
//  3:   {
//  4:     if (triplets.every(tuple => tuple.indexOf(first) <= 0))
//  5:     {
//  6:       triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
//  7:       return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
//  8:     }
//  9:   }
// 10:   return '';
// 11: }
// Line 2: Loop over triplets, using the 'first' item from every item-array in triplets.
// The clever thing with this line is that it uses array-destructuring in the for-loop. This extracts the first item from each of the triplets and uses that as the loop variable 'first'. This for-loop is technically a search loop, so it could have been written using Array's find or findIndex -- passing it an arrow-function predicate from line 4.

// Line 4: Does 'first' occur in the 0 position for in every tuple in which it appears?
// a. triplets.every -- every is a function on Array -- the triplet Array in this cases -- that tests whether every item in the source array satisfies the predicate (function) passed into it. In this case, the function passed is an arrow-function. 'every' will stop processing when it reaches an item that fails the predicate.

// b. The predicate arrow-function: tuple => -- the 'tuple' is the argument the arrow-function defines. It is used to hold the reference each of the items from the 'triplets' array, passed one at a time by the 'every' Array method. The indexOf call -- it returns the position where the item occurs or -1 to indicate that the element isn't present. The <= 0 portion is clever in that it handles both the case of "occurs in the first position" and "doesn't occur at all" in 'tuple'.

// Line 6: the character in 'first' is the character we want to yield from this iteration -- so remove it from all tuples.
// This is where the algorithm modifies its arguments/input -- this is a point in which purists take issue. Their concern is warranted because calling code may not expect our method to modify data it passes to us; if the calling code uses the value it passes for 'triplets' we've destroyed it in our processing. This is duly noted and while we could make a copy and work with the copy rather than change the original (which would be more pure) -- for the interest of brevity and in nabbing a couple points on codewars, I took this shortcut and got away with it.

// a. triplets.filter : this is another array processing function. Like every, filter exists on all arrays. This is part of the functional-programming big-3 that all exist on array: map, filter, reduce. What filter does is return a new array of items that matching the predicate function - in this case it's a collection of items rather than a question we ask about all of the items.

// b. ([item]) => : this is another clever use of arrow functions. With the parentheses we're able to also destructure the tuples in triplets to pull the first item out to test that it is equal to our 'first' loop variable.

// c. .forEach(tuple => tuple.shift()); -- now that the filter has the items that contain 'first', we're ready to remove the 'first' item. That's what this does. In this case, foreach is a method on Array that takes a function (in our case an array-function).

// Line 7: return first and make recursive call on the non-empty items
// If you've followed this far, the details of the triplets.filter are uninteresting, with the exception that in order to properly bottom-out of our recursive case we have to insure that the trivial case will occur. That is where this filter comes in -- it removes all of the tuple items that are now empty, which will eventually cause triplets to empty out.

// Line 10: return empty string -- trivial, nonrecursive case
// It is this last case that bottoms out the recursion. It is this case that 'recoverSecret' was called with either 'no triplets' or it was passed inconsistent input triplets. An inconsistent input example: [['a','b','c'],['b','c','a'],['c','a','b']] In this case, 'a' can't be first because it is to the right of 'b', 'c' in the second element. 'b' can't be first because it is to the right of 'a', 'c' in the 3rd element, and 'c' can't be first because it is to the right of 'a', 'b', in the first element.

// Lines 3 & 5: My opening curly placement
// The opening curly placement for my code blocks reflects my habit from the language I code most in: c#. Thus, my formatting makes this non-idiomatic javascript. Had I observed the formatting, I could have saved a couple of lines.


// Array Destructuring
// The following swaps a & b using array-destructuring:

// [a,b] = [b,a]
// Array destructuring to get the first element into a variable (illustrating that you don't have to map all of the items):

// [first] = [1, 2, 3, 4]
// // first == 1
// Not used in the code but here I show how you can capture the tail of an array using the spread-operator. Experiment with different numbers of elements to see what happens...

// xs = [1,2,3,4]
// [first,second,...tail] = xs
// // first == 1, second == 2, tail == [3,4]

var recoverSecret1 = function(triplets) {
  let secret = '';
  while(!triplets.every(row=>row.length===0)) {
    // create a set (no doubles) of array of first elements of each triplets array, then filter it for a letter that appears only in the first position in every row (indexOf(a) < 1)
    // and add that letter to secret
    secret += [...new Set(triplets.map(row=>row[0]))].filter(a=>triplets.every(row=>row.indexOf(a)<1));
    // filter the tripplets rows for that letter above and leave only rows longer than 0
    triplets = triplets.map(row=>row.filter(a=>a!==secret[secret.length-1])).filter(row=>row.length>0);
    console.log(triplets);
  }
  return secret;
}

function recoverSecret2(triplets) {
  let secret = '';
  while (triplets.some(t => t.length)) {
    for (let i = 0; i < triplets.length; i++) {
      let l = triplets[i][0];
      if (!triplets.map(t=>t[1]).includes(l) && !triplets.map(t=>t[2]).includes(l)) {
        secret += l;
        console.log(secret);
        triplets.forEach(t => { if(t[0] === l) t.shift(); });
      }
    }
  }
  return secret;
}


console.log(recoverSecret1(triplets));