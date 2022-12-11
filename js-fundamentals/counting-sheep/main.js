/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Parameters: Pass in an array with true and false values. 
// True => present 
// False => !Present

// Return: The function will return the number of sheep present

// Example:
function sheepPresent(arr){

}

sheepPresent([true, false]) // 1 sheep present
sheepPresent([false, false, false]) // 0 sheep present
sheepPresent([true, true, false, false]) // 2 sheep present

// Pseudo Code
// Write a function that takes in an arry of sheep
// Check how many items in the array are true
// Return the number of true (present)
