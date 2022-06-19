/* Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
 */

//P: (name,city, state) name will be an array 
//R: return a method that takes parameters and welcomes a person
function sayHello(name, city, state){
    //create variable that joins the array of names with one space between
    const fullName = name.join(' ');
    //return the inputs to welcome a person
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

//E:
sayHello(['John', 'Smith'], 'Pheonix', 'Arizona')//Hello, John Smith! Welcome to Phoenix, Arizona!

