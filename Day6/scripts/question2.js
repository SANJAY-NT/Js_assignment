function printTable()
{
let input = prompt("Enter the number for multiplication table");
if(!isNaN(input)) {
    var table="";
    var number="";
    for(i=1;i<=10;i++) {
        number = input * i;
        table +=  input + " * " + i + " = " + number + "<br/>";
    }
    document.getElementById("mul").innerHTML = table;
}
else {
    document.getElementById("mul").innerHTML = "Please Enter a valid Number";
}
}
printTable();

var c =  ['green', 'blue', 'yellow', 'pink', 'red','orange','purple'];
var currentColorIndex = 0;

function fun() {
  document.bgColor = c[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % c.length;
  setTimeout(fun, 5000);
}
fun()