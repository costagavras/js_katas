// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters 
// then it should replace the missing second character of the final pair with an underscore ('_').

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const solution = str => {
  let answer = [], iterMax = 0;
  str.length % 2 ? iterMax = str.length / 2 + 0.5 : iterMax = str.length / 2;
  for (let iter = 1; iter <= iterMax; iter ++) {
    answer.push(str[0] + (str[1] || '_'))
    str = str.slice(2);
  } 
  return answer;
}


// function solution(str) {
//   return (str.length % 2 ? str + '_' : str).match(/../g) || [];
// }
  
// function solution(str){
//   return (str + "_").match(/../g) || [];
// }


console.log(solution('abcdefg'));