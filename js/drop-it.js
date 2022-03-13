function dropElements(arr, func) {
 
let index = (a) => {
  for(let i = 0; i <= arr.length - 1; i++){
    let value = arr[i];
    if (func(value) === true){
      return arr.indexOf(value)
    }
    else if (i === arr.length - 1){
      return arr.length
    }
  }
}

return arr.splice(index(arr))

}

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //should return [3, 4].

// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].

// dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].

// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].

// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //should return [7, 4].

// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2].