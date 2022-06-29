/* Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9 */

//P: (n), integer will always be positive, return n that are multiples of 3, if number is not a multiple of three remove the last digit until it becomes one, if not possible return null
//R: return n when n is multiple of 3, if not then return null
//E:25     => null
   // 36     => 36
    //1244   => 12
    function multipleOfThree(n){

    // create a while loop that removes a digit until n becomes multiple of 3
    while ( n % 3 != 0){
        n = Math.floor(n/10);
        if(n < 1){
            return null
        }
    }
        return n
    // write conditional where to return multiple of 3s if not possible return null
    // return 
    }
        