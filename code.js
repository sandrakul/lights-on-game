/* Declaring and initializing variables */
var redbuttonr = 13;
var redbuttong = 92;
var redbuttonb = 121;

var orangebuttonr = 13;
var orangebuttong = 92;
var orangebuttonb = 121;

var yellowbuttonr = 13;
var yellowbuttong = 92;
var yellowbuttonb = 121;

var greenbuttonr = 13;
var greenbuttong = 92;
var greenbuttonb = 121;

var bluebuttonr = 13;
var bluebuttong = 92;
var bluebuttonb = 121;

var redscore = 0;
var orangescore = 0;
var yellowscore = 0;
var greenscore = 0;
var bluescore = 0;

function setup() {
  createCanvas(440, 550);
}

function draw() {
  background(24, 53, 97);

  /* Ground */
  noStroke();
  fill(24, 97, 72);
  rect(0, 340, 440, 210);

  /* Moon */
  fill(255, 246, 214);
  ellipse(370, 80, 50, 50);

  /* Side house on the left */
  fill(50);
  rect(50, 210, 90, 160);

  /* Roof on the left */
  fill(100);
  quad(50, 210, 150, 210, 150, 160, 80, 160);

  /* Side house on the right */
  fill(50);
  rect(300, 210, 90, 160);

  /* Roof on the right */
  fill(100);
  quad(300, 210, 390, 210, 360, 160, 80, 160);

  /* Main house */
  fill(0);
  rect(140, 130, 160, 240);

  /* Door */
  fill(98, 62, 14);
  rect(195, 280, 50, 90);
  fill(249, 220, 127);
  ellipse(235, 330, 12, 12);

  /* Main roof */
  fill(100);
  rect(130, 110, 180, 20);
  quad(140, 130, 300, 130, 270, 50, 170, 50);

  /* Light Switch Control Panel */
  var diameter = 45;

  stroke(0);
  fill(180);
  rect(40, 425, 360, 80);

  /* Red Button */
  fill(198, 14, 14);
  ellipse(80, 465, diameter, diameter);

  /* Orange Button */
  fill(198, 118, 14);
  ellipse(150, 465, diameter, diameter);

  /* Yellow Button */
  fill(252, 229, 78);
  ellipse(220, 465, diameter, diameter);

  /* Green Button */
  fill(77, 216, 49);
  ellipse(290, 465, diameter, diameter);

  /* Blue Button */
  fill(49, 105, 216);
  ellipse(360, 465, diameter, diameter);

  /* Windows and Lights */
  stroke(0);
  fill(13, 92, 121);

  var redbutton = dist(mouseX, mouseY, 80, 465);
  var orangebutton = dist(mouseX, mouseY, 150, 465);
  var yellowbutton = dist(mouseX, mouseY, 220, 465);
  var greenbutton = dist(mouseX, mouseY, 290, 465);
  var bluebutton = dist(mouseX, mouseY, 360, 465);

  /* Clicking the red button will turn on the lights in the highest window on the right side house
  /* It will also turn off the lights in the highest window on left side house
  */
  if (redbutton < diameter / 2 && mouseIsPressed) {
    redbuttonr = 255;
    redbuttong = 240;
    redbuttonb = 97;
    /* Changes score of the light turned on by the red button to 5 */
    redscore = 5;

    greenbuttonr = 13;
    greenbuttong = 92;
    greenbuttonb = 121;
    /* Changes score of the light turned on by the green button to 0 */
    greenscore = 0;
  }
  fill(redbuttonr, redbuttong, redbuttonb);
  /* Highest window on right side house */
  rect(325, 235, 40, 40);
  line(345, 235, 345, 275);
  line(325, 255, 365, 255);

  /* Clicking the orange button will turn on the lights in the window of the main house
  /* It will also turn off the lights in the highest window on right side house
  */
  if (orangebutton < diameter / 2 && mouseIsPressed) {
    orangebuttonr = 255;
    orangebuttong = 240;
    orangebuttonb = 97;
    /* Changes score of the light turned on by the orange button to 5 */
    orangescore = 5;

    redbuttonr = 13;
    redbuttong = 92;
    redbuttonb = 121;
    /* Changes score of the light turned on by the red button to 0 */
    redscore = 0;
  }
  fill(orangebuttonr, orangebuttong, orangebuttonb);
  /* Window on main house */
  rect(185, 180, 70, 60);
  line(185, 210, 255, 210);
  line(220, 180, 220, 240);

  /* Clicking the yellow button will turn on the lights in the lowest window on the right side house
  /* It will also turn off the lights in the lowest window on left side house
  */
  if (yellowbutton < diameter / 2 && mouseIsPressed) {
    yellowbuttonr = 255;
    yellowbuttong = 240;
    yellowbuttonb = 97;
    /* Changes score of the light turned on by the yellow button to 5 */
    yellowscore = 5;

    bluebuttonr = 13;
    bluebuttong = 92;
    bluebuttonb = 121;
    /* Changes score of the light turned on by the blue button to 0 */
    bluescore = 0;
  }
  fill(yellowbuttonr, yellowbuttong, yellowbuttonb);
  /* Lowest window on right side house */
  rect(325, 305, 40, 40);
  line(345, 345, 345, 305);
  line(325, 325, 365, 325);

  /* Clicking the green button will turn on the lights in the highest window on the left side house */
  if (greenbutton < diameter / 2 && mouseIsPressed) {
    greenbuttonr = 255;
    greenbuttong = 240;
    greenbuttonb = 97;
    /* Changes score of the light turned on by the green button to 5 */
    greenscore = 5;
  }
  fill(greenbuttonr, greenbuttong, greenbuttonb);
  /* Highest window on left side house */
  rect(75, 235, 40, 40);
  line(95, 235, 95, 275);
  line(75, 255, 115, 255);

  /* Clicking the blue button will turn on the lights in the lowest window on the left side house
  /* It will also turn off the lights in the main house window
  */
  if (bluebutton < diameter / 2 && mouseIsPressed) {
    bluebuttonr = 255;
    bluebuttong = 240;
    bluebuttonb = 97;
    /* Changes score of the light turned on by the blue button to 5 */
    bluescore = 5;

    orangebuttonr = 13;
    orangebuttong = 92;
    orangebuttonb = 121;
    /* Changes score of the light turned on by the orange button to 0 */
    orangescore = 0;
  }
  fill(bluebuttonr, bluebuttong, bluebuttonb);
  /* Lowest window on left side house */
  rect(75, 305, 40, 40);
  line(95, 345, 95, 305);
  line(75, 325, 115, 325);

  /* If the sum of the different coloured buttons' scores is 25, the win screen will appear */
  if (redscore + orangescore + yellowscore + greenscore + bluescore === 25) {
    noStroke();
    fill(138, 74, 222);
    rect(0, 0, 440, 550);
    fill(79, 0, 153);
    rect(40, 40, 360, 460);
    textFont("menlo");
    textSize(70);
    strokeWeight(1);
    stroke(249, 253, 142);
    fill(251, 255, 112);
    text("YOU WIN!", 55, 110);
    textSize(30);
    text("After playing the game that", 55, 180);
    text("your great aunt's second", 75, 219);
    text("cousin twice removed's", 77, 255);
    text("attorney recommended you", 55, 290);
    text("make, you finally learned", 65, 325);
    text("how to turn on all of the", 72, 360);
    text("lights in your spooky old", 68, 395);
    text("house! So long, dark", 92, 430);
    text("foreboding shadows!", 92, 465);
  }

  /* I attempted to add a game over screen, but my attempts never worked so I did not include it. However, this is the code for how it would've looked. */
  //   noStroke();
  //   fill(1, 0, 6);
  //   rect(0, 0, 440, 550);
  //   fill(7, 1, 47);
  //   rect(40, 40, 360, 460);
  //   textFont('menlo');
  //   textSize(68);
  //   strokeWeight(1);
  //   stroke(235, 34, 20);
  //   fill(255, 41, 26);
  //   text("YOU LOSE", 53, 110);
  //   textSize(25);
  //   text("Because your spooky old house's", 55, 165);
  //   text("wiring is... old, it couldn't handle", 55, 200);
  //   text("how quickly and repeatedly you", 60, 235);
  //   text("turned the lights on and off so it", 60, 270);
  //   text("burnt out. Thankfully, this only", 65, 305);
  //   text("happened in the game your great", 57, 340);
  //   text("aunt's second cousin twice", 85, 375);
  //   text("removed's attorney recommended", 50, 410);
  //   text("you make, your real house is still", 55, 445);
  //   text("fine! Try again?", 140, 480);
}
