function smallestCommons(arr) {
let a = arr.sort((a, b) => a - b)
 let fullArr = []
 for (let i = a[0]; i <= a[a.length - 1]; i++){
   fullArr.push(i)
 }
fullArr= fullArr.sort((a, b) => a - b);

console.log(fullArr)

 
 let testLCV = (f) => {
    for (let i in fullArr){
      // console.log(`Factor: ${f} | Divisor: ${fullArr[i]} | Value: ${f % fullArr[i]}`)
      if( f % fullArr[i] > 0){
        return false             
      }
    }
    return true
 }
 
  let findLCV = (fc,f) => {
    let myFactor = Number(f)
    let myConst = Number(fc)
    let myBool = testLCV(myFactor)
    if (myBool === false){
      myFactor = myFactor + myConst
      return findLCV(myConst,myFactor)
    } 
    else if (myBool === true){
      return myFactor
    }
  }

let factor = fullArr[fullArr.length-1]
let multiple = findLCV(factor,factor)
//console.log(multiple)

  return arr;
}


// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const range = Array(max - min + 1)
//     .fill(0)
//     .map((_, i) => i + min);
//   // Largest possible value for SCM
//   const upperBound = range.reduce((prod, curr) => prod * curr);
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     // Check if every value in range divides 'multiple'
//     const divisible = range.every((value) => multiple % value === 0);
//     if (divisible) {
//       return multiple;
//     }
//   }
// }

smallestCommons([1,5])
smallestCommons([5,1])
smallestCommons([2,10])
smallestCommons([1,13])
smallestCommons([23,18])