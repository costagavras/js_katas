// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

const balance = (left, right) => {
  const sumLeft = [...left.replace(/\?/g, '3').replace(/\!/g, '2')].reduce((sum, char) => sum + +char, 0);
  const sumRight = [...right.replace(/\?/g, '3').replace(/\!/g, '2')].reduce((sum, char) => sum + +char, 0);
  return sumLeft === sumRight ? "Balance" : sumLeft > sumRight ? "Left" : "Right";  
}

console.log(balance("!!???!????","??!!?!!!!!!!"));

function balance(left,right){
  let [a, b] = [left, right].map(s=>s.split('').reduce((t,c)=> t += c === '!' ? 2 : 3 , 0) );
  return a == b ? 'Balance' : a > b ? 'Left' : 'Right';
}