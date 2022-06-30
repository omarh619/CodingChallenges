/* Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
 */
//P: a string of code, no numbers or empty spaces, all lowercased, take the string and sorted alphabetically.
//R: return string of code alphabetically
//E: 'qorsu' => oqrsu
    //'cdba' => 'abcd'
    //"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

    function sortGiftCode(code){
    //create variable where i can split each letter
    let sortedCode = code.split('').sort((a,b)=> {
        if(a>b) return 1;
        if(a<b) return -1;
    })
    console.log(sortedCode)
    // sort each letter alphabetically
    let finalCode = sortedCode.join('')
    //join string and return
        return finalCode
    }