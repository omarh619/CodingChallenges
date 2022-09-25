

/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

//P:(s), replace the misinterpreted characters with the correct ones
//R: correct the errors in the digitized text
//E: ("L0ND0N"),"LONDON");
    //("DUBL1N"),"DUBLIN");
    //("51NGAP0RE"),"SINGAPORE")

    function correct(s){
        //split string
        s = s.split('');
        // loop through string
        for (var i = 0; i < s.length; i++) {
            //replace characters with correct one
          if (s[i] === '5') s[i] = 'S';
          else if (s[i] === '0') s[i] = 'O';
          else if (s[i] === '1') s[i] = 'I';
          }
          // join the string and return
        return s.join('');
      }