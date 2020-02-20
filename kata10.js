// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// function nbYear(p0, percent, aug, p) {
//   var yearIncrease = 0;
//   while (p0 < p) {
//     p0 = p0 * (1 + percent / 100) + aug;
//     yearIncrease++;
//   }
//   return yearIncrease;
// }

// function nbYear(p0, percent, aug, p) {
//   for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
//   return y;
// }

function nbYear(p0, percent, aug, p, years = 0) {
  return p0 < p ? nbYear(p0 + p0 * percent / 100 + aug, percent, aug, p, years + 1) : years;
}

console.log(nbYear(1, 13.5, 0, 12));

// Write a function called which verifies that a coupon code is valid, the coupon is not expired.
//
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
