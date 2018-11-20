var value = 0;
var opacity = 255;

function preload(){
  // put preload code here
myDonut = loadImage("./assets/donut.jpg");
myHomer1 = loadImage("./assets/homer1.jpg");
myHomer2 = loadImage("./assets/homer2.jpg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  setShakeThreshold(10);
  frameRate(12);

}

function draw() {
  // put drawing code here
  background(255-value, 255-value, 255-value);
  push();
  tint(255, -opacity);
  imageMode(CENTER);
  image(myHomer2, windowWidth/2, windowHeight/2, 360, 600);
  pop();

  push();
  tint(255, opacity);
  image(myDonut, 360, 250, 240, 170);
  image(myHomer1, windowWidth/2.5, windowHeight/3, 360, 600);
  pop();

  fill(89,65,140);
  textSize(25);
  textFont('Amatic SC');
  textAlign(CENTER);
  text('Shake your phone to help Homer get his donut!', 50, 90, 255);


}

function deviceShaken() {

  opacity = opacity - 20;

  value = value + 1;
  if (value > 255) {
    value = 0;
  }

}


function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}
