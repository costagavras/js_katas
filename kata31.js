// You throw a ball vertically upwards with an initial speed v (in km per hour).
// The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t
// where g is Earths gravity (g ~ 9.81 m/s**2).
// A device is recording at every tenth of second the height of the ball.
// For example with v = 15 km/h the device gets something of the following form:
// (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ...
// where the first number is the time in tenth of second and the second number the height in meter.
//
// Write a function max_ball with parameter v (in km per hour)
// that returns the time in tenth of second of the maximum height recorded by the device.

// function maxBall(v0) {
//   var v0mps = v0/3.6;
//   const g = 9.81;
//   var h = 0, hMax = 0; tMax = 0;
//   for(var t = 1; t < 1000000; t++) {
//     h = v0mps*t/10 - 0.5*g*t*t/100;
//     console.log(h);
//     if (h > hMax) {
//       hMax = h;
//       tMax = t;
//     } else {
//       return tMax;
//     }
//   }
// }

const maxBall = v => Math.round(v / 3.5316)
function maxBall(v) {
  // Quadratic formula massively simplified because we always start from zero.
  return Math.round(v / .36 / 9.81);
}

console.log(maxBall(25));

// function maxBall(v0) {
//   const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
//   return Math.round(secondsToTenths * v0 / mpsToKph / g);
// }
