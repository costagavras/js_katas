// 1. The Mastermind (computer) will select 4 colours. The colours are randomly selected from ["Red", "Blue", "Green", "Orange", "Purple", "Yellow"]. 
// Colours can be duplicated but there will always be exactly 4. The Mastermind will return an array back to you. 
// For every correctly positioned colour in the array an element of “Black” is returned. 
// For every correct colour but in the wrong position an element of “White” will be returned.
// Passing the correct array will pass the Kata test and return "WON!".
// Passing an invalid colour will fail the test with the error "Error: you have given an invalid colour!"
// Passing an invalid array length will fail the test with the error "Error: you must pass 4 colours!"
// Guessing more than 60 times will fail the test with the error "Error: you have had more than 60 tries!"
// All colours are capitalised. The return array will be shuffled!

function mastermind(game){
  answer = game.check(["Red", "Orange", "Yellow", "Orange"]);
  console.log(answer);
  game.check();
}

const colors = ["Red", "Blue", "Green", "Orange", "Purple", "Yellow"]

function mastermind(game){
  const usedColors = [];
  colors.forEach(color => {
    if (game.check(Array(4).fill(color)).includes('Black')) {
      usedColors.push(color)
    }
  })
  if (usedColors.length === 1) {
    console.log(Array(4).fill(usedColors[0]))
  }
  
  console.log(usedColors)
}

function mastermind(game){
  //game.check(game.varresintval);
  let array = ["Red", "Blue", "Green", "Orange", "Purple", "Yellow"];
  let count = array.map((a)=>game.check([a,a,a,a]).length);
  let colors = array.reduce((a,b,i)=>a.concat(Array(count[i]).fill(b)),[]), dummy = array[count.findIndex(a=>a===0)];
  let base = [dummy, dummy, dummy, dummy];
  
  colors.forEach(function(color,i) {
    for(let j=0; j<4; j++) { 
      if(base[j]!==dummy)continue;
      let guess = base.slice(0); guess[j] = color;
      let result = game.check(guess);
      if(result==='WON!' || result.filter(a=>a==='Black').length>i) {base=guess; break;}
    }
  });
}