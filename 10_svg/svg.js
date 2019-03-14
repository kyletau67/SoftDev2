// Kyle Tau
// SoftDev2 pd 6
// K#10 -- Ask Circles [Change || Die]
// 2019-03-13
var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var cleared = true;

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
  c1.addEventListener("click", clicked)
  pic.appendChild(c1);
};

//ask Circle
var clicked = function() {
  console.log(this);
 if (this.style.fill == "blue") {
    console.log("hi");
    this.setAttribute("fill", "green");
    console.log(this);
  }
//  else {
//    move();
//  }
}

//var move() = function() {

//}
//function to clear svg
var clearPic = function() {
  pic.innerHTML=''
  cleared = true
};
//listen
pic.addEventListener("click", makeCircle);
clear.addEventListener("click", clearPic);
