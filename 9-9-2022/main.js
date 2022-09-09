/* The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name) */

//P:(players, goose), Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
//R: return the name of the chosen Player
//E:(players, 1),  "a");
// (players, 3),  "c"
// players, 10), "z"


const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name
// subtract one from goose since the count is not zero indexed (goose - 1)
// obtain index of player by dividing goose by 4 and keeping the remainder ((goose - 1) % players.length)
// obtain the value of the index (players[(goose - 1) % players.length])
// obtain the name property (.name)
// return the result