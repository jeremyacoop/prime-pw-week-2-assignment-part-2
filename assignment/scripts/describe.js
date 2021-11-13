// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// Then we check whether or not the value of name is 'Mary'. Since its value is
// 'Dane', we console.log 'How do you do?'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret, and another variable called code which is set to 123
// as a number. Then we check whether the value of code is 123 or greater than 250.
// If code's value is 123, secret will be set to 'super' as a string and the value of code
// will be doubled to 246. If code's value is greater than 250, secret's value is set to 'duper'.
// Then we console.log the value of secret, in this case 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make 3 variables: isStudent (set to true as a boolean), age (set to 34 as a number), and
// zip (set to 55407 as a number). Then we check their values. If isStudent's value is true AND
// zip's value is greater than 80000, we console.log 'You're a student on the West Coast!' If
// isStudent's value is false OR age's value is under 30, we console.log 'What are your hobbies?'
// If isStudent's value is true, we console.log 'Welcome to Prime!' If none of these sets of
// conditions are met, we console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'.

/*
let colorOne = 'red';
let colorTwo = 'blue';
// FIX - colorOne should be 'blue' and colorTwo 'red'
let mix = true;

if (mix === true) {
  colorOne = 'purple';
   // FIX - colorTwo should also be set to 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
   // FIX - time should be declared with let, not const, since its value should
   // not be constant.
const time = 4;

// FIX - || should be &&, since both conditions would need to be true.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

   //FIX - In the if statement, minAge and age should be in reverse order, since
   // minAge is the constant value against which age is being checked. The 1st line 
   // should read if (age < minAge).
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
