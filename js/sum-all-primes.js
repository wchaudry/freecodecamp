function sumPrimes(num) {

  const MY_NUM = num;
  const FIRST_PRIME = 2;

  let mtrx = () => {
    let arr = []
    for (let i = FIRST_PRIME; i <= MY_NUM; i++) {
      arr.push(i)
    }
    return arr
  }

  let bmtrx = (obj, p) => {
    let nextPrime = obj[0];
    for (let i in obj) {
      if (obj[i] % nextPrime === 0) {
        let index = obj.indexOf(obj[i])
        obj.splice(index, 1)
      }
    }
    if (obj.length > 0) {
      p.push(obj[0])
      bmtrx(obj, p)
    }
    let pSum = 0
    for (let i in p) {
      pSum = pSum + p[i]
    }
    return pSum
  }

  let a = mtrx()
  let prime = [];
  prime.push(2)

  let sumOfPrime = bmtrx(a, (prime))

  return sumOfPrime;
}

sumPrimes(977);