let angle = 0;
let squareX = 0;
let ball = {
  x: 100,
  y: 100,
  radius: 20,
  xSpeed: 2,
  ySpeed: 3
};

let nameX = 0; 
let nameDirection = 1; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Georgia'); 
  textSize(20);
}

function draw() {
  background(255, 204, 204); 

  let r = map(sin(frameCount * 0.1), -1, 1, 255, 204); 
  let g = map(cos(frameCount * 0.1), -1, 1, 153, 204); 
  let b = map(sin(frameCount * 0.2), -1, 1, 102, 153); 

  fill(r, g, b); 
  squareX += 2; 
  if (squareX > width) {
    squareX = -100; 
  }

  push();
  translate(width / 2 + squareX, height / 2);
  rotate(angle);
  
  beginShape();
  vertex(0, -50);
  bezierVertex(50, -100, 100, -50, 0, 50); 
  bezierVertex(-100, -50, -50, -100, 0, -50); 
  endShape(CLOSE);
  
  pop();

  angle += 0.01;

  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  if (ball.x > width - ball.radius || ball.x < ball.radius) {
    ball.xSpeed *= -1;
  }
  if (ball.y > height - ball.radius || ball.y < ball.radius) {
    ball.ySpeed *= -1;
  }

  fill(255, 165, 153); 
  ellipse(ball.x, ball.y, ball.radius * 2);

  ball.radius = 20 + 10 * sin(frameCount * 0.1);

  for (let i = 0; i < 10; i++) {
    fill(255, 140, 122);
    ellipse(50 + i * 20, 200, 15);
  }

  for (let j = 0; j < 10; j++) {
    fill(255, 99, 71); 
    ellipse(350 - j * 20, 300, 15);
  }

  nameX += nameDirection * 2; 
  if (nameX > width - 100 || nameX < 0) {
    nameDirection *= -1; 
  }

  fill(255, 105, 180); 
  textAlign(LEFT, BOTTOM);
  text("xintongli", nameX, height - 20); 
}