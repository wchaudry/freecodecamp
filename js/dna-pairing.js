function pairElement(str) {

let bp = [['A','T'],['C','G']]

let dna = []

let gp = (l) =>
{
  
  for (let i in bp){
    let b = bp[i]
    for (let j = 0; j < b.length; j ++){
        if (l === b[j]){
          if (j === 1){
            return [l,b[0]]
          } else if (j === 0){
            return [l,b[1]]
          }
        }
    }
  }
}


for (let i in str)
{
   let x = gp(str[i])
   dna.push(x)
}


  return dna;
}

//pairElement("GCG");

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

//pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

//pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].