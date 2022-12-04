/* Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
 */

// no empty strings, normal letters, 

//("Fox", "x"), true);
//("Rhino", "o"), true);
//("Meerkat", "t"), true)

function correctTail(bod, tail) {
    // if last letter of bod === tail return true
    return bod[bod.length-1] === tail
  }
    