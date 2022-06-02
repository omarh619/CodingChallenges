/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

//P: str of num, must be a number
//R: return  the highest and the lowest numbers and space them out
        //split the str and sort them
        function highAndLowNums(num){
            let newStr = num.split(' ').sort((a,b)=> a-b);
         //return last num of str and first and space them
         return newStr[newStr.length - 1] + ' ' + newStr[0];
        }


       



//E:
highAndLowNums('1 2 3 4 ')// return '4 1'
highAndLowNums('5 8 7 4 6 3 2 4 ')//return '8 2'
highAndLowNums('9 8 7 6 5 4 ')// '9 4'