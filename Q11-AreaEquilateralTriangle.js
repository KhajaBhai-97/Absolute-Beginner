/* The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.

Input Description:
The side of an equilateral triangle is provided as the input.

Output Description:
Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

Sample Input :
20
Sample Output :
173.21
 */

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  let a = userInput[0];

  let area = (1 / 4) * (Math.sqrt(3) * (a * a));

  console.log(area.toFixed(2));

  //end-here
});
