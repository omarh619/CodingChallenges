/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

 */

//P: (num_pill, dist, width), The distance between the pillars is the same and the width of the pillars is the same
//R: return the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
//E: (1, 10, 10) => 0)
    //(2, 20, 25) => 2000)
    //(11, 15, 30) => 15270)

    function pillars(num_pill, dist, width) {
        //conditional if pillars < 2
        if (num_pill < 2) return 0;
        //create variable to find width of all pillars
        const widthAllPillars = (num_pill - 2) * width;
        // create variable to find the distance
        const distAll = (num_pill - 1) * (dist * 100);
        // return distance + width
        
        return distAll + widthAllPillars;
      }