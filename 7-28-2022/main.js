/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

 */

//P: (num), turn num to binary num and return the sum of the binary representation
//R: return the sum of the binary numbers.
//E: 1234 => 5
    // 0 => 0
    // 4 => 1

    function binarySum(num){
        // turn to binary
        let binary = num.toString(2);
        // remove the zeros
        let number = binary.split('0').join('').length;
        console.log(number)
        // return the length (it will be the sum as only 1's will be left)
        return number
    }