const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let name = firstAndLast.split(" ");

  this.setFullName = function(fullName) {
    name = fullName.split(" ");
  }

  this.setFirstName = function(first) {
    name[0] = first;
  }

  this.setLastName = function(last) {
    name[1] = last;
  }

  this.getFirstName = function(){
    return name[0]
  }

  this.getLastName = function(){
    return name[1]
  }

  this.getFullName = function() {
    return name[0] + " " + name[1];
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob).length)
console.log(bob instanceof Person)
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFirstName());
console.log(bob.getFullName());
bob.setLastName("Curry")
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());