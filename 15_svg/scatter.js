//Kyle Tau
//SoftDev2 pd 6
//K15 -- Scattered
//03-21-2019
var svg = document.getElementById("vimage");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var data = {145: 233,
130: 250,
130: 204,
120: 236,
120: 354,
140: 192,
140: 294,
120: 263,
172: 199,
150: 168,
140: 239,
130: 275,
130: 266,
110: 211,
150: 283,
120: 219,
120: 340,
150: 226,
150: 247,
140: 239,
135: 234,
130: 233,
140: 226,
150: 243,
140: 199,
160: 302,
150: 212,
110: 175,
140: 417,
130: 197,
105: 198,
120: 177,
130: 219,
125: 273,
125: 213,
142: 177,
135: 304,
150: 232,
155: 269,
160: 360,
140: 308,
130: 245,
104: 208,
130: 264,
140: 321,
120: 325,
140: 235,
138: 257,
128: 216,
138: 234};

//x-axis
var xAxis = function() {
    var x_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    x_axis.setAttribute("x1", width/2 - 200);
    x_axis.setAttribute("x2", width/2 + 200);
    x_axis.setAttribute("y1", height/2);
    x_axis.setAttribute("y2", height/2);
    x_axis.setAttribute("stroke", "black");
    svg.appendChild(x_axis);
}

//y-axis
var yAxis = function() {
    var y_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    y_axis.setAttribute("x1", 50);
    y_axis.setAttribute("x2", 50);
    y_axis.setAttribute("y1", height/2-250);
    y_axis.setAttribute("y2", height/2);
    y_axis.setAttribute("stroke", "black");
    svg.appendChild(y_axis);
};

//plotting data
var plot = function() {
    var xCoordinates = [];
    var yCoordinates = [];
    var length = Object.keys(data).length;

    //add coordinates
    for (var key in data) {
			yCoordinates.push(key);
			xCoordinates.push(data[key]);
    }
		//make dots
    for (i = 0; i < length; i++) {
			var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c.setAttribute("r", 5);
			c.setAttribute("cx", xCoordinates[i]);
			c.setAttribute("cy", yCoordinates[i]);
			svg.appendChild(c);
    }
};

//Creates the labels for each axis
var labels = function() {
    var xLabel = "Cholesterol";
    var yLabel = "Blood Pressure";

    var xLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xLabel.setAttribute("x", width/2);
    xLabel.setAttribute("y", height/2+25);
    xLabel.setAttribute("fill", "black");
    xLabel.textContent = "Cholesterol";
    var yLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yLabel.setAttribute("x", 0);
    yLabel.setAttribute("y", 100);
    yLabel.setAttribute("fill", "black");
    yLabel.textContent = "BP";

    svg.appendChild(xLabel);
    svg.appendChild(yLabel);
    //---------------------------------numbers on axes
    var xNum = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xNum.setAttribute("x", width-110);
    xNum.setAttribute("y", height/2+15);
    xNum.setAttribute("fill", "black");
    xNum.textContent = "300";
    var yNum = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yNum.setAttribute("x", 5);
    yNum.setAttribute("y", 25);
    yNum.setAttribute("fill", "black");
    yNum.textContent = "300";

    svg.appendChild(xNum);
    svg.appendChild(yNum);
};

xAxis();
yAxis();
plot();
labels();
