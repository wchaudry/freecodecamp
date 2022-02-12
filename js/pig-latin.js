function translatePigLatin(str) {
  let c = str.match(/[^aeiou]+/gi)
   
  if (str[0].match(/[^aeiou]+/gi) === null){
    return str + "way"
    } else {
      return str.substr(c[0].length,str.length)+str.substr(0,c[0].length) + "ay"
    }
}

translatePigLatin("consonant");
translatePigLatin("california")
translatePigLatin("paragraphs")
translatePigLatin("glove")
translatePigLatin("algorithm")
translatePigLatin("eight")

/*
translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/