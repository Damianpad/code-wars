/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

PREP
Parameter: number

Return BOOL

Example:

2 -> true
3 -> false
*/

// function testEven(n){
//     if (n % 2 === 0){
//         return true
//     } else false
// }

const testEven = n => n % 2 === 0 ? true : false