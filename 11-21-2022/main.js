
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta" */

// str - only string, no special char, no empty strings

//"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" => "alpha beta gamma delta alpha beta gamma delta" */

function removeDupli(str){
  //split string
  // filter string without duplicates
  //join string
  return str.split(' ').filter((el,i,arr)=> el !== arr[i+1]).join(' ')
  
} 

console.log(removeDupli("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))