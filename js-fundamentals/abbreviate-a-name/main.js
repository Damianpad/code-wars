/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

PREP

Parameter:
String

Return:
String

Example: 
function abbrevName(name){

}

Sam Harris => S.H
patrick feeney => P.F
*/

// function abbrevName(name){
//     return name.split(' ').map(name => name[0]).join('.')
// }



//Refactor

const abbrevName = name => name.split(' ').map(name => name[0]).join('.').toUpperCase()

console.log(abbrevName('Sam Harris'));

//Highest Rated: 
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }