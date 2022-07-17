/* You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
 */
//P: run the calculation 2+2*2+2*2 and get the answer 32
//R: fix the function without changing the numbers to get 32
//E: 2+2*2+2*2 => 32

function orderOperators(){
    // need to separate with parenthesis to return proper number
    return (2 + 2) * (2 + 2) * 2 
    //return the correct number
}
