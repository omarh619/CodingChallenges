/* Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56 */

//P:(string) separate all numbers in string. return all numbers as a string
//R:  return all numbers as a string
//E: ("1"), 1);
    //("123"), 123);
    //("this is number: 7"), 7);

    function getNumberFromString(s) {
        //variable to hold results
        let result = ''
        //loop through string to find numbers
        for(let i = 0; i < s.length; i++){
           // if theres numbers send to variable
          if(Number(s[i]) || s[i] === '0')
            result += s[i]
        }
      //return result as a number
        return Number(result)
      }