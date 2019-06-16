// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name.
// Last name and first name of a guest come in the result between parentheses separated by a comma.

function meeting(s) {
  var regex1 = /,/gi; regex2 = /:/gi;
  s = s.toUpperCase().split(";");
  s = s.map(function(val){
    return s = "(" + val.substring(val.indexOf(":")+1) +":"+val.substring(0,val.indexOf(":")) + ")";
  });
  return String(s.sort()).replace(regex1,"").replace(regex2,", ");
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

//
function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}
//
// function meeting(s) {
//     return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
// }
