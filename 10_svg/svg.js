// Kyle Tau
// SoftDev2 pd 6
// K#09 -- Connect the Dots
// 2019-03-12
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
  pic.appendChild(c1);
};
//listen
pic.addEventListener("click", makeCircle);

//function to clear svg
var clearPic = function() {
  pic.innerHTML=''
  cleared = true
};
//listen
clear.addEventListener("click", clearPic);
