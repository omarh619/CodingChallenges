/* Terminal game bug squashing
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
 */

//P: creat a function that calls basic functions in proper order, order should be: roll the dice, move, combat, get coins, buy more health, and print status
//R: return a function named main that calls basic functions in order
//E: - combat
/* - buyHealth
- getCoins
- printStatus
- rollDice
- move */

function main(){
    // make basic functions
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
    //functions have to be in proper order
}