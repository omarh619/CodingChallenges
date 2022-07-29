DESCRIPTION:
/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CIPHERSFUNDAMENTALS */

 //P: (message) were gonna have a string. numbers and special characters included. dont change nums or characters english and latin only.
     //R: return ciphered with rot13 ( every letter + 13 from that letter)
     //E: [test]=> ['grfg']
       // ['Test']=> ['GrfG']
       // ['A'] => ['N']
     

function rot13(message){
   
     //change the letters in that string, create a new array to place the letters
     let cipher = '';
     let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm';
     let upperAlphabet = alphabet.toUpperCase();
     console.log(upperAlphabet)
     //loop through array 
     for (let i = 0; i < message.length; i++){
       if(alphabet.indexOf(message[i].toLowerCase()) ===-1){
         cipher += message[i]
         continue; //continue will restart loop...opposite of break
       }
       if(message[i] === alphabet[alphabet.indexOf(message[i])]){
         cipher += alphabet[alphabet.indexOf(message[i])+13];
         continue
     }
     cipher += upperAlphabet[upperAlphabet.indexOf(message[i])+13]
       }
     return cipher
   }
   