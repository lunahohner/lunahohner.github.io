var ball = document.querySelector('.ball');

// Initial position and velocity of the ball
var x = 0;
var y = 0;
var vx = 5;
var vy = 5;
var containerWidth = window.innerWidth;
var containerHeight = window.innerHeight;

setInterval(update, 16); // Update the ball position every 16ms (60fps)

function update() {
  // Update the position and velocity of the ball
  x += vx;
  y += vy;

  // Bounce off the left and right walls
  if (x + ball.clientWidth > containerWidth || x < 0) {
    vx = -vx;
  }

  // Bounce off the top and bottom walls
  if (y + ball.clientHeight > containerHeight || y < 0) {
    vy = -vy;
  }

  // Update the position of the ball in the DOM
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}