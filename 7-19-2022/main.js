/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

//P: (numbers), given an array of numbers, return a string in the form of a phone number, always will be 10 numbers given
//R: return a string in a phone number format
//E:
    //([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    function phoneNumber(numbers){
        //create variable for area code
        let areaCode = numbers.slice(0,3).join('');
        //create variable for first 3
        let phoneNum3 = numbers.slice(3,6).join('');
        //create variable ofr last four
        let lastFour = numbers.slice(6,numbers.length).join('')
        console.log(areaCode)
        console.log(phoneNum3)
        console.log(lastFour)
        //return in phone number format
        return `(${areaCode}) ${phoneNum3}-${lastFour}`
      }
    