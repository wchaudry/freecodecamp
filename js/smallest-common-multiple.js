function smallestCommons(arr) {
  
  //order the pairs
  let [min,max] = arr.sort((min,max) => min - max)

  //fill numbers between pairs
  let upper = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)

  //find max multiple
  let max_m = upper.reduce((m,v) => m * v)
  //loop through the range and divide by increments of max to find the scm
  for(let m = max; m <= max_m; m += max){
    let scm = upper.every((value) => m % value === 0)
    if(scm){
      console.log(m)
      return (m)
    }
  }

}