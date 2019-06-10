// Given two numbers and an arithmetic operator (the name of it, as a string),
// return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be
// the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
  var objActions = {add: a + b,subtract: a - b,multiply: a * b,divide: a / b};
  return objActions[operator];
}

console.log(arithmetic(5,2,"multiply"));

function arithmetic(a, b, operator){
  return [a+b, a-b, a*b, a/b][['add', 'subtract', 'multiply', 'divide'].indexOf(operator)]
}

arithmetic=(a,b,o)=>{return{a:a+b,s:a-b,m:a*b,d:a/b}[o[0]]}

function arithmetic(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b);
}
