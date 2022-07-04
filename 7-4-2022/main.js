/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

//P: (str), reverse each word in the string with same spacing, same order just reversed the words
//R: return each word reversed in string
//E: "This is an example!" ==> "sihT si na !elpmaxe"
    //"double  spaces"      ==> "elbuod  secaps"
    //"hello world" => "olleh dlrow"
    function revEachWord(str){
        //split reverse and join
        let reverseStr = str.split('').reverse().join('')
        console.log(reverseStr)
        // split again and reverse again and join 
        let result = reverseStr.split(' ').reverse().join(' ')
        console.log(result)
        //return result
        return result
    }