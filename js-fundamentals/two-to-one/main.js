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

/*
Set is a special kind of Object which stores unique values. This way, when you make a "new Set()" out of the concatenated strings, it will reduce every repeated character to a single value in the Set object.

Because "Set" is an Object, you can't just sort() it, since it is a method for arrays. Yet, the Set is an "iterable" object - that means it kind of behaves like arrays for some stuff:

Unlike other objects that are not iterable (for example: { a: 1, b: 2 }), you can use the spread operator (...) to attribute/add all Set's values to an array.

So when the code goes "[...new Set(s1+s2)]" it is creating a new array "[]" out of "..." a new Set object "new Set()" made of the concatenation of s1 and s2 strings "s1+s2".

When I used spread (...) in my code, I used it to actually break down the string into an array of every letter. But on this solution, Set breaks it down to every letter and the spread operator (...) works to copy the Set object's values to an array which then can be sorted and joined into a string once again.
*/