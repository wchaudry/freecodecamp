function fearNotLetter(str) {

let c = []
for (let i = 0; i < str.length; i++){
 c.push(str.charCodeAt(i))
}

for(let i =0; i < c.length; i++){
    let s = c[i+1]
    let f = c[i]
    let m
    if (s - f > 1){
      m = String.fromCharCode(c[i]+1)
        return m
    } else if (s === undefined && i === (c.length -1)){
      return undefined
    }
} 
  
}

console.log(fearNotLetter("abce"));

console.log(fearNotLetter("abce")) //should return the string d.

console.log(fearNotLetter("abcdefghjklmno")) //should return the string i.

console.log(fearNotLetter("stvwx")) //should return the string u.

console.log(fearNotLetter("bcdf")) //should return the string e.

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) //should return undefined.




//  console.log(str.substring(0, str.length - 1)
  //    + String.fromCharCode(str.charCodeAt(str.length - 1) + 1));

//String.prototype.charAt(index)
//Returns the character (exactly one UTF-16 code unit) at the specified index.

//String.prototype.charCodeAt(index)
