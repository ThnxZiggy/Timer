//write a function that takes argument from terminal
//terminal values can only be numbers
//skip input if it is blank or not number or number is negative
//function will act as alarm and beep after specified time has passed
//terminal arguments are to count as seconds**
//so if user enters 5, code should multiply by 1000 to turn into milliseconds
//ex. node timer1.js 10 3 5 15 9
//will beep at 3 seconds, 5 seconds, 9 seconds, 10 seconds, 15 seconds
//run for loop using process.argv[2]
// function alertTerminal(){
//   console.log("\007");
// }
//let timer = 100
// for (const time of beep) {
// if (typeof input !== "number" && input < 0) {
 
// }

//let input = process.argv[2];
let b = '\x07';
const beep = function() {
  process.stdout.write(b);
};

// if (typeof input === "number" && input > 0) {
const timing = function(delay) {
  delay = Number(delay); //-----converts to number and assigned back to delay
  if (!isNaN(delay) && delay > 0) {//if delay is non a number(but with !) it means if delay IS a number
    setTimeout(beep, delay * 1000);
  }
};

const number = process.argv.slice(2); //don't use process.argv[2]
for (const num of number) {
  timing(num);
}