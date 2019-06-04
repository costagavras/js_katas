// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  var yearIncrease = 0;
  percent = percent / 100;
  while (p0 < p) {
    p0 = p0 + p0 * percent + aug;
    yearIncrease++;
  }
  return yearIncrease;
}

console.log(nbYear(1000, 0.1, 10, 1010));
