/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

//P: ballType, class constructor
//R: return ballType, of no argument return 'regular'
//create class constructor
const Ball = function(ballType) {
    //this class constructor
    //return ballType or 'regular'
    this.ballType = ballType || 'regular'
      
    };


//E:
ball1 = new Ball()// returns 'regular'
ball2 = new Ball('super')// 'super'
ball3 = new Ball('mega')// 'mega'