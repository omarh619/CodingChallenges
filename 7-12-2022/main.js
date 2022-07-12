/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

//P: (pin)return true or false if pin is passed, 4 0r 6 digit codes of numbers only to pass
//R: return true if pin code is valid or false if not.
//E: '1234'=> true
    //'12345'=> false
    //'a234' => false

    function validPIN(pin){
        // create variable of valid numbers
        let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let count = 0;
        //split string to see if each digit is valid
        for(let i of pin.split('')){
            if(num.includes(i)){
                count += 1
            }else{
                return false
            }
        }
        return count === 4 || count === 6
        //create a count variable
        //return 4 or 6 digit count
    }