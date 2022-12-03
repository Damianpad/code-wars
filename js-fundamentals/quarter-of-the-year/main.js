//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
//and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    // Initial Solution

    // if (month >= 10 ){
    //     console.log('4rd Quarter');
    // } else if (month >= 7){
    //     console.log('3rd Quarter');
    // } else if (month >= 4){
    //     console.log('2nd Quarter');
    // } else {
    //     console.log('1st Quarter');
    // }

    // Refactored
    return month >= 10 ? 4
        : month >= 7 ? 3
        : month >= 4 ? 2
        : 1

    // Best Practice
    // const quarterOf = m => Math.ceil(m/3);
  }

  console.log(quarterOf(10));