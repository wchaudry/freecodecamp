function rot13(str) {
  
const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const output =	'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'

let cMap = {}

for(let i = 0; i < input.length; i++){
  let item = '{' + '\"' + output[i] + '\"' + ':' + '\"' + input[i] +'\"' + '}'
  let obj = JSON.parse(item)
  Object.assign(cMap,obj)
}

let dcrypt = ""

for (let i in str){
  if (str[i].match(/^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿ ]*$/g)){
    dcrypt = dcrypt + cMap[str[i]]
  } else
    dcrypt = dcrypt +str[i]
}
console.log(dcrypt)
return dcrypt
}

rot13("SERR PBQR PNZC") //should decode to the string FREE CODE CAMP

rot13("SERR CVMMN!") //should decode to the string FREE PIZZA!

rot13("SERR YBIR?") //should decode to the string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.