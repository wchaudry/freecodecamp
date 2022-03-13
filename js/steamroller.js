function steamrollArray(arr) {

let flat = []; 

let dig = (value) => {
  for(let j = 0; j <= value.length - 1; j++){
    if(Array.isArray(value[j]) === false){
      flat.push(value[j])
    } 
    else if(Array.isArray(value[j]) === true){
        dig(value[j])
    }
  }
}

dig(arr)

return flat

  
}

steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].