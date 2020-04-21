// They calculated that in one loop the squirrel climbes h meters (vertical height), 
// the height of the tree is equal to H (v in Ruby), 
// and the length of its circumference equals S.

// const squirrel = (h, H, S) => +(Math.sqrt((h*h) + (S*S)) * H/h).toFixed(4);
// console.log('squirrel=(h,H,S)=>+((h*h+S*S)**0.5*H/h).toFixed(4)'.length);

squirrel=(h,H,S)=>+((h*h+S*S)**.5*H/h).toFixed(4)
// squirrel=(h,H,c)=>+((h**2+c**2)**.5*H/h).toFixed(4)
// squirrel=(h,H,S)=>+Math.hypot(H,H*S/h).toFixed(4)
// squirrel=(h,H,S)=>~~((h*h+S*S)**.5*H/h*1e4+.5)/1e4
// squirrel=(h,H,S)=>(H/h*(S*S+h*h)**.5*1e4+.5|0)/1e4

// console.log(squirrel(247,857,669));

// =============================================================================

// We want to make a row of bricks that is exactly n inches long. We have a small bricks (1 inch each) and b big ones (5 inches each).
// Return true if it is possible to build the row by choosing from the given bricks, false otherwise.
// console.log('makeBricks=(a,b,n)=>n-5*b<=a&&n%5<=a'.length);


// makeBricks=(a,b,n)=>n/5>>0<=b&&n-5*(n/5>>0)<=a?!!1:!!0; works but 52
// makeBricks=(a,b,n)=>n/5>b?n-(5*b)<=a:n%5<=a works but 43
makeBricks=(a,b,n)=>n-5*b<=a&&n%5<=a // WINNER
// makeBricks=(a,b,n)=>!(a+5*b<n|a<n%5)
// makeBricks=(a,b,n)=>!(n>b*5+a||n%5>a)



// makeBricks=(a,b,n)=>n/5>>0<=b&&n-5*(n/5>>0)<=a
// makeBricks=(a,b,n)=>(n-5*b)-a==0;
// makeBricks=(a,b,n)=>n/5<=b+1&&n%5<=a

// console.log(makeBricks(12,4,32));

// ================================================================== 

// Given two words and a letter, return a single word that's a combination of both words, 
// merged at the point where the given letter first appears in each word. 
// The returned word should have the beginning of the first word and the ending of the second, 
// with the dividing letter in the middle. You can assume both words will contain the dividing letter.
// StringMerge("coding", "anywhere", "n")   ==>  "codinywhere"

// const stringMerge = (str1, str2, letter) => str1.slice(0, str1.indexOf(letter)) + str2.slice(str2.indexOf(letter));
// stringMerge=(s,t,l)=>s.slice(0,s.search(l))+t.slice(t.search(l))
// const stringMerge = (str1, str2, l) => str1.split(l, 1) + str2.substr(str2.indexOf(l));
// stringMerge=(a,b,l)=>[a.split(l)[0]].concat(b.split(l).slice(1)).join(l);

// console.log(stringMerge('coding', 'anywhere', 'n'));
// console.log('stringMerge=(a,b,l)=>a.split(l,1)+b.slice(b.search(l))'.length);

stringMerge=(a,b,l)=>a.split(l,1)+b.slice(b.search(l))
stringMerge=(a,b,l)=>a.split(l,1)+b.match(l+'.*')

// console.log(stringMerge('coding','anywhere','n'));

// =========================================================================
// You are given an integer array a that contains only digits 0-9. Remove all zeros from the start and end of a.
// It is guaranteed that array a has at least two non-zero elements. 53 chars.
// For a = [0, 9, 5, 0, 0, 0, 0, 2, 0, 0], the output should be [9, 5, 0, 0, 0, 0, 2].


// removeZeros=a=>a.slice(a.findIndex(x=>x>0),a.lastIndexOf(0)-1);
// operator | cast operands to intger an array casted to integer is 0 unless the array is made of a single integer value (that is ok for me in this case)
// removeZeros=a=>(f=a=>a.reverse().filter(x=>a|=x))(f(a)) //55 symbols
// removeZeros=a=>a.map(x=>x?t=++i:f<i++||++f,f=i=0)&&a.slice(f,t)
// console.log("removeZeros=a=>a.join(a='').replace(/(^0+|0+$)/g,a).split(a)".length);
// removeZeros=a=>a.join(a='').replace(/(^0+|0+$)/g,a).split(a)
// removeZeros=a=>a.join` `.replace(/^(0 ?)*|( 0)*$/g,'').split` `
  // console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));


// console.log("removeZeros=a=>[...a.join``.replace(/^0+|0+$/g,'')]".length); // string 9500002 51
// console.log("removeZeros=a=>a.join``.replace(/(^0+)(.*?)(0+$)/,'$2')".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 61
// removeZeros=a=>[...a.join``.replace(/(^0+)(.*?)(0+$)/g,'$2')]
// removeZeros=a=>a.join``.replace(/\d)*/,a.join``.match(/[1-9]\d*[1-9]/g))
// removeZeros=a=>a+''.replace(/^(0,)*(.*?)(,0)*$/g,'$2')
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));


// console.log("removeZeros=a=>/^(0,)*(.*?)(,0)*$/.exec(a)[2].split`,`".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 54
// console.log("removeZeros=a=>[.../^(0,)*(.*?)(,0)*$/.exec(a)[2]]".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 54
// removeZeros=a=>[.../^(0,)*(.*?)(,0)*$/.exec(a)[2]]
// removeZeros=a=>a+''.replace(/^(0,)*(.*?)(,0)*$/g,[].push('$1'))
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));

// console.log("removeZeros=a=>a.join(a='').replace(/^0+|0+$/g,a).split(a)".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 58
// removeZeros=a=>a.join(a='').replace(/(^0+|0+$)/g,a).split(a)
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));

// console.log("removeZeros=a=>a.join``.match(/((?!(^0+|0+$)).)/g)".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 50
// console.log("removeZeros=a=>[...a.join``.replace(/^0+|0+$/g,'')]".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 51
// removeZeros=a=>a.join``.match(/((?!(^0+|0+$)).)/g)
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));
// removeZeros=a=>[...a.join``.replace(/^0+|0+$/g,'')]
// removeZeros=a=>a.join``.replace(/(^0+)(.*?)(0+$)/,'$2')
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));

// console.log("removeZeros=a=>[...a.join``.match(/[1-9]\d*[1-9]/g)[0]]".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 54
// removeZeros=a=>[...a.join``.match(/[1-9]\d*[1-9]/g)[0]]
// removeZeros=a=>a.join``.replace(/[1-9]\d*[1-9]/g,['$&'])
// removeZeros=a=>a.join``.replace(/\d*/g,`$&.split```)
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));

// console.log("removeZeros=a=>[.../[1-9]\d*[1-9]/.exec(a.join``)[0]]".length); // [ '9', '5', '0', '0', '0', '0', '2' ] 52
// removeZeros=a=>[.../[1-9]\d*[1-9]/.exec(a.join``)[0]] 
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));

// console.log("removeZeros=a=>/^(0+)(.*?)(0+$)/.exec(a.join``)[2]".length); // string 9500002 50
// removeZeros=a=>/^(0+)(.*?)(0+$)/.exec(a.join``)[2]
// console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0]));

// ============================================================================ 

// You are given an integer array a, your task is to determine whether the array is consistent 
// with the arrangement:[x,xx,y,yy,z,zz...] and your code should be less than 38 characters.

// console.log("nNN=a=>(a+'').match(/(\d),\1{2}\b/g)+''==a".length); // 43
// nNN=a=>(a+'').match(/(\d),\1{2}\b/g)+''==a //(\d) first group of one digit, (\,\1{2} matches literal , then same digit as 1st group exactly 2 times, \b assert position at a word boundary
// nNN=a=>(a+'').replace(/(\d),\1{2}\b/g,'$&')==a
// nNN=a=>(a+',').replace(/(\d),\1{2},/g,'')==''
// nNN=a=>/(\d),\1{2},/g.exec(a+',')

// nNN=a=>a.join``.replace(/(\d)\1{2}/g,'')==''
// nNN=a=>/^((\d),\2{2},)*$/.test(a+',')
// console.log(nNN([2,22,2,22,3,33]))

// nNN=a=>/^((.),\2\2,?)+$/.test(a)
// nNN=a=>/^((.*),\2\2)+$/.test(a)
// nNN=a=>/^((.),\2\2,?)+$/.test(a+'')

// nNN=a=>!a.reduce((a,b)=>a*11^b)
// nNN=([b,c,...d]=a)=>c/b==11?nNN(d):!b
// nNN=([a,b,...c])=>!a||b/a==11&&nNN(c)
// nNN=([a,b,...c])=>a?a*11==b*nNN(c):!b

// nNN=a=>!!/^(?:(.),\1\1,?)+$/.exec(a)
nNN=n=>(n+='').match(/(.),\1{2}/g)==n

// console.log(nNN([2,22,2,22,3,33]))

// ========================= palindrome ====================

// Your task is to generate a palindrome string, using the specified length n, 
// the specified characters c (all characters in c must be used at least once), 
// and the code length should less than: 62 characters

// console.log('palindrome=(n,c)=>(c+c.slice(-1).repeat(n-c.length-1)+c[0])'.length);
console.log('palindrome=(n,c)=>[...c].reverse().join``'.length);

// palindrome=(n,c)=>(c+c.slice(-1).repeat(n-c.length-1)+c[0])
// palindrome=(n,c)=>c+'z'.repeat(n-2*c.length)+[...c].reverse().join``;
// palindrome=(n,c)=>c+[...c].reduceRight((a,c,i)=>a+c);
palindrome=(n,c)=>Array(n).fill('x');

// console.log(palindrome(1,'a'));
// console.log(palindrome(3,'ab'));
// console.log(palindrome(10,'ab'));
console.log(palindrome(20,'abcd'));
// console.log(palindrome(51,'abcdefghijklmnopqrstuvwxyz'));
// let board = Array(8).fill().map(() => Array(9).fill('*'));