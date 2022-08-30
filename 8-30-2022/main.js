/* Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
 */

//P: (value) return as a string, return a 5 digit value
//R: return value should equal 'Value is value'
//E: solution(5)=> 'Value is 00005
    //(0)=> 'Value is 00000'
    //(12345)=> 'Value is 12345'

    function solution(value){
        //create a variable where i get a 5 digit value
        // slice to get last 5 digits of number
        let result = ('00000' + value).slice(-5)
        return `Value is ${value}`
    }