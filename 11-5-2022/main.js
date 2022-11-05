/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2. */

// return total sum of angles

// (n)- only nums, num always greater than 2

//(3)=> 180
//(4)=> 360

function angle(n) {
    // n - 2 * 180
    return (n - 2) * 180
}