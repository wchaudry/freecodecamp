function binaryAgent(str) {

let barr = str.split(" ")
let darr = []
for (let i=0; i<=barr.length -1; i++){
  darr.push(String.fromCharCode(parseInt(barr[i],2)))
}
return darr.toString().replace(/,/g, "")

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");