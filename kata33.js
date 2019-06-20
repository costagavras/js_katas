// 12:22 --> 11:38
// 05:25 --> 06:35
// 01:50 --> 10:10
// 11:58 --> 12:02
// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.
// Return the real time as a string. Consider hours to be between 1 <= hour < 13.

function WhatIsTheTime(timeInMirror){
  if (timeInMirror === "12:00") {
    return timeInMirror;
  }
  let [h, m] = timeInMirror.split(":");
  let h2, m2;
  m === "00" ? m2 = m : m2 = 60 - m;
  h >= "11" ? h2 = 23 - h : m === "00" ? h2 = 12 - h : h2 = 11 - h;

  if (m2.toString().length === 1) {
    m2 = "0" + String(m2);
  }
  if (h2.toString().length === 1) {
    h2 = "0" + String(h2);
  }
  return h2 + ":" + m2;
}

console.log(WhatIsTheTime("04:00"));

Number.prototype.mod = function(n) {
  return ((this % n) + n) % n;
};

function whatIsTheTime(mirrored) {
  const [mh, mm] = mirrored.split(':').map(Number);
  const m = (-mm).mod(60);
  const h = (-mh - (m && 1)).mod(12) || 12;
  return [h, m].map(n => ('0' + n).slice(-2)).join(':');
}

const WhatIsTheTime = whatIsTheTime;

let WhatIsTheTime = t => {
  let [h, m] = t.split(':');
  h = (+m ? 11 : 12) - h % 12 || 12;
  m = (60 - m) % 60;
  return [h, m].map(e => e > 9 ? e : '0' + e).join(':');
}
