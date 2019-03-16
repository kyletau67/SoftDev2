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

//function to clear svg
var clearPic = function() {
  pic.innerHTML=''
  cleared = true
};
//listen
pic.addEventListener("click", makeCircle);
clear.addEventListener("click", clearPic);
