function convertToRoman(num) {

  const roman = [[{I:1}, {IV:4}, {V:5}, {IX:9}], 
                 [{X:1}, {XL:4}, {L:5}, {XC:9}], 
                 [{C:1}, {CD:4}, {D:5}, {CM:9}], 
                 [{M:1}]];

  const getNumeral = (d,a) => {
    for(let i = 0; i < a.length; i++){ 
      if(d === 0){
        return ""
      }
      else if (d === Object.values(a[i])[0]){
        return Object.keys(a[i])[0]
      } else if (Object.keys(a[i])[0] === 'M' || d > Object.values(a[i])[0] && d < Object.values(a[i+1])[0]){
        let n = Object.keys(a[i])[0]
        let r = d - Object.values(a[i])[0]
        n = n + getNumeral(r, a)
        return n
      }
    }
  }
let numeral = ""
let dc = num.toString().length -1
for(let i = 0; i < num.toString().length; i++){
  let digit = Number(num.toString()[i]);
  numeral = numeral + getNumeral(digit, roman[dc])
  dc--
}
console.log(numeral)
return numeral;
}

convertToRoman(2) //should return the string II.
convertToRoman(3) //should return the string III.
convertToRoman(4) //should return the string IV.
convertToRoman(5) //should return the string V.
convertToRoman(9) //should return the string IX.
convertToRoman(12) //should return the string XII.
convertToRoman(16) //should return the string XVI.
convertToRoman(29) //should return the string XXIX.
convertToRoman(44) //should return the string XLIV.
convertToRoman(45) //should return the string XLV.
convertToRoman(68) //should return the string LXVIII
convertToRoman(83) //should return the string LXXXIII
convertToRoman(97) //should return the string XCVII
convertToRoman(99) //should return the string XCIX
convertToRoman(400) //should return the string CD
convertToRoman(500) //should return the string D
convertToRoman(501) //should return the string DI
convertToRoman(649) //should return the string DCXLIX
convertToRoman(798) //should return the string DCCXCVIII
convertToRoman(891) //should return the string DCCCXCI
convertToRoman(1000) //should return the string M
convertToRoman(1004) //should return the string MIV
convertToRoman(1006) //should return the string MVI
convertToRoman(1023) //should return the string MXXIII
convertToRoman(2014) //should return the string MMXIV
convertToRoman(3999) //should return the string MMMCMXCIX