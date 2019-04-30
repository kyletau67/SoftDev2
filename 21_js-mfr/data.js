//Kyle Tau
//SoftDev2 pd 6
//K21 -- Onions, Bell Peppers, and Celery, Oh My!
//2019-04-29

/* xmlhttp.open("GET", "data.txt", true);
var data = xmlhttp.responseText;
console.log(data)
var obj = JSON.parse(data)
console.log(obj); */

var x = [1,2,3,4]
var newX = x.filter(function(n) {return (n%2==0)});
console.log(newX)

//Average number of students
var enrollment = [500,400,300]
var calcAvg = function(n) {
  total = n.reduce( function(a,b) {return a + b});
  avg = (total / n.length);
  return avg;
}
var avg = document.getElementById("avg");
avg.innerHTML = calcAvg(enrollment)

//Percentage of Asian students
var totalNum = [450,320,340,290] //num of students in each school
var asians = [45,32,34,29] //num of asians in each school
var calcAsian = function(x,y) {
  total = x.reduce( function(a,b) {return a + b});
  totalAsians = y.reduce( function(a,b) {return a + b});
  asian_per = (totalAsians / total);
  return asian_per * 100;
}
var asian_per = document.getElementById("asian_per");
asian_per.innerHTML = calcAsian(totalNum,asians) + "%";

//Standard deviation of students
var students = [130,240,350,460]
var standardDeviation = function(n) {
  mean = calcAvg(n);
  sqDistance = students.map(function(x) {return (x - mean)*(x - mean)}); //square the difference for each data pt
  total = sqDistance.reduce(function(a,b) {return a + b});
  newTotal = total / n.length;
  return Math.sqrt(newTotal);
}
var sd = document.getElementById("sd");
sd.innerHTML = standardDeviation(students);
