var a = 0;
var b = 0;
var c = 0;
var discriminant = 0;

var x2 = 0;

var x1 = 0;


function calculate() {

  a = document.getElementById("a").value;
  b = document.getElementById("b").value;
  c = document.getElementById("c").value;

  discriminant = (b*b)-(4*a*c)

  x1 = ((b*-1) + Math.sqrt(discriminant)) / (2 * a)

  x2 = ((b*-1) - Math.sqrt(discriminant)) / (2 * a)

  document.getElementById("output").innerHTML = "x = " + x1 + " & x = " + x2;

}