let strokeColor = [194, 53, 121];
let strokeColorToggle = false;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(66, 15, 105);
  angleMode(DEGREES);
  frameRate(9);
}

function draw() {
  textSize(20);
  text('Click to change stroke color', 150, 100);

  translate(windowWidth / 2 - width / 5, windowHeight / 2 - width / 5);

  points = 90; // number of points
  pointAngle = 360 / points; // angle between points
  radius = width / 5; // length of each line from centre to edge of circle
  angle = 0;
  angle = angle + pointAngle;

  x = cos(frameCount * angle) * radius;
  y = sin(frameCount * angle) * radius;

  stroke(strokeColor);
  strokeWeight(1.3);
  strokeCap(ROUND);
  line(2 * radius, radius, radius + x, radius + y); // draw a line from each point back to the centre

  if (frameCount == points) {
    noLoop();
  }
}

function mouseClicked() {
  if (strokeColorToggle === false) {
    strokeColor = [246, 148, 32];
  } else {
    strokeColor = [194, 53, 121];
  }

  // invert boolean
  strokeColorToggle = !strokeColorToggle;
}
