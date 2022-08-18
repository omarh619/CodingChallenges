/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

//P:(bullets, dragon) , it takes 2 bullets to defeat a dragon, return true or false if he has enough bullets to defeat the dragons
//R:  return true or false if he has enough bullets to defeat the dragons
//E:
/*  (10, 5), true);
    (7, 4), false);
    (4, 5), false) */

    function hero(bullets, dragons){
        // 2 bullets per dragon
        //if bullets are greater or equal return true
        return bullets >= dragons * 2
      }

