// The function must accept a non-negative integer. If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ".
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
 
const formatDuration = seconds => {
  const [secMin, secHour, secDay, secYear] = [60, 60 * 60, 60 * 60 * 24, 60 * 60 * 24 * 365];
  const timeArray = [];
  if (!seconds) { return 'now'}
  const numSec = seconds % secMin; // #sec
  if (numSec > 0) { numSec === 1 ? timeArray.push(numSec + ' second') : timeArray.push(numSec + ' seconds') } 

  const numMin = Math.floor((seconds % secHour) / secMin); // #min
  if (numMin > 0) { numMin === 1 ? timeArray.push(numMin + ' minute') : timeArray.push(numMin + ' minutes') } 

  const numHours = Math.floor((seconds % secDay) / secHour); // #hours
  if (numHours > 0) { numHours === 1 ? timeArray.push(numHours + ' hour') : timeArray.push(numHours + ' hours') } 

  const numDays = Math.floor((seconds % secYear) / secDay); // #days
  if (numDays > 0) { numDays === 1 ? timeArray.push(numDays + ' day') : timeArray.push(numDays + ' days') } 

  const numYears = Math.floor(seconds / secYear); // #years
  if (numYears > 0) { numYears === 1 ? timeArray.push(numYears + ' year') : timeArray.push(numYears + ' years') } 
  
  if (timeArray.length > 1) { 
    timeArray.reverse()[timeArray.length-2] += ' and ' + timeArray[timeArray.length-1]
    timeArray.pop();
  }

  return timeArray.join(', ');
}

console.log(formatDuration(0));

const formatDuration = s => s == 0 ? 'now' :
     [Math.floor(s/60/60/24/365),
      Math.floor(s/60/60/24)%365,
      Math.floor(s/60/60)%24,  
      Math.floor(s/60)%60 ,
      s%60]
     .map((e,i)=> e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e>1?'s': ''))
     .filter(e=> !/^0/.test(e))
     .join(', ')
     .replace(/,\s(?=[\d\s\w]*$)/, ' and ');




function formatDuration (seconds) {
let units = [
  ['year', 60 * 60 * 24 * 365], ['day', 60 * 60 * 24],
  ['hour', 60 * 60], ['minute', 60], ['second', 1]
];
let times = units.map(([name, time]) => {
  if (seconds < time) { return ''; }
  let newTime = ~~(seconds / time); // ~~ = Math.floor
  seconds %= time;
  return `${newTime} ${name}${newTime === 1 ? '' : 's'}`;
}).filter(t => t);
if (times.length === 0) { return 'now'; }
if (times.length === 1) { return times[0]; }
return times.slice(0, -1).join(', ') + ' and ' + times[times.length - 1];
}