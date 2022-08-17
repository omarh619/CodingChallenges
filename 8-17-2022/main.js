/* Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her? */

//P: (name), if name is johnny return 'hello my love', anyone else return a greeting, all names will be upper cased
//R: if name is johnny return 'hello my love', anyone else return a greeting
//E: ("Jim"), "Hello, Jim!");
    //("Jane"), "Hello, Jane!");
    //("Johnny"), "Hello, my love!")

    function greet(name){
        //conditional for johnny
        if(name === "Johnny"){
        return "Hello, my love!";
        // else return a normal greeting
          }else{
      return "Hello, " + name + "!";
    }
    }