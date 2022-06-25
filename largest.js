var read = require("readline-sync");

num1 = read.question("ENTER TWO NUMBERS -  ");
num2 = read.question("");

if (num1 > num2) {
  console.log("Largest number is " + num1);
} else if (num1 === num2) {
  console.log("Equal Numbers");
} else {
  console.log("Largest Number is " + num2);
}
