/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

//P: (data), determine if membership is open or senior, for senior must be 55 and a handicap over 7 , if not open member
//R: given age and handicap in an array of 'applicants', return if theyre open or senior members
//E: input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// [38,7] => 'open'
// [60,8] => 'senior'

    function openOrSenior(data){
        // create a variable to hold new array of applicants
        let applicants = [];
        // loop through array to see what member qualifies for 
        data.forEach(member=> {
            if(member[0] >= 55 && member[1] > 7){
                applicants.push('Senior')
            }else{
                applicants.push('Open')
            }
        })
        return applicants
        // push to new array
        // return the new array
    }