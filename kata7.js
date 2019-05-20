// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

//params: h > 0, bounce > 0 and < 1, window < h.

function bouncingBall(height,bounce,window) {
  if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
  var views = 1;
  while (height * bounce > window) {
    views +=2;
    height = height * bounce;
  }
  console.log(views);
}

bouncingBall(30, 0.66, 1.5);
