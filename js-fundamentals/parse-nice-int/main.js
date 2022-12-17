/* 
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

PREP

Parameter:
String

Return:
int (girls age)

Example

function parseAge(str){

}

"5 years old" // 5
*/

// function parseAge(str){
//     return parseInt(str[0])
// }

const parseAge = str => parseInt(str[0])

console.log(parseAge("5 years old"));

//Voted best practice
function getAge(inputString){
    return parseInt(inputString);
  }