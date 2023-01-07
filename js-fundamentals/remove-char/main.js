/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

PREP
Parameter:
String
Returning:
String
Example

function removeChar(str){

}

"Hello" -> "ell"
pseudo:
Write a function that takes in a string
remove the characters at index[0] and str.length - 1
return string
*/

function removeChar(str){
    return str.slice(1, str.length-1) 
}

console.log(removeChar('Hello'));