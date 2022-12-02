function removeExclamationMarks(s){
    if (s.includes('!')) {
        return s.replaceAll(/!/g, '')
    } 
}

console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('EFKikKLNgI!TwTKkzwbsL OvHxANCFqY!dUwQNdcxkZ'));
