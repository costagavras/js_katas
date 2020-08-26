// ============================== Calculator ==================

const Calculator = function() {
  this.evaluate = string => {
    return string.split('+').map(s =>
              s.split('-').map(s =>
                  s.split('*').map(s =>
                      s.split('/').map(Number).reduce((a, b) => a / b))
                  .reduce((a, b) => a * b))
              .reduce((a, b) => a - b))
          .reduce((a, b) => a + b);
  }
}

// const Calculator = function() {
//   this.evaluate = string => {
//     var ops = [
//       ['+', (a, b) => a + b],
//       ['-', (a, b) => a - b],
//       ['*', (a, b) => a * b],
//       ['/', (a, b) => a / b]
//     ]
//     for (let i = 0; i < ops.length; i++) {
//       if (string.indexOf(ops[i][0]) !== -1) {
//         return string.trim().split(ops[i][0]).map(this.evaluate).reduce(ops[i][1]);
//       }
//     }
//     return Number(string);
//   }
// };


// const calculate = new Calculator();

// const Calculator = function() {
//   this.evaluate = string => {
//     let multiplicationsDivisions = /(\S+) (\*|\/) (\S+)/
//     let AdditionsSubtractions   = /(\S+) (\+|-) (\S+)/
  
//     while (multiplicationsDivisions.test(string)) {
//       string = string.replace(multiplicationsDivisions, (_,num1, operator, num2)=> (operator === "*")? num1 * num2 : num1 / num2 ) 
//     }
    
//     while (AdditionsSubtractions.test(string)) {
//       string = string.replace(AdditionsSubtractions  , (_,num1, operator, num2)=> (operator === "+")? +num1 + +num2 : num1 - num2 ) 
//     }
    
//     return string
//   }
// };

// const Calculator = function() {
//   this.evaluate = string => {
//     const sum = string.split("+");
//     if (sum.length > 1) {
//       return sum.reduce((r, n) => r + this.evaluate(n), 0);
//     }
//     const sub = string.split("-");
//     if (sub.length > 1) {
//       return sub.reduce((r, n, i) => (i === 0 ? this.evaluate(n) : r - this.evaluate(n)), 0);
//     }
//     const mul = string.split("*");
//     if (mul.length > 1) {
//       return mul.reduce((r, n) => r * this.evaluate(n), 1);
//     }
//     const div = string.split("/");
//     if (div.length > 1) {
//       return div.reduce((r, n, i) => (i === 0 ? this.evaluate(n) : r / this.evaluate(n)), 0);
//     }
//     return +string;
//   }
// };

// const Calculator = function() {
//   this.evaluate = str => {
//     str = str.replace(/\s+/g, "")
//     let a = str.split(/[\+\-]/).map(item => this.calculateLinear(item.split(/[\*\/]/).map(item => Number(item)), item.split(/[0-9]+/).filter(item => item)))
//     return this.calculateLinear(a, str.split(/[0-9\*\/]+/).filter(item => item))
//   }
  
//   this.calculateLinear = (a, b) => a.reduce((res, item, index) => {
//     if (b[index - 1] == "/") return res / item
//     if (b[index - 1] == "*") return res * item
//     if (b[index - 1] == "+") return res + item
//     if (b[index - 1] == "-") return res - item
//   })
// };

// function Function(){}
// const Calculator = function() {
//   this.evaluate = string => (()=>{}).constructor('return '+string)()
// };

// function Calculator() {
//   return {evaluate: s => child_process.execSync(`node -e 'console.log(${s})'`).toString()};
// }


// console.log(calculate.evaluate('2 + 3'));