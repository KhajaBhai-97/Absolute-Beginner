/* Write a code get an integer number as input and print the odd and even digits of the number separately.

Input Description:
A single line containing an integer.

Output Description:
Print the even and odd integers of the integer in a separate line.

Sample Input :
1234
Sample Output :
2 4
1 3
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

  let ip = userInput[0].split("");
  ip.sort();

  let oddNum = "";
  let evenNum = "";

  for (let i = 0; i < ip.length; i++) {
    if (ip[i] % 2 === 0) {
      evenNum = evenNum + ip[i] + " ";
    } else {
      oddNum = oddNum + ip[i] + " ";
    }
  }

  console.log(evenNum.trim());
  console.log(oddNum.trim());

  //end-here
});
