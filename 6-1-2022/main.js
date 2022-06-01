/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

//P: num, must be a number
//R: split the number return num squared and join them

    //must be a number
    function squaredDigitsAndConcat(num){
        return Number((num + '').split('').map(val=> val * val).join(''))
    }
    //turn to string to split
    //make new string and square
    //join string


//E:
squaredDigitsAndConcat(1221)//returns 1441
squaredDigitsAndConcat(3213)//9419
squaredDigitsAndConcat(1111)//1111