/* Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID" */

//P: (number, multiple) positive integers or else invalid
//R: return the sum of all multiples of number below multiple
function sumMul(n,m){
    //conditional if integers are invalid
    if(n >= m){
        return 'INVALID'
    }
    //create a variable to hold sum
    let sum = 0;
    //loop through all multiples and add to variable
    for (let i = n; i < m; i+=n){
        sum += i;
    }
    return sum
    
}


//E:
sumMul(3, 13) // ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) //==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7) // ==> "INVALID" 