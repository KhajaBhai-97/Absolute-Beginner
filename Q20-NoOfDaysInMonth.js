/* You will be provided with a number. Print the number of days in the month corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

Input Description:
The input is in the form of a number.

Output Description:
Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

Sample Input :
8
Sample Output :
31
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

  let ip = Number(userInput[0]);
  let day;

  switch (ip) {
    case 1:
      day = "31";
      break;
    case 2:
      day = "28";
      break;
    case 3:
      day = "31";
      break;
    case 4:
      day = "30";
      break;
    case 5:
      day = "31";
      break;
    case 6:
      day = "30";
      break;
    case 7:
      day = "31";
      break;
    case 8:
      day = "31";
      break;
    case 9:
      day = "30";
      break;
    case 10:
      day = "31";
      break;
    case 11:
      day = "30";
      break;
    case 12:
      day = "31";
      break;
    default:
      day = "Error";
      break;
  }

  console.log(day);

  //end-here
});
