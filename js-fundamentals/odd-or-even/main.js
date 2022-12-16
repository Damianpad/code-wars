/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!


PREP

Parameter: 
Given an array

Return: 
A string "odd" or "even" after checking the sum of the given array 

Example:

function checkSumOddEven(){

}

input [0] 
output: 'even'

input [0, 1, 4]
output: 'odd'

input [0, -1, -5]
output: 'even'

Pseudo:

Write a function that takes in an array of integers
Add up all the elements in the array
check if the sum is odd or even
return string: "odd" if odd
return string: "even" if even

*/

function checkSumOddEven(arr){
    const sum = arr.reduce(function(a,b) {
        return a + b
    }, 0)
    if (sum % 2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}

checkSumOddEven([0, 1, 4])

// Voted best practice:
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }