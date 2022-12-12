/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Prep

Parameters: 2 strings containing letters from a - z

Return: a new SORTED string that:
is the longest possible 
returns only letters once coming from s1 or s2

Example:

function longest(str1, str2){

}

str1 = "xyaabbbccccdefww"
str2 = "xxxxyyyyabklmopq"
longest(str1, str2) -> "abcdefklmopqwxy"

*/

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

const longest = (s1, s2) => [... new Set(s1+s2)].sort().join('')

let a = 'xyaabbbccccdefww'
let b = 'xxxxyyyyabklmopq'
console.log([...new Set(a+b)].sort().join(''));

console.log(typeof []);
typeof []
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));