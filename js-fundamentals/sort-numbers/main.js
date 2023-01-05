/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

PREP

Paramater: Array
Return: a sorted Array

if the array is empty => empty array []

example:

function sortArr ([1,2,10,50,5]){
    return
}

return => [1,2,5,10,50]

function sortArr ([]){
    return 
}

return => []

Pseudo code:
Wrtie a function that takes in an array
sort that array with arr.sort()
*/

function sortArr(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }

console.log(sortArr([1,2,10,50,5]));

console.log(sortArr([]));



