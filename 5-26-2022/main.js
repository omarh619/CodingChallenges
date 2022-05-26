/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null. */

//P: array, has to be a number
//R: return new array, square root or squared

    //need to map for new array

    //conditional? include % for conditional, array must be a number

    //function to square or square root

function squareOrSquareRoot(array){
    return array.map(num => {
        if(Number(Math.sqrt(num)% 1 === 0)){
            return Math.sqrt(num)
        }else{
            return num * num
        }
    })
}
    // my dry code
//const squareOrSquareRoot = array => array.map(num=> Math.sqrt(num)%1===0? Math.sqrt(num) : num*num)


//E: 
squareOrSquareRoot([2,3,4,5,6])// return [4,9,2,25,36]
squareOrSquareRoot([16,100,25])//retrurn [4,10,5]
squareOrSquareRoot([3,7,2])//return [9,49,4]