/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
 */

//P: str, separate by a space and at the length of word
//R: return the separated words in an array with the length number of each word
function separateAndAddLength(str){
    //create variable that splits string
    let sepStr = str.split(' ').map(word => word + ' ' + word.length)
    //make a new array that returns the separated words and add the length number
    // return the variable
    return sepStr
}


//E:
separateAndAddLength('apple ban') //returns ['apple 5', 'ban 3']
separateAndAddLength('you will win')// ['you 3', 'will 4', 'win 3']
separateAndAddLength('yo yo')// ['yo 2', 'yo 2']
