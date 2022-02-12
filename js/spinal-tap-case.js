function spinalCase(str) {
  
  let a = str.split(/["-"]|[" "]|["_"]|(?=[A-Z])/);
  
  for(let i in a){
    a[i] = a[i].toLowerCase()
  }
  
  str = a.join("-")

  return str;
}

//spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap")
//spinalCase("The_Andy_Griffith_Show")
//spinalCase("Teletubbies say Eh-oh")
//spinalCase("AllThe-small Things")