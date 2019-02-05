// <!--
// Kaile: Kyle Tau and Kaitlin Wan
// SoftDev2 PD6
// K#03 -- They lock us in the tower whenever we get caught
// 2019-02-04
// -->

var c = document.getElementById("playground");
var circle = document.getElementById("circle");
var stop = document.getElementById("stop");
var ctx = c.getContext("2d");

var radius = 0;
var state = "grow" //will be grow, shrink, or stop
var id;
ctx.fillStyle = 'blue'

// Clear the canvas
var clear = function(e){
  var width = c.getAttribute("width");
  var height = c.getAttribute("height");
  ctx.clearRect(0,0,width, height);
}


circle.addEventListener('click', function(e) { //grow or shrink
  state = "grow"
  animate();
});

stop.addEventListener('click', function(e) { //state turns to stop
  state = "stop"
  animate();
});

//animation function
function animate()
{
  console.log(state)
	ctx.clearRect(0, 0, c.width, c.height)
	if (state == 'grow') {
    if (radius < 250) {
		    radius += 5
	  }
	  else {
		    state = 'shrink' //if circle touches the border, it will begin shrinking
  	}
  }
  else if (state == 'shrink'){
    if (radius > 0) {
      radius -= 5
    }
    else {
      state = 'grow' //if the circle reverts to nothing, it will begin growing
    }
  }
  else {
    ctx.beginPath()
    ctx.ellipse(c.width/2, c.height/2, radius, radius, 0, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
    return; //makes sure the circle doesn't disappear after stop is pressed
  }
	ctx.beginPath()
  ctx.ellipse(c.width/2, c.height/2, radius, radius, 0, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  id = window.requestAnimationFrame(animate) //calls to continue drawing
}
