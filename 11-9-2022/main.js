/* Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []" */

//(arr1,arr2)- two arr remove all values from list a , which are present in list b keeping their order.

// empty arr, all nums

//arrayDiff([1,2,2,2,3],[2]) == [1,3]
//arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
//arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

function arrayDif(a,b){
    //conditional for empty arr 
   /*  if(a.length === 0 || b.length === 0){
      return a 
    }else{
      return a.filter(x=> b.indexOf(x) === -1)
    } */
    let newSet = new Set(b)
    return a.filter(n =>  !newSet.has(n))
  }
  console.log(arrayDif([1,2,2,2,3],[2]))
  console.log(arrayDif([], [4,5]))
  console.log(arrayDif([3,4], [3]))