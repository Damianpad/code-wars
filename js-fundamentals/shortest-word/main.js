/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

PREP

Parameters: 
Given a String of words
The strings are never empty
No need to account for different data types

Return:
Return the LENGTH of the shortest word(s)

Example
function giveLength(str){

}

"This is a string" // 1
"Welcome to this challenge" // 2

Pseudo:
Write a function that takes in a string of words
slice the string
count length of each result
return the lowest length

*/

function giveLength(str){
    let newString = str.split(' ')
    console.log(newString);
    newString.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
      })
}

// const giveLength = str => str.split(' ')

console.log(giveLength("This is a string"));
