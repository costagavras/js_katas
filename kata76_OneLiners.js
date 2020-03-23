// They calculated that in one loop the squirrel climbes h meters (vertical height), 
// the height of the tree is equal to H (v in Ruby), 
// and the length of its circumference equals S.

// const squirrel = (h, H, S) => +(Math.sqrt((h*h) + (S*S)) * H/h).toFixed(4);
console.log('squirrel=(h,H,S)=>+((h*h+S*S)**0.5*H/h).toFixed(4)'.length);

// squirrel=(h,H,S)=>+((h*h+S*S)**.5*H/h).toFixed(4)
// squirrel=(h,H,c)=>+((h**2+c**2)**.5*H/h).toFixed(4)
// squirrel=(h,H,S)=>+Math.hypot(H,H*S/h).toFixed(4)
// squirrel=(h,H,S)=>~~((h*h+S*S)**.5*H/h*1e4+.5)/1e4
// squirrel=(h,H,S)=>(H/h*(S*S+h*h)**.5*1e4+.5|0)/1e4

console.log(squirrel(247,857,669));