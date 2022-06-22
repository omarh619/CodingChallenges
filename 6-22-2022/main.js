/* A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
 */

//P: bucket, search bucket to see if there is gold, array of strings
//R: return true if theres gold or false if theres none
// create a function that searches for gold
function searchForGold(bucket){
    // find a way to see if the bucket includes 'gold
    return bucket.includes('gold')
    // return true or false
}

//E: 
searchForGold(['stone','gold','sand'])//returns true
searchForGold(['stone','stone','sand'])// false
searchForGold([''])//false
