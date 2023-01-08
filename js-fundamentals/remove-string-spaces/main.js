/*
Simple, remove the spaces from the string, then return the resultant string.

PREP
Parameters:
string
return: 
string

example: 
function noSpace(x){
    
}

"hello world" => "helloworld"
*/

function noSpace(x){
    return x.replaceAll(' ', '')
}