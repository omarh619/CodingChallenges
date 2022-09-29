/* It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust). */

//P: (salary, bonus) salary is integer, bonus a boolean, if true return salary * 10, if false return just salary
//R: Return the total figure the individual will receive as a string prefixed with "£"
//E: (10000, true), '£100000');
    //(25000, true), '£250000');
    //(10000, false), '£10000');

    function bonusTime(salary, bonus) {
        // create variable for bonus plus salary
        let receiveBonus = salary * 10
      if(bonus == true){
        //return in string
        return `£${receiveBonus}`
      }else{
        return `£${salary}`
      }
      }