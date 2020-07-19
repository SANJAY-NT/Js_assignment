

let num;

do {
  num = prompt("Enter a number greater than 100", 101);
} while (num <= 100 && num);
console.log("The number  entered is " + num);