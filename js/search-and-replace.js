function myReplace(str, before, after) {
  
  let m = str.match(before)
  let l = m[0][0]
  
if(l === l.toLowerCase()){
  let af = after.replace(after[0], after[0].toLowerCase())
  return str = str.replace(before, af)
} else {
  let af = after.replace(after[0], after[0].toUpperCase())
  return str = str.replace(before, af)
}

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")


/*

myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.

myReplace("His name is Tom", "Tom", "john") should return the string His name is John.

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

*/