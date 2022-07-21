/* Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 */

//P: (word), take a string and return an ordered list containing the indexes of all capital letters in the string
//R: return indexes of capitl letters in a string
//E: ('CodEWaRs'), [0,3,4,6] 
    //('HeLLo') => [0,2,3]
    //('Oliver') => [0]

    function capitalIndex(word){
        //variable to hold indexes
        let caps = [];
        // loop to search for capitals
        for(let i = 0; i < word.length; i++){
            // conditional to push capitals to new array
            if(word[i].toUpperCase()=== word[i]){
                caps.push(i)
            }
        }
        //return results
        return caps
    }