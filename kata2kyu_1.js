// ====================== Evaluate mathematical expression =============

const calc = expression => {

  let dblSignsPos   = /--|\+\+/;
  let dblSignsNeg   = /\+-|-\+/;
  let dblSignsMD   = /\*-|\\-/;
  
  expression = expression.split(' ').join('');
  while (dblSignsPos.test(expression)) {
    expression = expression.replace(dblSignsPos,'+'); 
  }
  while (dblSignsNeg.test(expression)) {
    expression = expression.replace(dblSignsPos,'-'); 
  }
  while (dblSignsMD.test(expression)) {
    expression = expression.replace(dblSignsMD,'-'); 
  }
  console.log(expression);
return expression.split('+').map(s =>
          s.split('-').map(s =>
              s.split('*').map(s =>
                  s.split('/').map(Number).reduce((a, b) => a / b))
              .reduce((a, b) => a * b))
          .reduce((a, b) => a - b))
      .reduce((a, b) => a + b);
}

// const calc = string => {
//   let multiplicationsDivisions = /(\S+)(\*|\/)(\S+)/
//   let additionsSubtractions   = /(\S+)(\+|-)(\S+)/
//   let dblSignsPos   = /--|\+\+/
//   let dblSignsNeg   = /\+-|-\+/

//   string = string.split(' ').join('');
//   console.log(string);
  
//   while (dblSignsPos.test(string)) {
//     string = string.replace(dblSignsPos,'+'); 
//   }
//   while (dblSignsNeg.test(string)) {
//     string = string.replace(dblSignsPos,'-'); 
//   }
//   console.log(string);
  
//   while (multiplicationsDivisions.test(string)) {
//     string = string.replace(multiplicationsDivisions, (_,num1, operator, num2)=> (operator === "*")? num1 * num2 : num1 / num2 ) 
//   }
  
//   while (additionsSubtractions.test(string)) {
//     console.log('test: ', string);
//     string = string.replace(additionsSubtractions, (_,num1, operator, num2)=> (operator === "+")? +num1 + +num2 : num1 - num2 ) 
//   }
//   console.log(string);

//   return string
// }


// console.log(calc('1+1'));
// console.log(calc('1- -1'));
console.log(calc('12*-1'));
// console.log(calc('1 /1'));
// console.log(calc('-123'));
// console.log(calc('2 /2+3 * 4.75- -6'));
// console.log(calc('2 / (2 + 3) * 4.33 - -6'));