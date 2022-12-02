function invert(arr){
    let invertedArr = []
    for (let i = 0; i < arr.length; i++){
        invertedArr.push(arr[i] * (-1))
    }
    return invertedArr
}

let array = [1,-2,3,4,-4,-5,-6]

console.log(invert(array));


// Best practice Solution
const invert = array => array.map(num => -num);

