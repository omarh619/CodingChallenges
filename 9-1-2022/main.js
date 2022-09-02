/* Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */

//P(words), array of words, need spaces between words, no spaces in beginning or end
//R: return an array of words and join them to form a sentence
//E: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
function makeASentence(words){
    // join the words
    //make sure you space them out but not at beginning or end
    return words.join(' ')
}
