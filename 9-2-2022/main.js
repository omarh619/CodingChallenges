/* Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
 */

//(str) string of words, reverse the words
//R: return the string reversed
//E:"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function  revStr(str){
    //first split each word
    // reverse the string
    // join the string with spaces
    return str.split(' ').reverse().join(' ')
}