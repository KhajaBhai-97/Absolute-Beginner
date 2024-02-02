/* You are provided with the radius of a circle "A". Find the length of its circumference.

Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

Input Description:
The Radius of a circle is provided as the input of the program.

Output Description:
Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

Sample Input :
2
Sample Output :
12.57
 */

//circumference of circle = 2 * 3.14 * radius

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

  const pi = 3.14159265359;
  let radius = +userInput[0];
  let circumference = 2 * pi * radius;
  if (circumference >= 0) {
    console.log(circumference.toFixed(2));
  } else {
    console.log("Error");
  }

  //end-here
});
