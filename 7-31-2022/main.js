/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels */

//P: (string),first, take in a string and replace the vowels with the number assigned to them (a-u=> 1-5), will all be lowercased. Second step, youll get a string with vowels replaced with assigned numbers and 'decode' them back to normal.
//R: return a string 'encoded' and 'decoded'
//E: ('hello') => 'h2ll4'
    //('h2ll4') => 'hello'
    //('test') => 't2st'
    // ('t2st') => 'test'

    function encode(string){
        //create variable to hold new string
        let encoded = '';
        // loop through the whole string and add a switch statement to replace all vowels with numbers
        for(let i = 0; i < string.length; i++){
            switch(string[i]){
                //after every case remember to break
                case 'a' : encoded += '1' // this will replace the vowel with number and push it to new string
                break;
                case 'e' : encoded += '2'
                break;
                case 'i' : encoded += '3'
                break;
                case 'o' : encoded += '4'
                break;
                case 'u' : encoded += '5'
                break;
                // add a default statement
                default: encoded += string[i]
            }
        }
        return encoded
        console.log(encoded)
    }

    function decode(string){
        //create variable to hold new string
        let decoded = '';
        // loop through the whole string and add a switch statement to replace all numbers with with vowels
        for(let i = 0; i < string.length; i++){
            switch(string[i]){
                //after every case remember to break
                case '1' : decoded += 'a' // this will replace the number with vowel and push it to new string
                break;
                case '2' : decoded += 'e'
                break;
                case '3' : decoded += 'i'
                break;
                case '4' : decoded += 'o'
                break;
                case '5' : decoded += 'u'
                break;
                // add a default statement
                default: decoded += string[i]
            }
        }
        return decoded
        console.log(encoded)
    }