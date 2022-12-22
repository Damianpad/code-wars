/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

PREP

Parameter:
Array

Return:
Bool -> True if better else False

Example:

function betterThanAverage(classPoints, yourPoints){

}


*/

function betterThanAverage(classPoints, yourPoints){
    let sumClass = classPoints.reduce(function(a,b) {
        return a + b / classPoints.length
       
    },0)
    
    return sumClass
    // return sumClass > yourPoints ? false : true
}

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))

/*
Top Rated solution:
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/