/*

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12


Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

/*
PREP
Parameters:
Given a Number

Return:
Return the number back as Negative
If Negative NO CHANGE is required
ZERO is not checked

Example:
function makeNegative(num){
    if (num < 0){
        return -Math.abs(num)
    }
}

Pseudo Code
Write function that takes in a num as a parameter
Check if that number is a negative
If positive then return back as a negative
*/

// Original Function:

// function makeNegative(num){
//     if (num > 0){
//         return -Math.abs(num)
//     }
// }



// Refactored:
// const makeNegative = num => num>0 ? -Math.abs(num) : num



// Voted Best Practice. Also looks more readable:

/*
function makeNegative(num) {
  return -Math.abs(num);
}

const makeNegative = num => -Math.abs(num)
*/

const makeNegative = num => -Math.abs(num)

console.log(makeNegative(10));