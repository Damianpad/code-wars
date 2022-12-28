/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

PREP
Parameter:
String From a-z and/or A-Z

Return:
A String
that starts with a capital letter followed by the length of its index.
Include a dash in between each letter

Example:

function accum(s){

}

accum("abcd") -> "A-Bb-Ccc-Dddd"

Pseudo Code:
Write a function that takes in a string ranging from a-Z and/or A-Z
Iterate through each character and append that string * index length
return string


*/

function accum(s){
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
     return s.map(x => x[s])
    // for (i=0; i < s.length; i++){
    //     s[i]
    // }
    // console.log(s * s.length)
    
}

// const accum = s => s.map(x => x[i])

console.log(accum("abcd"));
