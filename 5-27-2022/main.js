/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

//P: humanYears, must be number
//R: return age in human, cat, dog
function humanCatDogYears(humanYears){
    //create variables for cat and dog
    humanYears = Number(humanYears)
    let catYears = 0;
    let dogYears = 0;
    //loop humanYears
    for(let i = 1; i <= humanYears; i++){
        if(i == 1){
            catYears += 15;
            dogYears += 15;
        }else if(i == 2){
            catYears += 9;
            dogYears += 9;
        }else{
            catYears += 4;
            dogYears += 5;
        }
        
    }
    return [humanYears,catYears,dogYears]

    //conditionals
}

//E:
console.log(humanCatDogYears(1))//returns (1,15,15)
humanCatDogYears(2)//returns (2,24,24)
humanCatDogYears(3)//returns (3,28,29)