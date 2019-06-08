// The new "Avengers" movie has just been released! Each of the people in line has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
  var cash = {25:0, 50:0, 100:0};
  var bill, status = "YES";
  for (var i = 0; i < peopleInLine.length; i++) {
    bill = peopleInLine[i];
    if (bill === 50) {cash[bill]++; cash[25]--;}
    if (bill === 100) {cash[bill]++;cash[25]--;cash[50] > 0 ? cash[50]-- : cash[25]-=2;}
    if (bill === 25) {cash[bill]++;}
    if (cash[25] < 0 || cash[50] < 0) {return "NO";}
  }
  return status;
}

// function tickets(peopleInLine){
//   let [c25,c50,c100] = [0,0,0];
//   for(let v of peopleInLine) {
//     if(v===25) c25++;
//     if(v===50) {c50++; c25--;}
//     if(v===100) {c25--; c50>0?c50--:c25-=2;}
//     if(c25<0||c50<0) return 'NO'
//   }
//   return 'YES'
// }
