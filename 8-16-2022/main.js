/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

//P:(beast, dish), all will be lower case, strings may contain hyphens and spaces but not at the beginning or end , will not contain numbers
//R: return true or false to indicate whether the beast is allowed to bring the dish to the feast
//E:
/*  ("great blue heron", "garlic naan"), true)
    ("chickadee", "chocolate cake"), true)
    ("brown bear", "bear claw"), false) */

    function feast(beast, dish) {
        // write conditional
        // fir =st letter of beast and first letter of dish have to be equal
        // last letter of each need to equal also
        if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]){
            // return true
          return true
        }else{
            // else false
          return false
        }
        }