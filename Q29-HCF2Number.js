/* Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

Input Description:
A single line containing 2 integers separated by space.

Output Description:
Print the HCF of the integers.

Sample Input :
2 3
Sample Output :
1
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

  let ip = userInput[0].split(" ");

  while (Math.max(ip[0], ip[1]) % Math.min(ip[0], ip[1]) !== 0) {
    if (ip[0] > ip[1]) {
      ip[0] %= ip[1];
    } else {
      ip[1] %= ip[0];
    }
  }

  console.log(Math.min(ip[0], ip[1]));

  //end-here
});
