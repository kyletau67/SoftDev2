// <!--
// Kaile: Kyle Tau and Kaitlin Wan
// SoftDev2 PD6
// K#04 -- What is it saving the screen from?
// 2019-02-07r
// -->

//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to A PRETTY BLUE! :D
ctx.fillStyle = "#c4ebff";

var requestID;
var radius = 0;
var growing = true;


var drawDot = function() {
  window.cancelAnimationFrame(requestID);

  ctx.clearRect(0, 0, c.width, c.height);

  if (growing) {
    radius += 1;
  } else {
    radius -= 1;
  }

  if (radius == (c.width / 2))
    growing = false;
  else if (radius == 0) {
    growing = true;
  }

  //draw the dot
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  requestID = window.requestAnimationFrame(drawDot);
};

var dvdLogoSetup = function() {
  stopIt();//Stop the circle IF it was pressed
  console.log("clear canvas");
  ctx.clearRect(0, 0, 500, 500); //clear
  window.cancelAnimationFrame(requestID);
  var rectWidth = 100; // desired size of logo
  var rectHeight = 50; // desired size of logo

  //place logo at random position
  var rectX = Math.floor(Math.random() * (c.width - rectWidth));
  var rectY = Math.floor(Math.random() * (c.height - rectHeight));

  //moving down and to the right!
  var xVel = 1;
  var yVel = 1;

  //created an Image obj for our logo
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  console.log("finished setup");


  var dvdLogo = function() {
    window.cancelAnimationFrame(requestID);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    console.log(rectX, rectY)
    if (rectX == (c.width - 100)) { //offset to accomodate logo size
      console.log("JUST HIT RIGHT! Bouncing left")
      xVel = -1;
    } else if (rectX == 0) {
      console.log("hit left! Bouncing right")
      xVel = 1;
    } else if (rectY == 0) {
      console.log("hit top! Bouncing down")
      yVel = 1;
    } else if (rectY == (c.height - 50)) { //offset to accomodate logo size
      console.log("hit bottom! Bouncing down")
      yVel = -1;
    } else {
      console.log("continuing to move!")
    }
    rectX = rectX + xVel //changing position of logo x axis
    rectY = rectY + yVel //changing position of logo y axis
    requestID = window.requestAnimationFrame(dvdLogo);
  }
  dvdLogo(); //recursively call for functionality
};

//Stops everything.
var stopIt = function() {
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup);
//c.addEventListener( "click", drawDot );
//drawDot();
//dvdLogo();
