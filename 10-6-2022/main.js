DESCRIPTION:
/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

STRINGSDATA STRUCTURES */

//str - no empty str, only letters

//"The quick brown fox jumps over the lazy dog." => true

function isPangram(str) {
    // create variables for alphabet and to lowercase str
    // loop through str to check if all char are used
    // return conditional
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}