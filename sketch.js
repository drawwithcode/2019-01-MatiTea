function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(224, 161, 117);
  angleMode(DEGREES);
  frameRate(9);
}

let strokeColor = [194, 53, 121];
let strokeColorToggle = false;

function draw() {
  translate(windowWidth / 2 - width / 5, windowHeight / 2 - width / 5);

  points = 90; // number of points
  pointAngle = 360 / points; // angle between points
  radius = width / 5; // length of each line from centre to edge of circle
  angle = 0;
  angle = angle + pointAngle;

  x = cos(frameCount * angle) * radius;
  y = sin(frameCount * angle) * radius;

  stroke(strokeColor);
  strokeCap(ROUND);
  line(2 * radius, radius, radius + x, radius + y); // draw a line from each point back to the centre

  if (frameCount == points) {
    noLoop();
  }
}

function mouseClicked() {
  if (strokeColorToggle === false) {
    strokeColor = [60, 35, 34];
  } else {
    strokeColor = [194, 53, 121];
  }

  // invert boolean
  strokeColorToggle = !strokeColorToggle;
}
