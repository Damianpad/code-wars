/*  
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

PREP

Parameters: Days: integer
Return: 
Int total amount for different Days(d)

Example
function rentalCarCost(d){
    // Solution
}

input: 1 // $40 for 1 day
input 3 // $100 total (Over 3 days $20 off)
input 7 // 280 - 50 Discount = $230 total 

Pseudo:
Write a function that takes in a total days of vacation (d)
Write a conditional that give total. The price changes depending on 1-2 3-6 7 and up
Return int with total amount
*/

// function rentalCarCost(d){
//     if (d < 3){
//         return d * 40
//     }else if (d <= 6){
//         return (d * 40) -20
//     }else {
//         return (d * 40) - 50
//     }
// }

// console.log(rentalCarCost(3));

// Rated as Best Practice

function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }