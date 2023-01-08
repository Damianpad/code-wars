/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

PREP
Parameter:
number
return:
string
*/

//Original solution
function numberToString(num){
    return num.toString()
}

//refactor for code warsie solution
const numberToString = num => num.toString()
