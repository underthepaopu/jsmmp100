var diam1 = 50;
var fade = 255;
var fadeAmount = 1;

function setup() {
    createCanvas(500, 500);

    background("#512b63");

    textSize(25);

    textFont('Georgia');
}

function draw() {
    fill("#e8d0f4");

    text('Hold click!', 185, 25);

    fill("#512b63");

    text('Press any key!', 175, 475);

    fill(232, 208, 244, fade);

    strokeWeight(0);

    if(mouseIsPressed === true) {
        ellipse(random(width),random(height),diam1,diam1);
        diam1 += 5;
    }

    if (fade >= 255) fadeAmount = -10;

    if (fade <= 0) fade = 255;

    fade += fadeAmount;

    if(keyIsPressed === true) {
        clear();
        background("#512b63");
        diam1 = 0;
    }
  }

 