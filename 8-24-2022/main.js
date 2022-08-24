/* write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers. */

//STRING METHOD
//P:(size), must be a string, function shouod be called stringy, string should start with a 1 and aternate between 1 and 0
//R: take a size and return a string of alternating 1s and 0s
//E:(3)=>'101'
    //(6)=> '101010'

    //name function stringy
    function stringy(size) {
        //create a variable to hold a string
        let str = ''
        // loop through the size of string
        for (let i = 1; i <= size; i++){
            // add only 1s and 0s to string variable
          str += i%2;
        }
        //return string
        return str
      }