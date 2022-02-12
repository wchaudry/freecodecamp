function uniteUnique(arr) {

let a = arguments

let c = []
let n = []

for (let i = 0; i < a.length; i++){
  if (i === 0){
    c = a[i]
  } else if (i > 0){
    n = a[i]
    for (let j = 0; j < n.length; j++){
      if(c.indexOf(n[j]) < 0){
        c.push(n[j])
      }
    }
  }
}

  return c;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])