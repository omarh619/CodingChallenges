/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

//P: year, must be a number
//R: return what century the year is from
function whatCentury(year){
    //create a variable to add centuries
    let century = 0;
     //loop the years
    for(let i = 0; i < year; i++){
    if( i % 100 === 0){
        century += 1;
    }
    }
    return century
    //write conditional,

}





//E:
whatCentury(1999)// century 20
whatCentury(2022)// 21
whatCentury(5)// 1