/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

PREP
Parameters: List of pairs
Senior: 55+ and > 7
Return: An Array that will categorize like so: "Senior" if over 55 and > 7 else String: "Open"
Example:

function checkNewMember(arr){

}

input = [[11,20],[61,12]] // Output: ["Open", "Senior"]

Pseudo:
write a function that takes in an array
filter each pair of the array and if truthy return "Senior" and falsy return "Open"
*/

// function checkNewMember(arr){
//     const filtered = arr.filter(function(value) {
//         return value >= 55
//     })
//     return filtered
// }

// console.log(checkNewMember([4,44,55,5,67,88]));

// const filtered = arr.filter(n => n >= 55)

// console.log(filtered([4,44,55,5,67,88]));

let materials = ['Hydrogen','Helium','Lithium']

const materialsLength = materials.map(i => i.length)

console.log(materialsLength);