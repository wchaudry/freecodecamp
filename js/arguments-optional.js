function addTogether() {

  const [a,b] = arguments;
  
  if(typeof a !== 'number'){
    console.log(undefined)
    return undefined
  } else if(typeof b === 'undefined'){
      return (b) => addTogether(a,b) 
  } else if(typeof b !== 'number'){
    //  console.log(undefined)
      return undefined
  }

  return a + b
}

//addTogether(2, 3) //should return 5.

// addTogether(23, 30) //should return 53.

// addTogether(5)(7) //should return 12.

// addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") //should return undefined.

// addTogether(2, "3") //should return undefined.

// addTogether(2)([3]) //should return undefined.

// addTogether("2", 3) //should return undefined.