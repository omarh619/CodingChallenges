/* Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated. */

//P: birds, create a variable for geese array
//R: return 
function gooseFilter (birds) {
    //need a variable array for geese
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    //return a new array filtering out geese 
    return birds.filter(bird => !geese.includes(bird))
    };
//E: 
gooseFilter('Mallard', 'African')//returns 'Mallard'
gooseFilter('African', 'Roman Tufted', 'Pilgrim')//returns empty array
gooseFilter('Mallard', 'Hook Bill')//returns same