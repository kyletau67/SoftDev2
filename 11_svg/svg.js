// Kyle Tau
// SoftDev2 pd 6
// K#11 -- Ask Circles [Change || Die] ...While On The Go
// 2019-03-15
var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
var goodbye = document.getElementById("goodbye");
var cleared = true;
var state = 0; //0 for standard, 1 for move, 2 for curve

//function to make circle on click
var makeCircle = function(e) {
  var x = e.offsetX;
  var y = e.offsetY;
  //draw circle
  var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c1.setAttribute("cx", x);
  c1.setAttribute("cy", y);
  c1.setAttribute("r", 10);
  c1.setAttribute("fill", "blue");
  c1.setAttribute("vX", 1);
  c1.setAttribute("vY", 1);
  c1.setAttribute("cvX", Math.floor(Math.random() * 5));
  c1.setAttribute("cvY", Math.floor(Math.random() * 5));
  c1.addEventListener("click", function(e) {
    //change color
    if (this.getAttribute("fill")=="blue") {
      this.setAttribute("fill", "green");
    }
    //change coordinates
    else {
      c1.setAttribute("cx", Math.floor(Math.random() * pic.getAttribute("width")));
      c1.setAttribute("cy", Math.floor(Math.random() * pic.getAttribute("height")));
      c1.setAttribute("fill", "blue");
    }
    e.stopPropagation();
  });
  pic.appendChild(c1);
};

var leaving = function(){
  var circles = document.getElementsByTagName("circle")
  for (var i=0; i < circles.length; i++) {
    var x = parseFloat(circles[i].getAttribute("cx"));
    var y = parseFloat(circles[i].getAttribute("cy"));
    var xpath = parseFloat(circles[i].getAttribute("cvX"));
    var ypath = parseFloat(circles[i].getAttribute("cvY"));
    var newX = x + xpath;
    var newY = y + ypath;
    circles[i].setAttribute("cx", newX);
    circles[i].setAttribute("cy", newY);
  }
}

var moving = function(){
  var circles = document.getElementsByTagName("circle")
  console.log(circles);
  for (var i=0; i < circles.length; i++) {
    console.log(circles[i].getAttribute("cx"));
    console.log(circles[i].getAttribute("cy"));
    var x = parseFloat(circles[i].getAttribute("cx"));
    var y = parseFloat(circles[i].getAttribute("cy"));
    var xpath = parseFloat(circles[i].getAttribute("vX"));
    var ypath = parseFloat(circles[i].getAttribute("vY"));
    if (x <= 0){ //goes right
	    circles[i].setAttribute("vX", 1);
	  }
	  else if (x >= pic.getAttribute("width")){ //goes left
	    circles[i].setAttribute("vX", -1);
	  }
	  if (y <= 0){ //goes up
	    circles[i].setAttribute("vY", 1);
	  }
	  else if (y >= pic.getAttribute("height")){ //goes down
	    circles[i].setAttribute("vY", -1);
	  }
    console.log(xpath);
    var newX = x + xpath;
    var newY = y + ypath;
    circles[i].setAttribute("cx", newX);
    circles[i].setAttribute("cy", newY);
  }
}

var aniMove = function() {
  state = 1;
  if (state == 1) {
    moving();
  }
  //aniMove();
}

var aniRandom = function() {
  state = 2;
  if (state == 2) {
    leaving();
  }
  //aniRandom();
}
//function to clear svg
var clearPic = function() {
  pic.innerHTML=''
  cleared = true
  state = 0
};

//listen
pic.addEventListener("click", makeCircle);
move.addEventListener("click", aniMove);
goodbye.addEventListener("click", aniRandom);
clear.addEventListener("click", clearPic);
