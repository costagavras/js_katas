// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

const humanReadable = (seconds) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const min = String(Math.floor(seconds % 3600 / 60)).padStart(2, '0');
  const sds = String((seconds % 3600) % 60).padStart(2, '0');
  return hrs + ':' + min + ':' + sds;
}

console.log(humanReadable(359999));


function humanReadable(seconds) {
  return [~~(seconds/3600),~~(seconds/60)%60,seconds%60].map(n=>('0'+n).slice(-2)).join(':');
}
