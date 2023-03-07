// To run this assignment, in VS Code, look for the Explorer tab or pane on the left side
// (VS Code's Explorer icon should look like one or two pages of paper 📄, representing files),
// find and right-click on the file "index.html", and select the option "Open with Live Server".

/***********************/
/* Using Conditionals  */
/***********************/

//Complete the Following Exercises.

// ----------------------------------------------------------------------------------------------
console.log("Exercise One: IS THE NUMBER LARGER THAN 10?"); // Do not modify the lines like this before each exercise; these are to make the console output more readable :)

// IS THE NUMBER LARGER THAN 10?
//   - Create an empty variable to store your message.
//     Hint: let message = ""
//   - Create an IF statement to check if variable "number" is greater than 10.
//   - If it is, assign the string "It is bigger than 10!" to your message variable.
//   - Change the number variable to something larger than 10, run your code, and make sure it works.
//   - Your code should return the message variable.

// START your code for Kata/Exercise 1 here 👇
let number = 5;

function kata1() {
	
}
let kata1Message = kata1();
console.log(kata1Message)
// END your code for Kata/Exercise 1 here 👆

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two: DETERMINING A COLOR");
// DETERMINING A COLOR
//   - Create an empty variable to store your message.
//   - Pick either "blue", "red", or "green", and assign it to the "color" variable.
//   - Create an if statement. If the color is "blue", assign "The sky is blue." to your message variable.
//   - Create an else if statement, and if the color is "red", assign "The flower is red." to your message variable.
//   - Create another else if statement, and if the color is "green", assign "The leaf is green." to your message variable.
//   - Finally, create an else statement that will assign "It is a different color." to your message variable.
//   - Test your code! Change the value of the color variable to different colors, and run your code.
//   - Your code should return the message variable.

// START your code for Kata/Exercise 2 here 👇
let color = "";

function kata2() {
	
}
let kata2Message = kata2();
console.log(kata2Message)
// END your code for Kata/Exercise 2 here 👆

// ----------------------------------------------------------------------------------------------
console.log("Exercise Three: EVEN OR ODD");
// EVEN OR ODD
//   - Create an empty variable to store your message.
//   - Create an if statement that determines if variable "integer" has an even or odd number.
//     Hint: The Special Operators Reading explains how to do this. Go back, read it, and look for the "Remainder" operator.
//   - If "integer" is even, assign "The number is even." to your message variable. 
//   - Otherwise, assign "The number is odd."
//   - Change the number assigned to "integer" to different odd and even numbers to make sure your code works.
//   - Your code should return the message variable.

// START your code for Kata/Exercise 3 here 👇
let integer = 4;

function kata3() {

}
let kata3Message = kata3();
console.log(kata3Message)
// END your code for Kata/Exercise 3 here 👆

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four: WHAT KIND OF A NUMBER?");
// WHAT KIND OF A NUMBER?
//   - Create an empty variable to store your message.
//   - Then write conditional statements to create the following results with variable "count".
//     If the number is greater than 10 and the number is less than 20, assign "Between 10 and 20!" to your message variable.
//     If the number is greater than or equal to 20, assign "20 or greater!" to your message variable.
//     If the number is exactly 16, assign "16!" to your message variable.
//     If the number is less than or equal to 10, assign "10 or less!" to your message variable.
//   - Try changing count to other numbers! Try these: 3, 13, 16, or 20.
//     Make sure that each of the four cases output the correct message.

// HINT ONE:
//     You may need to rearrange your conditions to make this work!
//     A good practice is to take the most restrictive condition and check it first (like 16), then work your way to the most broad condition (like 3).

// HINT TWO:
//     You can either do this with nested if statements, or you can do it with a chain of if else statements, and some of those just might need multiple conditions.
//     Like: if (a && b) 
// - Your code should return the message variable.

// START your code for Kata/Exercise 4 here 👇
let count = 17;

function kata4() {

}
let kata4Message = kata4();
console.log(kata4Message)
// END your code for Kata/Exercise 4 here 👆

// 🚨 READ 🚨
// When you are done with all of the exercises above, check your console output to make sure it
// matches the expected output for each exercise and to make sure all the unit tests pass.
// Remove any extra console.log() statements you may have added from your code.




/* 
LEAVE THE FOLLOWING CODE UNMODIFIED 🚷
*/

function modifyNumber(value) {
    return number = value;
}
function modifyColor(value) {
    return color = value;
}
function modifyInteger(value) {
    return integer = value;
}
function modifyCount(value) {
    return count = value;
}

export {
    modifyNumber,
    modifyColor,
    modifyInteger,
    modifyCount,
    kata1,
    kata2,
    kata3,
    kata4,
};
