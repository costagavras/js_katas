// ==================== The Vowel Code ===========

const dictionaryEn = { a: 1, e: 2, i: 3, o: 4, u: 5 }

const dictionaryDe = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }

function encode(string) {
  return [...string].map(lt => dictionaryEn[lt] ? dictionaryEn[lt] : lt).join('');
}

function decode(string) {
  return [...string].map(lt => dictionaryDe[lt] ? dictionaryDe[lt] : lt).join('');
}

// // turn vowels into numbers
// function encode(string){
//   return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }

// //turn numbers back into vowels
// function decode(string){
//   return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }

// const encode = s => s.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));
// const decode = s => s.replace(/\d/g, v => ' aeiou'[v]);

// console.log(encode('hello'));
// console.log(decode('h2ll4'));

// =================== Breaking search bad ======

// const TITLES = [ 'The Big Bang Theory', 'How I Met Your Mother', 'Dexter', 'Breaking Bad', 'Doctor Who', 'The Hobbit', 'Pacific Rim', 'Pulp Fiction', 'The Avengers', 'Shining' ]

// function search(searchTerm) {
//   var search = new RegExp(searchTerm, 'i');
  
//   return TITLES.filter(function(title) {
//     return search.test(title);
//   });
// }

// const search = searchTerm => TITLES.filter(title => new RegExp(searchTerm, 'gi').test(title));

// console.log(search('ho'));

// =========================

// ============= Find within array ===========

// var findInArray = function(array, iterator) {
//   // return array.lastIndexOf(array.filter(iterator)[0]);
//   return array.lastIndexOf(array.filter(iterator)[0]);
// }

// const findInArray = (array, iterator) => array.findIndex(iterator)

var findInArray = function(array, iterator) {
  return array.map(iterator).indexOf(true);
};

// const findInArray = (array, iterator) => array.map((v, i) => iterator(v, i)).indexOf(true)

var trueIfEven = function(v, i) { return v % 2 === 0; }
var trueIfValueEqualsIndex = function(v, i) { return v === i; }

// console.log(findInArray([1,3,5,6,7], trueIfEven));
// console.log(findInArray([-3, -9, 8, 7, -9, 7, 4, 7, 1], trueIfValueEqualsIndex));

// ================= I need more speed! ====

// function reverse(arr) {
//   const arrLength = arr.length;
//   for (let k = arr.length-2; k >= 0; k--) {
//     arr = arr.concat(arr[k]);
//     // arr = [...arr, ...[arr[k]]];
//   }
//   return arr.slice(arrLength-1);
//   // return arr.filter((val, idx) => idx > arrLength-2);
// }

function reverse(arr) {
  for (let i = 0; i < arr.length/2; i++){
    let temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
}

// console.log(reverse([1,2,3,4,5]));

// =========== regex pattern ==========

function regexContainsAll(str) {
  return [...str].map(it => `(?=.*${it})`).join('');
}

// console.log(regexContainsAll('teqE'));

// ============= Validate my password ======
// more than 3 chars, less than 20, only alphanums, must cont. lett + nums;

const validPass = password => {
  if (password.length < 4 || password.length > 19) return 'INVALID';
  // if (!/?:\w+\d+/.test(password)) return 'INVALID';
  // console.log(password.match(/[a-zA-Z]/))
  if (!password.match(/\d/) || (!password.match(/[a-z]/i) || (password.match(/[^0-9a-z]/i)))) return 'INVALID';
  return 'VALID'
}

// function validPass(password){
//   return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
// }
// const validPass = password => (/^(?=.*[a-z])(?=.*[0-9])\w{3,20}$/i.test(password) ? '' : 'IN') + 'VALID';

// function validPass(password) {
//   const t1 = /^\w{3,20}$/.test(password),
//         t2 = /\d/.test(password),
//         t3 = /[a-zA-Z]/.test(password);
//   return t1 && t2 && t3 ? "VALID" : "INVALID";
// }

// console.log(validPass('Username123!'));

// =================== Separate the wheat from the chaff ==========

function wheatFromChaff(v) {
  let negIndices = [];
  // let negIndices = v.map((v,i) => v < 0 ? i : 'x').filter(Number.isFinite);
  v.forEach((v,i) => { // was faster than the line above;
    if (v < 0) negIndices.push(i);
  });

  let j = 1, i = 0;
    while (i < negIndices[negIndices.length-j]) { // if index of positive less than last neg index
      if (v[i] < 0) {
        i++;
        continue; // if negative in front continue;
      }
      let temp = v[negIndices[negIndices.length-j]];
      v[negIndices[negIndices.length-j]] = v[i];
      v[i] = temp;
      i++;
      j++;
    }
  return v;
}

// function wheatFromChaff(values) {
//   const o = [...values];
//   for (let head = 0, tail = values.length - 1; head < tail; head++, tail--) {
//     while (values[head] < 0) head++;
//     while (values[tail] > 0) tail--;
//     if (head < tail) [o[head], o[tail]] = [o[tail], o[head]];
//   }
//   return o;
// }

// function wheatFromChaff(values) {
//   let [i, j] = [0, values.length - 1];
//   let vals = values.slice();
  
//   while (i < j) {
//     if (vals[i] < 0) {
//       i += 1;
//     } else if (vals[j] > 0) {
//       j -= 1;
//     } else {
//       [vals[i], vals[j]] = [vals[j], vals[i]];
//       [i, j] = [i + 1, j - 1];
//     }
//   }
  
//   return vals;
// }

// console.log(wheatFromChaff([-16,44,-7,-31,9,-43,-44,-18,50,39,-46,-24,3,-34,-27]));

// ============ Seven ate nine! =====

const hungrySeven = arr => {
  let str = arr.join(',');
  // if (!/(7,8,9)/.test(str)) return arr;
  while (/(7,8,9)/.test(str)) str = str.replace(/(7,8,9)/, '8,9,7');
  return str.split(',').map(n => +n);
}

// function hungrySeven(arr){
//   var tmp = typeof arr != 'string' ? arr.join('') : arr;
//   return /789/.test(tmp) ? hungrySeven(tmp.replace(/(7)(89)/, '$2$1')) : tmp.split('').map(x => +x) 
// }

// const hungrySeven = arr => {
//   let str = arr.join(``);
//   while (/789/.test(str)) {
//     str = str.replace(/789/g, `897`);
//   }
//   return [...str].map(Number)
// };

// console.log(hungrySeven([8,7,8,9,8,9,7,8]));

// ============== Create Phone Number =====
// make format "(123) 456-7890"

const createPhoneNumber = numbers => numbers.join(``).replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// createPhoneNumber=n=>'(###) ###-####'.replace(/#/g,()=>n.shift())
// function createPhoneNumber(n) {
//   return "(012) 345-6789".replace(/\d/g, d => n[d])
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// ======== Who has the most money? =========

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
  if (students.length === 1) return students[0].name;
  const stash = students.map(st => st.fives * 5 + st.tens * 10 + st.twenties * 20);
  return stash.every((val,_,arr) => val === arr[0]) ? 'all' : students[stash.indexOf(Math.max(...stash))].name;
}

// finds the max index in array
// var a = [0, 21, 22, 7];
// var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

// const mostMoney = a => (a=>a.length>1&&a.every(b=>b[1]==a[0][1])?'all':a.reduce(([a,b],[c,d])=>d>b?[c,d]:[a,b])[0])(a.map(({name:n,fives:f,tens:t,twenties:w})=>[n,f*5+t*10+w*20]))
// mostMoney=s=>s.map(p=>[p.name,p.fives*5+p.tens*10+p.twenties*20]).reduce(([n,a],[m,v])=>a===v?["all",a]:a>v?[n,a]:[m,v])[0]

// console.log(mostMoney([andy, stephen, eric, david, phil]));

// ========== Stringing me along =====

function createMessage(str) {
  return function(str2) {
    return !str2 ? str : createMessage(str + ' ' + str2);
  }
}
// let createMessage = (msg) => m => m? createMessage(msg+' '+m) : msg ;

// console.log(createMessage("Hello")("World!")("how")("are")("you?")());

// ============ Look and say sequence generator ======

function lookAndSaySequence(firstElement, n){
  return n === 1 ? firstElement : Array.from(Array(n-1), () => firstElement = firstElement.replace(/(.)\1*/g, v => v.length + v[0])).reverse()[0];
}

// function lookAndSaySequence(s, n) {
//   return n === 1 ? s : lookAndSaySequence(s.replace(/(\d)\1*/g, (m, n) => m.length + n), n - 1);
// }

// function lookAndSaySequence(firstElement, n) {
//   return n > 1 ? lookAndSaySequence(firstElement.replace(/((\d)(\2)*)/g, x => x.length + x[0]), n - 1) : firstElement;
// }

// function lookAndSaySequence(f, n){
//   var str = f;
//   for(let i=1; i<n; i++) str = str.replace(/(\d)\1*/g, m=>m.length+m[0]);
//   return str;
// }

// console.log(lookAndSaySequence('1', 3));

// ============ Generic numeric template formatter ========

const numericFormatter = (template, input) => {
  input ? i = [...input.repeat(2)] : i = '12345678901234567890'.split(``);
  return template.replace(/[a-z]/gi, () => i.shift());
}

// const numericFormatter = (template, str = '1234567890', i = 0) =>
//   template.replace(/[a-z]/gi, () => str[i++ % str.length]);

// function numericFormatter(template, nums = '1234567890', pos = 0) {
//   return template.replace(/[a-z]/gi, function(match, i) {
//     return nums[pos++ % nums.length];
//   });
// }

// console.log(numericFormatter("*AsRCUl6","30494"));

// =============== A chain adding function ====

// const add = arg => i => i ? add(arg+i) : arg;

// function add(arg) {
//   return function(a) {
//     return !a ? arg : add(arg + a);
//   }
// }
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}
const sum = (...arg) => arg.reduce((previous, current) => previous + current);
let add = curry(sum);

// console.log(add(1)(2)(3));

// ========== String subpattern recognition I =====

// const hasSubpattern = string => {
//   // if ([...string].every((lt,_,arr) => lt === arr[0])) return true;
//   // if (string.length % 2) return false; // uneven numbers
//   if (string.length === 1) return false;
//   for (let i = 1; i <= string.length / 2; i++) {
//     // let match = string.match(new RegExp('.{' + i + '}','g'));
//     let match = string.slice(0, i);
//     if (string === match.repeat(string.length / i)) return true;
//     // console.log(match);
//     // if (match.every((lt,_,arr) => lt === arr[0]) && match.length * i === string.length) return true;
//     // if (match[0] === match[match.length-1] && match.length * i === string.length) return true;
//   }
//   return false;
// }

// const hasSubpattern = string => /^(.*)\1+$/.test(string);

// function hasSubpattern(string) {
//   // console.log((string + string).indexOf(string, 1) );
//   return (string + string).indexOf(string, 1) != string.length; // if == to string.length means the string has unique chars inside;
// }

// function hasSubpattern(str){
//   let check = str.match(/(.+?)(?=\1)/)    
//   if (!check) return false;
//   console.log(check);
//   const arr = str.split(check[0]).join(''); // splits array with check[0] (= eliminates them in the process);
//   console.log(arr); 
//   return arr ? false : true
// }

// const hasSubpattern = string => string.match(/^(\w+)\1+$/) ? true : false

// console.log(hasSubpattern("ababc"));

// =========== String subpattern recognition II ====

const hasSubpattern = (string) => {
  if (string.length === 1) return false;
  let oFreq = {};
  [...string].reduce((prev,char) => oFreq[char] ? oFreq[char]++ : oFreq[char] = 1, 0);
  // console.log(oFreq);
  for (let i = 2; i <= string.length; i++) {
    if (Object.keys(oFreq).every(freq => oFreq[freq] % i === 0)) return true;
  }
  return false;
}

// const hasSubpattern = string => {
//   // const hash = [...string].reduce((h, s) => {
//   //   if (!h[s]) h[s] = 0;
//   //   h[s] += 1;
//   //   return h;
//   // }, {});
//   const hash = [...string].reduce((acc, fr) => ({
//     ...acc,
//     [fr]: (acc[fr] || 0) + 1,
//   }), {});
//   console.log(hash);
//   const contents = Object.values(hash);
//   for (let i = 2; i <= string.length; i++) {
//     if (contents.every(v => v % i === 0)) return true;
//   }
//   return false;
// }

// console.log(hasSubpattern('123A123a123a'));