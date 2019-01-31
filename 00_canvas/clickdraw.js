//Kyle Tau
//SoftDev2 pd 6
//K00 -- I See a Red Door...
//2019-1-30

var c = document.getElementById('slate');
var ctx = c.getContext('2d');
var state = 1

document.getElementById('toggle').onclick = function(){
  if (state == 0){
    state = 1; //state 1 draws rectangles
  }
  else{
    state = 0; //state 0 draws dots
  }
}

var circle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillRect(x,y, 1, 1)
}

var rect = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillRect(x,y, 10, 10)
}

var draw = function(e){
    if (state == 0) {
	     circle(e);
    }
    else {
       rect(e);
    }
}

c.addEventListener("click", draw);

//clearing the canvas
var clear = function(e){
  ctx.clearRect(0, 0, c.width, c.height)
}

var clearC = document.getElementById("clear")
clearC.addEventListener("click", clear);
