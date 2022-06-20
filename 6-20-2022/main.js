/* Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!

 */
//P: (a,b,operator) a and b are positive integers
//R: return the result of a and b using an operator
function arithmetic(a,b,operator){
    //create a switch statement for each operator
    switch (operator) {
        case 'add':
            return a+b;

         case 'subtract':
            return a-b;

            case 'divide':
                return a/b;
                
                case 'multiply':
                    return a*b;
            
    
       
    }
}

//E:
arithmetic(2,3,'add')//returns 5
arithmetic(3,2,'subtract')// 1
arithmetic(2,3,'multiply')//6