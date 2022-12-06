/*
Your task is to make a function that can take any non-negative integer as an argument 
and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(123564541));

// Understand:

//Create a function that takes in a number
// Convert that number into a string
// Then split that string into individual elements of an array
// sort that that array into ascending order
// reserve that order so that the elements are descending order
// join the elements to a new array
// convert result back into an array

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

// Code Weenie Answer

// const descendingOrder = n => parseInt(String(n).split('').sort().reverse().join(''))

console.log(descendingOrder(54712541251));




// If you want to arrange a number into ascending order you can just omit the .reverse() method
function ascendingOrder(n){
    return parseInt(String(n).split('').sort().join(''))
}
console.log(ascendingOrder(54712541251));