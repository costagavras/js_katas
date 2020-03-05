// unlock(combination) returns string ('click')
// click	The first part of the combination is correct
// click-click	The first two parts of the combination are correct
// click-click-click	The combination is correct.
// Now you can turn the handle to open the safe.
// open() returns int, value of the safe

// Spin the dial left L or right R
// Numbers on the dial 00 - 99
// Each part of the combination is separated by -
// e.g. L23-R67-R09

var crack = function(safe) {
  
  const rightCombinations = ['R00'].concat([ ...Array(9).keys()].map(i => 'R0' + (i + 1)).concat([ ...Array(90).keys()].map(i => 'R' + (i + 10))));
  const leftCombinations = ['L00'].concat([ ...Array(9).keys()].map(i => 'L0' + (i + 1)).concat([ ...Array(90).keys()].map(i => 'L' + (i + 10))));
  const totalCombinations = rightCombinations.concat(leftCombinations);

  for (const comby1 of totalCombinations) {
    if (safe.unlock(comby1) === 'click') {
      for (const comby2 of totalCombinations) {
        if (safe.unlock(comby1 + '-' + comby2) === 'click-click') {
          for (const comby3 of totalCombinations) {
            if (safe.unlock(comby1 + '-' + comby2 + '-' + comby3) === 'click-click-click') { break }
          };
          break;
        };
      }   
      break;
    };
  };
  
  return safe.open();
}

var ALL_COMBINATIONS = [
  ...Array(100).fill(0).map((_, index) => 'L' + decimal2(index)),
  ...Array(100).fill(0).map((_, index) => 'R' + decimal2(index)),
];

var crack = function(safe) {
  let res = '', sound = {1: 'click', 2: 'click-click', 3: 'click-click-click'};
  d: for (let dial = 1; dial < 4; dial++) {
    for (let r = 0; r < 100; r++) {
      let s = `R${r < 10 ? '0' + r : r}`
      if (safe.unlock(res + s) === sound[dial]) {
        res = dial === 3 ? safe.open() : res + s + '-'
        continue d;
      }
    }
    for (let l = 0; l > -100; l--) {
      let s = `L${l > -10 ? '0' + -l : -l}`
      if (safe.unlock(res + s) === sound[dial]) {
        res = dial === 3 ? safe.open() : res + s + '-'
        continue d;
      }
    }
  }
  return res
}
// ---------------------------------
SafeFactory = { 
  getSafe: () => {
    return { checkContents: (c) => c === 'empty' };
  }
};

const crack = (safe) => 'empty';

// ----------------------------------
const nums = [...new Array(100)].map((_, i) => `${i}`.padStart(2, '0'))
  .reduce((l, n) => [...l, 'L' + n, 'R' + n], []);
  
const crack = safe => {

  const next = (prev, clicks) => {
    const prefix = prev ? `${prev}-` : '';
    return prefix + nums.find(n => safe.unlock(prefix + n) === clicks);
  };
  
  next(next(next('', 'click'), 'click-click'), 'click-click-click');
  
  return safe.open();
}

const crack = function(safe){  
  let combotry = "", s;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 200; j++){
      s = j % 100 < 10 ? "0" : "";
      s = combotry + (j > 99 ? "L" : "R") + s + j % 100;
      if(i == 0 && safe.unlock(s) == "click") break;
      if(i == 1 && safe.unlock(s) == "click-click") break;
      if(i == 2 && safe.unlock(s) == "click-click-click") break;
    }
    combotry = s + "-";
  }
  return safe.open();
}

function crack(safe) {
  var l=-100, m=-100, r=-100, f=n=>`${n<0?'L':'R'}${(Math.abs(n+(n<0))+'').padStart(2,'0')}`, fmt=_=>`${f(l)}-${f(m)}-${f(r)}`;
  while(!safe.unlock(fmt()).startsWith('click')) l++;
  while(!safe.unlock(fmt()).startsWith('click-click')) m++;
  while(!safe.unlock(fmt()).startsWith('click-click-click')) r++;
  return safe.open();
}